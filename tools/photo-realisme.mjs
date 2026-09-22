/* ==========================================================================
   RENDU PHOTOGRAPHIQUE DES VISUELS
   --------------------------------------------------------------------------
   Usage : node tools/photo-realisme.mjs [fichier…]   (Chromium sur le 9222)
   Sans argument, traite toutes les photos sources ainsi que le visuel du
   premier écran et les images de partage.

   Pourquoi : une image générée se reconnaît à ce qu'elle N'A PAS. Pas de
   bruit de capteur, pas de défaut d'objectif, des hautes lumières lisses et
   une saturation trop régulière. On ne retouche donc pas le sujet, on rend à
   l'image ce qu'un vrai boîtier y aurait laissé :

   1. Aberration chromatique — les canaux rouge et bleu sont décalés
      radialement de moins d'un pixel. C'est le défaut d'objectif le plus
      caractéristique, et le plus invisible tant qu'on ne le cherche pas.
   2. Courbe tonale — noirs légèrement relevés, hautes lumières compressées.
      Un capteur n'écrête pas à 255 pur, contrairement à une image générée.
   3. Contraste en S sur les tons moyens, atténué aux extrémités : le rendu
      gagne en matière sans boucher les ombres.
   4. Virage partagé — hautes lumières un peu chaudes, ombres un peu froides.
      C'est la signature de la lumière naturelle, jamais parfaitement neutre.
   5. Désaturation légère : la couleur générée est systématiquement trop
      poussée.
   6. Grain de luminance, plus présent dans les ombres que dans les hautes
      lumières, exactement comme le bruit de capteur. Il est volontairement
      produit par paquets de deux pixels : un grain au pixel disparaîtrait
      entièrement lors de la réduction en 760 et 480 px.
   7. Vignetage discret : tout objectif assombrit les angles.
   8. Perte de piqué dans les angles. Une image générée est d'une netteté
      parfaitement uniforme d'un bord à l'autre, ce qu'aucun objectif ne fait.

   Les réglages ci-dessous sont volontairement bas. Poussés plus haut, l'image
   ne fait pas plus vraie : elle fait retouchée, ce qui est le défaut inverse.
   ========================================================================== */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';

const PORT = process.env.CDP_PORT || 9222;

const R = {
  aberration: 0.0013,   // écart d'échelle entre le rouge et le bleu
  noirs:      0.028,    // relevé des noirs (0–1)
  blancs:     0.958,    // plafond des hautes lumières (0–1)
  genou:      0.78,     // seuil au-delà duquel les hautes lumières s'écrasent
  contraste:  0.20,     // force du S sur les tons moyens
  virage:     5.5,      // virage partagé, en niveaux sur 255
  desat:      0.10,     // part de couleur ramenée vers le gris
  grainOmbre: 5.6,      // écart-type du grain dans les ombres
  grainHaute: 2.6,      // écart-type du grain dans les hautes lumières
  grainTaille: 2,       // côté d'un paquet de grain, en pixels
  vignette:   0.13,     // assombrissement maximal dans les angles
  flouBord:   1.2       // rayon du flou appliqué dans les angles, en pixels
};

const cibles = process.argv.slice(2);
const sources = cibles.length ? cibles : [
  ...readdirSync('assets/photos').filter(f => f.endsWith('.jpg') && !/-\d+\.jpg$/.test(f))
    .map(f => 'assets/photos/' + f),
  'assets/img/hero-plombier-breizh-camion.jpg',
  'assets/img/og-plombier-breizh.jpg',
  'assets/img/og-plomberie.jpg',
  'assets/img/og-degorgement.jpg'
].filter(existsSync);

