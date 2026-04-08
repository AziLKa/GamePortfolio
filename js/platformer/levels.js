import { GAME_CONFIG } from './config.js';

const W = GAME_CONFIG.tileSize;

export const LEVELS = {
  level1: {
    id: 'level1',
    name: 'Базовый первый уровень',
    projectLink: GAME_CONFIG.links.project,
    navigationLink: GAME_CONFIG.links.navigation,
    background: {
      image: GAME_CONFIG.background.image,
      sourceWidth: GAME_CONFIG.background.sourceWidth,
      sourceHeight: GAME_CONFIG.background.sourceHeight,
      scale: GAME_CONFIG.background.scale,
      parallaxX: GAME_CONFIG.background.parallaxX,
      parallaxY: GAME_CONFIG.background.parallaxY,
      colorTop: GAME_CONFIG.background.colorTop,
      colorBottom: GAME_CONFIG.background.colorBottom
    },
    grid: [
      '................................................',
      '................................................',
      '..............GGGG..GGGGGGGG....................',
      '...GGG................GGGG.....GGGGGG...........',
      '................................GGGG...GGGGGGGGG',
      '........GGGGGGGGGGG........................GGGGG',
      'GGGGG.....GGGGGGG...............................',
      'GGGGGGG..................GGGG...................',
      'GGGGGGG................GGGGGGGG.................',
      'GGGGGGG....GGGGGGGG.....................GGGGGGGG',
      'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
      'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
      'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
    ],

    playerStart: { x: 1 * W, y: 3 * W },

    boxes: [
      { x: 10 * W, y: 4.05 * W },
      { x: 33 * W, y: 1.05 * W }
    ],

    walkers: [
      { x: 15 * W, y: 6 * W, left: 5 * W, right: 10 * W },
      { x: 27 * W, y: 9 * W, left: 20 * W, right: 30 * W }
    ],

    turrets: [
      { x: 25 * W, y: 6 * W, facing: 1 },
      { x: 43 * W, y: 3.05 * W, facing: 1 }
    ],

    pickups: [
      { type: 'heart', x: 14.5 * W, y: 3.2 * W },
      { type: 'ammo', x: 22.5 * W, y: 1 * W },
      { type: 'heart', x: 32.0 * W, y: 9 * W },
      { type: 'ammo', x: 36.6 * W, y: 1.3 * W }
    ],

    switchPlate: {
      x: 37 * W,
      y: 9.5 * W,
      width: W,
      height: W * 0.34
    },

    gate: {
      x: 44 * W,
      y: 5 * W,
      width: W,
      height: W * 4
    },

    chest: {
      x: 46.15 * W,
      y: 7.88 * W,
      width: W * 0.92,
      height: W * 1.1
    },

    notes: {
      legend: {
        G: 'твёрдый тайл уровня; верхний ряд получает ground или ground-floating и отдельный overlay травы, внутренние блоки используют ground-center'
      },
      camera: 'Длина уровня задаётся шириной grid. Фон тянется отдельно и повторяется только по горизонтали.'
    }
  }
};