#!/usr/bin/env node
/* ==========================================================================
   Installateur du logo officiel Plombier Breizh
   --------------------------------------------------------------------------
   Copie VOTRE fichier de logo au bon endroit et sous le bon nom.
   Aucun logo n'est dessiné ni modifié : le fichier est repris tel quel.

   Usage :
     node tools/installer-logo.mjs <source> [--vertical] [--favicon]

   <source> accepte :
     • un chemin local ........ node tools/installer-logo.mjs ~/Bureau/logo.png
     • une URL ................ node tools/installer-logo.mjs https://.../logo.png
     • du base64 / data URI ... node tools/installer-logo.mjs "data:image/png;base64,iVBO..."
     • l'entrée standard ...... cat logo.b64 | node tools/installer-logo.mjs -

   Options :
     --vertical   installe la variante verticale utilisée dans le pied de page
     --favicon    copie également le fichier en assets/favicon.png (PNG uniquement)
   ========================================================================== */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const args = process.argv.slice(2);
const source = args.find(a => !a.startsWith('--'));
const vertical = args.includes('--vertical');
const wantFavicon = args.includes('--favicon');

if (!source) {
  console.error(`Usage : node tools/installer-logo.mjs <fichier | URL | base64 | -> [--vertical] [--favicon]`);
  process.exit(1);
}

/* ---- 1. Récupération des octets, quelle que soit la source ---- */
async function lireSource(src) {
  if (src === '-') {
    const chunks = [];
    for await (const c of process.stdin) chunks.push(c);
    return decoderBase64(Buffer.concat(chunks).toString('utf8'));
  }
  if (/^https?:\/\//i.test(src)) {
    const r = await fetch(src);
    if (!r.ok) throw new Error(`Téléchargement impossible (HTTP ${r.status}) : ${src}`);
    return Buffer.from(await r.arrayBuffer());
  }
  if (/^data:image\//i.test(src) || /^[A-Za-z0-9+/=\s]{200,}$/.test(src)) return decoderBase64(src);
  if (!existsSync(src)) throw new Error(`Fichier introuvable : ${src}`);
  return readFile(src);
}

function decoderBase64(txt) {
  const nettoye = txt.replace(/^data:image\/[a-z+]+;base64,/i, '').replace(/\s+/g, '');
  const buf = Buffer.from(nettoye, 'base64');
  if (!buf.length) throw new Error('Contenu base64 vide ou invalide.');
  return buf;
}

/* ---- 2. Détection du format par signature de fichier ---- */
function detecterFormat(buf) {
  const h = buf.subarray(0, 12);
  if (h[0] === 0x89 && h[1] === 0x50 && h[2] === 0x4e && h[3] === 0x47) return 'png';
  if (h[0] === 0xff && h[1] === 0xd8 && h[2] === 0xff) return 'jpg';
  if (h.subarray(0, 4).toString('ascii') === 'RIFF' && h.subarray(8, 12).toString('ascii') === 'WEBP') return 'webp';
  const debut = buf.subarray(0, 400).toString('utf8').trim();
  if (debut.startsWith('<') && /<svg[\s>]/i.test(debut)) return 'svg';
  return null;
}

/* ---- 3. Écriture ---- */
try {
  const buf = await lireSource(source);
  const format = detecterFormat(buf);
  if (!format) {
    throw new Error('Format non reconnu. Formats acceptés : PNG, JPG, WebP, SVG.\n' +
      'Si vous avez collé du base64, vérifiez qu’il est complet.');
  }

  await mkdir('assets', { recursive: true });
  const nom = `assets/logo-plombier-breizh${vertical ? '-vertical' : ''}.${format}`;
  await writeFile(nom, buf);
  console.log(`✓ Logo installé : ${nom}  (${format.toUpperCase()}, ${(buf.length / 1024).toFixed(1)} Ko)`);

  if (wantFavicon) {
    if (format !== 'png') {
      console.log('· --favicon ignoré : le favicon doit être un PNG.');
    } else {
      await writeFile('assets/favicon.png', buf);
      console.log('✓ Favicon installé : assets/favicon.png');
    }
  }

  console.log('\nLe site charge ce fichier automatiquement — aucune modification de code.');
  console.log('Pour le publier :');
  console.log('  git add assets && git commit -m "Ajout du logo officiel" && git push');
} catch (e) {
  console.error(`✗ ${e.message}`);
  process.exit(1);
}