const t = await (await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
let id = 0; const attente = new Map();
const send = (m, q = {}) => new Promise(r => { const i = ++id; attente.set(i, r); ws.send(JSON.stringify({ id: i, method: m, params: q })); });
await new Promise(r => ws.addEventListener('open', r));
ws.addEventListener('message', e => {
  const m = JSON.parse(e.data);
  if (m.id && attente.has(m.id)) { attente.get(m.id)(m.result); attente.delete(m.id); }
});

const traitement = `async (b64, R) => {
  const img = new Image();
  img.src = 'data:image/jpeg;base64,' + b64;
  await img.decode();
  const w = img.naturalWidth, h = img.naturalHeight;

  /* --- 1. Aberration chromatique -----------------------------------------
     Chaque canal est redessiné à une échelle très légèrement différente,
     autour du centre de l'image, puis les trois sont recombinés. */
  const canaux = [['#F00', 1 + R.aberration], ['#0F0', 1], ['#00F', 1 - R.aberration]];
  const c = new OffscreenCanvas(w, h), x = c.getContext('2d', { willReadFrequently: true });
  x.fillStyle = '#000'; x.fillRect(0, 0, w, h);
  x.globalCompositeOperation = 'lighter';
  const tmp = new OffscreenCanvas(w, h), tx = tmp.getContext('2d');
  for (const [teinte, k] of canaux) {
    tx.globalCompositeOperation = 'source-over';
    tx.clearRect(0, 0, w, h);
    tx.drawImage(img, (w - w * k) / 2, (h - h * k) / 2, w * k, h * k);
    tx.globalCompositeOperation = 'multiply';
    tx.fillStyle = teinte; tx.fillRect(0, 0, w, h);
    x.drawImage(tmp, 0, 0);
  }
  x.globalCompositeOperation = 'source-over';

  /* --- 2. Perte de piqué dans les angles ---------------------------------
     Une copie floue est posée par-dessus, masquée par un dégradé radial :
     transparente au centre, opaque dans les angles. */
  if (R.flouBord > 0) {
    const fl = new OffscreenCanvas(w, h), fx = fl.getContext('2d');
    fx.filter = 'blur(' + R.flouBord + 'px)';
    fx.drawImage(c, 0, 0);
    fx.filter = 'none';
    fx.globalCompositeOperation = 'destination-in';
    const g = fx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.hypot(w, h) / 2);
    g.addColorStop(0.00, 'rgba(0,0,0,0)');
    g.addColorStop(0.62, 'rgba(0,0,0,0)');
    g.addColorStop(1.00, 'rgba(0,0,0,0.85)');
    fx.fillStyle = g; fx.fillRect(0, 0, w, h);
    x.drawImage(fl, 0, 0);
  }

  /* --- 3 à 8. Travail au pixel ------------------------------------------- */
  const d = x.getImageData(0, 0, w, h), p = d.data;

  /* Courbe tonale : relevé des noirs, plafond des blancs, puis S sur les
     tons moyens, atténué aux deux extrémités pour ne rien boucher. */
  const lut = new Float32Array(256);
  for (let i = 0; i < 256; i++) {
    let v = i / 255;
    v = R.noirs + v * (R.blancs - R.noirs);
    v = v + R.contraste * (v - 0.5) * (1 - Math.abs(2 * v - 1));
    /* Genou : au-delà du seuil, les hautes lumières s'écrasent au lieu de
       filer droit vers le blanc pur. C'est ce que fait un capteur. */
    if (v > R.genou) {
      const e = (v - R.genou) / (1 - R.genou);
      v = R.genou + (1 - R.genou) * (1 - Math.pow(1 - e, 1.9));
    }
    lut[i] = Math.min(1, Math.max(0, v)) * 255;
  }

  const cx = w / 2, cy = h / 2, rmax = Math.hypot(cx, cy);
  /* Bruit gaussien approché par somme de trois tirages uniformes, tiré une
     fois par paquet de grain puis partagé par les pixels du paquet. */
  const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 1.15;
  const gt = Math.max(1, R.grainTaille | 0);
  const gw = Math.ceil(w / gt), gh = Math.ceil(h / gt);
  const paquets = new Float32Array(gw * gh);
  for (let i = 0; i < paquets.length; i++) paquets[i] = gauss();

  for (let i = 0, n = 0; i < p.length; i += 4, n++) {
    const px = n % w, py = (n / w) | 0;
    let r = lut[p[i]], g = lut[p[i + 1]], b = lut[p[i + 2]];
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    /* Virage partagé : hautes lumières chaudes, ombres froides. */
    const haut = lum * lum, bas = (1 - lum) * (1 - lum);
    r += R.virage * haut - R.virage * 0.75 * bas;
    b += R.virage * bas - R.virage * 0.75 * haut;

    /* Désaturation légère vers la luminance. */
    const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    r += (y - r) * R.desat; g += (y - g) * R.desat; b += (y - b) * R.desat;

    /* Grain de luminance : plus marqué dans les ombres. */
    const bruit = paquets[((py / gt) | 0) * gw + ((px / gt) | 0)]
                * (R.grainHaute + (R.grainOmbre - R.grainHaute) * (1 - lum));
    r += bruit; g += bruit; b += bruit;

    /* Vignetage. */
    const k = 1 - R.vignette * Math.pow(Math.hypot(px - cx, py - cy) / rmax, 2.4);
    r *= k; g *= k; b *= k;

    p[i] = r < 0 ? 0 : r > 255 ? 255 : r;
    p[i + 1] = g < 0 ? 0 : g > 255 ? 255 : g;
    p[i + 2] = b < 0 ? 0 : b > 255 ? 255 : b;
  }
  x.putImageData(d, 0, 0);

  const blob = await c.convertToBlob({ type: 'image/jpeg', quality: 0.93 });
  const buf = new Uint8Array(await blob.arrayBuffer());
  let s = ''; for (let i = 0; i < buf.length; i++) s += String.fromCharCode(buf[i]);
  return btoa(s);
}`;

let n = 0;
for (const src of sources) {
  const avant = statSync(src).size;
  const b64 = readFileSync(src).toString('base64');
  const r = await send('Runtime.evaluate', {
    expression: `(${traitement})(${JSON.stringify(b64)}, ${JSON.stringify(R)})`,
    awaitPromise: true, returnByValue: true
  });
  if (!r.result || typeof r.result.value !== 'string') {
    console.log(`  ✗ ${src} — ${r.exceptionDetails?.exception?.description || 'échec'}`);
    continue;
  }
  writeFileSync(src, Buffer.from(r.result.value, 'base64'));
  console.log(`  ✓ ${src}  ${Math.round(avant / 1024)} → ${Math.round(statSync(src).size / 1024)} Ko`);
  n++;
}
console.log(`\n${n} visuel(s) traité(s). Relancez « node tools/images.mjs » pour régénérer les déclinaisons.`);
await send('Page.close'); ws.close();
