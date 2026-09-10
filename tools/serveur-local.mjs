#!/usr/bin/env node
/* ==========================================================================
   Serveur de prévisualisation locale
   --------------------------------------------------------------------------
   Reproduit le comportement de l'hébergement : /plomberie sert plomberie.html.
   Un simple `python -m http.server` renverrait une 404 sur ces URLs.

   Usage : node tools/serveur-local.mjs [port]      (par défaut 8000)
   ========================================================================== */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const port = Number(process.argv[2]) || 8000;
const racine = process.cwd();

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2',
  '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8'
};

const existe = async (p) => { try { return (await stat(p)).isFile(); } catch { return false; } };

createServer(async (req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const demande = normalize(join(racine, url)).replace(/[/\\]+$/, '');
  if (!demande.startsWith(racine)) { res.writeHead(403).end('Interdit'); return; }

  /* Ordre d'essai : le fichier tel quel, puis <chemin>.html, puis index.html */
  const candidats = url === '/' ? [join(racine, 'index.html')]
                                : [demande, demande + '.html', join(demande, 'index.html')];
  for (const c of candidats) {
    if (await existe(c)) {
      const type = TYPES[extname(c)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
      res.end(await readFile(c));
      return;
    }
  }
  const p404 = join(racine, '404.html');
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(await existe(p404) ? await readFile(p404) : 'Introuvable');
}).listen(port, () => {
  console.log(`Prévisualisation sur http://localhost:${port}`);
  console.log('Les URLs sans extension fonctionnent : /plomberie, /finistere-29, …');
});
