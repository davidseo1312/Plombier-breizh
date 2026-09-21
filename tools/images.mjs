/* ==========================================================================
   Génère les déclinaisons WebP et les variantes de largeur des photos.
   Usage : node tools/images.mjs   (Chromium doit tourner sur le port 9222)

   Pour chaque image source, on produit `<nom>-<largeur>.webp` et
   `<nom>-<largeur>.jpg` à côté de l'original. Le site les utilise via
   src/lib/media.mjs, qui ne référence que les fichiers réellement présents :
   si ce script n'a jamais tourné, le site affiche l'original et rien ne casse.
   ========================================================================== */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';

const PORT = process.env.CDP_PORT || 9222;
const LARGEURS = [480, 760, 1100, 1536];
const Q_WEBP = 0.78, Q_JPEG = 0.80;

const sources = [];
for (const f of readdirSync('assets/photos')) if (f.endsWith('.jpg') && !/-\d+\.jpg$/.test(f)) sources.push('assets/photos/' + f);
for (const f of ['hero-plombier-breizh-camion.jpg', 'infographie-origine-bouchon.jpg'])
  if (existsSync('assets/img/' + f)) sources.push('assets/img/' + f);
for (const f of readdirSync('assets/img/confiance')) if (f.endsWith('.png') && !/-\d+\.png$/.test(f)) sources.push('assets/img/confiance/' + f);
if (existsSync('assets/logo-plombier-breizh.png')) sources.push('assets/logo-plombier-breizh.png');

const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
let id = 0; const attente = new Map();
const send = (m, q = {}) => new Promise(r => { const i = ++id; attente.set(i, r); ws.send(JSON.stringify({ id: i, method: m, params: q })); });
await new Promise(r => ws.addEventListener('open', r));
ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && attente.has(m.id)) { attente.get(m.id)(m.result); attente.delete(m.id); } });

let ecrits = 0, gagne = 0, initial = 0;
for (const src of sources) {
  const png = src.endsWith('.png');
  const mt = png ? 'image/png' : 'image/jpeg';
  const b64 = readFileSync(src).toString('base64');
  const base = src.replace(/\.(jpg|png)$/, '');
  const poidsSrc = statSync(src).size;
  initial += poidsSrc;

  const r = await send('Runtime.evaluate', {
    awaitPromise: true, returnByValue: true, expression: `(async()=>{
    const img=new Image(); img.src="data:${mt};base64,${b64}"; await img.decode();
    const W=img.naturalWidth, H=img.naturalHeight;
    const cibles=${JSON.stringify(LARGEURS)}.filter(w=>w<W).concat([W]);
    const out=[];
    for(const w of [...new Set(cibles)]){
      const h=Math.round(w*H/W);
      const c=document.createElement('canvas'); c.width=w; c.height=h;
      const g=c.getContext('2d'); g.imageSmoothingQuality='high';
      ${png ? '' : "g.fillStyle='#fff'; g.fillRect(0,0,w,h);"}
      g.drawImage(img,0,0,w,h);
      out.push({w,h,webp:c.toDataURL('image/webp',${Q_WEBP}).split(',')[1],
                ${png ? 'png:c.toDataURL("image/png").split(",")[1]' : `jpg:c.toDataURL('image/jpeg',${Q_JPEG}).split(',')[1]`}});
    }
    return JSON.stringify({W,H,out});})()` });

  const o = JSON.parse(r.result.value);
  for (const v of o.out) {
    const wb = Buffer.from(v.webp, 'base64');
    writeFileSync(`${base}-${v.w}.webp`, wb); ecrits++;
    const autre = png ? Buffer.from(v.png, 'base64') : Buffer.from(v.jpg, 'base64');
    writeFileSync(`${base}-${v.w}.${png ? 'png' : 'jpg'}`, autre); ecrits++;
    if (v.w === o.W) gagne += poidsSrc - wb.length;
  }
  console.log(`✓ ${path.basename(src).padEnd(34)} ${o.W}×${o.H} → ${o.out.map(v => v.w).join(', ')} px`);
}
console.log(`\n${ecrits} fichiers écrits. Sur la largeur d'origine, WebP économise ${(gagne / 1024).toFixed(0)} Ko sur ${(initial / 1024).toFixed(0)} Ko (${Math.round(gagne / initial * 100)} %).`);
await send('Page.close'); ws.close();
