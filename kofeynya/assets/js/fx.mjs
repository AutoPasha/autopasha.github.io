/* Мост к шейдерам: собирает лучи лампы и текстуру обжарки.
   Подключается модулем, ставит API в window.LAMPA_FX до site.js. */
import { createRays } from './rays.mjs';
import { createGrain } from './grain.mjs';

window.LAMPA_FX = { createRays: createRays, createGrain: createGrain };