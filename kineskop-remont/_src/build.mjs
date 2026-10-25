// Сборка витрины: node _src/build.mjs
// Нужны three@0.180, lenis@1.3 и esbuild в одном node_modules;
// где он лежит — переменная KINESKOP_NODE_MODULES (по умолчанию песочница сборки).
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const nm = process.env.KINESKOP_NODE_MODULES || '/opt/autopasha/.tmp/retro/node/node_modules';
const { build } = createRequire(path.join(nm, 'noop.js'))('esbuild');

await build({
  entryPoints: [path.join(here, 'main.js')],
  bundle: true,
  format: 'esm',
  minify: true,
  target: ['es2020', 'safari15'],
  outfile: path.join(here, '..', 'assets', 'js', 'app.js'),
  nodePaths: [nm],
  legalComments: 'none',
  logLevel: 'info',
});
