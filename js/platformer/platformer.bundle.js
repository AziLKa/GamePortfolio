(function () {
'use strict';

// ----- config.js -----
const GAME_CONFIG = {
  internalWidth: 1920,
  internalHeight: 1080,
  tileSize: 96,
  targetFps: 60,
  gravity: 2400,
  maxFallSpeed: 1400,
  physicsStep: 1 / 60,
  collisionEpsilon: 0.001,
  debug: false,
  links: {
    navigation: 'navigation.html',
    project: 'project-platformer.html'
  },
  ui: {
    promptSize: 64,
    heartSize: 58,
    heartGap: 10,
    bulletSize: 44
  },
  tileDecor: {
    grassOverlay: {
      sourceWidth: 35,
      sourceHeight: 20,
      offsetY: -15
    }
  },
  background: {
    image: 'img/platformer/level-1/background.png',
    sourceWidth: 353,
    sourceHeight: 186,
    scale: 6.4,
    parallaxX: 0.18,
    parallaxY: 0.12,
    colorTop: '#4d6d73',
    colorBottom: '#1b212e'
  },
  player: {
    width: 68,
    height: 110,
    crouchHeight: 84,
    attackFrameWidth: 23,
    attackFrameHeight: 26,
    moveSpeed: 360,
    crouchSpeedMultiplier: 0.48,
    airControl: 0.82,
    acceleration: 2400,
    friction: 2600,
    jumpSpeed: 1100,
    coyoteTime: 0.16,
    jumpBuffer: 0.18,
    maxHealth: 12,
    startHealth: 7,
    hurtInvulnerability: 1.1,
    knockbackX: 340,
    knockbackY: 440,
    melee: {
      duration: 0.2,
      hitStart: 0.04,
      hitEnd: 0.14,
      width: 118,
      height: 78,
      damage: 1,
      pushback: 180
    },
    ranged: {
      duration: 0.18,
      fireMoment: 0.02,
      damage: 1,
      speed: 720,
      size: 24,
      startAmmo: 3,
      maxAmmo: 3
    }
  },
  enemies: {
    walker: {
      width: 72,
      height: 84,
      speed: 105,
      gravity: 2400,
      contactDamage: 2,
      health: 2,
      attackCooldown: 1.25,
      hurtFlashTime: 0.16
    },
    turret: {
      width: 86,
      height: 90,
      health: 2,
      shotInterval: 1.8,
      projectileSpeed: 420,
      projectileSize: 20,
      damage: 1,
      range: 1100,
      hurtFlashTime: 0.16
    }
  },
  box: {
    size: 90,
    pushSpeed: 140,
    maxPushDistancePerFrame: 10,
    friction: 1600
  },
  pickups: {
    heartRestore: 2,
    ammoFillTo: 3,
    bobAmplitude: 8,
    bobSpeed: 3.4
  },
  camera: {
    followX: 0.1,
    followY: 0.09,
    deadZoneX: 110,
    deadZoneY: 180
  },
  assets: {
    hearts: {
      full: 'img/heart-image-full.png',
      half: 'img/heart-image-half.png',
      empty: 'img/heart-image-empty.png'
    },
    bullets: {
      full: 'img/platformer/shared/ui/bullet-full.png',
      empty: 'img/platformer/shared/ui/bullet-empty.png'
    },
    chest: {
      closed: 'img/platformer/shared/props/chest-closed.png',
      open: 'img/platformer/shared/props/chest-open.png'
    },
    switch: {
      off: 'img/platformer/shared/props/switch-off.png',
      on: 'img/platformer/shared/props/switch-on.png'
    },
    gate: {
      closed: 'img/platformer/shared/props/gate-closed.png',
      open: 'img/platformer/shared/props/gate-open.png'
    },
    pickups: {
      heart: 'img/platformer/shared/pickups/heart-pickup.png',
      ammo: 'img/platformer/shared/pickups/ammo-pickup.png'
    },
    player: {
      idle: ['img/platformer/shared/player/idle-1.png', 'img/platformer/shared/player/idle-2.png'],
      run: [
        'img/platformer/shared/player/run-1.png',
        'img/platformer/shared/player/run-2.png',
        'img/platformer/shared/player/run-3.png',
        'img/platformer/shared/player/run-4.png'
      ],
      jump: ['img/platformer/shared/player/jump-1.png'],
      hurt: [
        'img/platformer/shared/player/hurt-1.png',
        'img/platformer/shared/player/hurt-2.png'
      ],
      melee: [
        'img/platformer/shared/player/melee-1.png',
        'img/platformer/shared/player/melee-2.png'
      ],
      ranged: [
        'img/platformer/shared/player/ranged-1.png',
        'img/platformer/shared/player/ranged-2.png'
      ]
    },
    enemies: {
      walker: {
        idle: ['img/platformer/shared/enemies/walker/idle-1.png', 'img/platformer/shared/enemies/walker/idle-2.png'],
        attack: [
          'img/platformer/shared/enemies/walker/attack-1.png',
          'img/platformer/shared/enemies/walker/attack-2.png',
          'img/platformer/shared/enemies/walker/attack-3.png',
          'img/platformer/shared/enemies/walker/attack-4.png',
          'img/platformer/shared/enemies/walker/attack-5.png'
        ]
      },
      turret: {
        idle: ['img/platformer/shared/enemies/turret/idle-1.png'],
        attack: [
          'img/platformer/shared/enemies/turret/attack-1.png',
          'img/platformer/shared/enemies/turret/attack-2.png',
          'img/platformer/shared/enemies/turret/attack-3.png',
          'img/platformer/shared/enemies/turret/attack-4.png',
          'img/platformer/shared/enemies/turret/attack-5.png'
        ]
      }
    },
    tiles: {
      ground: {
        left: 'img/platformer/shared/tiles/ground-left.png',
        middle: 'img/platformer/shared/tiles/ground-middle.png',
        right: 'img/platformer/shared/tiles/ground-right.png'
      },
      groundFloating: {
        left: 'img/platformer/shared/tiles/ground-floating-left.png',
        middle: 'img/platformer/shared/tiles/ground-floating-middle.png',
        right: 'img/platformer/shared/tiles/ground-floating-right.png'
      },
      groundCenter: 'img/platformer/shared/tiles/ground-center.png',
      groundCorner: {
        left: 'img/platformer/shared/tiles/ground-corner-left.png',
        right: 'img/platformer/shared/tiles/ground-corner-right.png'
      },
      groundBottom: {
        single: 'img/platformer/shared/tiles/ground-bottom-single.png',
        left: 'img/platformer/shared/tiles/ground-bottom-left.png',
        middle: 'img/platformer/shared/tiles/ground-bottom-middle.png',
        right: 'img/platformer/shared/tiles/ground-bottom-right.png'
      },
      groundBottomCorner: {
        left: 'img/platformer/shared/tiles/ground-bottom-corner-left.png',
        right: 'img/platformer/shared/tiles/ground-bottom-corner-right.png'
      },
      grassOverlay: {
        single: 'img/platformer/shared/tiles/grass-overlay-single.png',
        left: 'img/platformer/shared/tiles/grass-overlay-left.png',
        middle: 'img/platformer/shared/tiles/grass-overlay-middle.png',
        right: 'img/platformer/shared/tiles/grass-overlay-right.png'
      }
    }
  }
};

// ----- levels.js -----

const W = GAME_CONFIG.tileSize;

const LEVELS = {
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
      { x: 41 * W, y: 3.05 * W, facing: 1 }
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

// ----- assets.js -----
function loadSingleImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }

    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

async function loadImageMap(map) {
  const entries = Object.entries(map || {});
  const pairs = await Promise.all(
    entries.map(async ([key, value]) => {
      if (Array.isArray(value)) {
        return [key, await Promise.all(value.map((src) => loadSingleImage(src)))];
      }
      if (value && typeof value === 'object') {
        return [key, await loadImageMap(value)];
      }
      return [key, await loadSingleImage(value)];
    })
  );

  return Object.fromEntries(pairs);
}

async function loadAssets(config, level) {
  const [ui, player, enemies, tiles, background] = await Promise.all([
    loadImageMap({
      hearts: config.assets.hearts,
      bullets: config.assets.bullets,
      chest: config.assets.chest,
      switch: config.assets.switch,
      gate: config.assets.gate,
      pickups: config.assets.pickups
    }),
    loadImageMap(config.assets.player),
    loadImageMap(config.assets.enemies),
    loadImageMap(config.assets.tiles),
    loadSingleImage(level.background.image)
  ]);

  return { ui, player, enemies, tiles, background };
}

function getFrame(frames, time = 0, fps = 8, loop = true) {
  if (!Array.isArray(frames) || frames.length === 0) {
    return null;
  }

  const validFrames = frames.filter(Boolean);
  if (validFrames.length === 0) {
    return null;
  }

  const rawIndex = Math.floor(time * fps);
  const index = loop
    ? rawIndex % validFrames.length
    : Math.min(validFrames.length - 1, rawIndex);

  return validFrames[index] || null;
}

// ----- game.js -----

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d', { alpha: false });
ctx.imageSmoothingEnabled = false;

const menuButton = document.getElementById('menuButton');
const tutorialOverlay = document.getElementById('tutorialOverlay');
const closeTutorialButton = document.getElementById('closeTutorialButton');
const pauseModal = document.getElementById('pauseModal');
const confirmModal = document.getElementById('confirmModal');
const levelCompleteModal = document.getElementById('levelCompleteModal');
const restartLevelButton = document.getElementById('restartLevelButton');
const goNavigationButton = document.getElementById('goNavigationButton');
const goProjectButton = document.getElementById('goProjectButton');
const resumeGameButton = document.getElementById('resumeGameButton');
const openTutorialButton = document.getElementById('openTutorialButton');
const confirmText = document.getElementById('confirmText');
const confirmYesButton = document.getElementById('confirmYesButton');
const confirmNoButton = document.getElementById('confirmNoButton');
const completeProjectButton = document.getElementById('completeProjectButton');
const completeNavigationButton = document.getElementById('completeNavigationButton');

const TILE = GAME_CONFIG.tileSize;
const VIEW_WIDTH = GAME_CONFIG.internalWidth;
const VIEW_HEIGHT = GAME_CONFIG.internalHeight;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function sign(value) {
  return value < 0 ? -1 : value > 0 ? 1 : 0;
}

function rectsIntersect(a, b) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function pointInRect(x, y, rect) {
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}

function makeRect(x, y, width, height) {
  return { x, y, width, height };
}

class InputManager {
  constructor(targetCanvas) {
    this.keysDown = new Set();
    this.keysPressed = new Set();
    this.mouseDown = new Set();
    this.mousePressed = new Set();
    this.mouse = { x: 0, y: 0 };
    this.canvas = targetCanvas;

    window.addEventListener('keydown', (event) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
        event.preventDefault();
      }
      if (!this.keysDown.has(event.code)) {
        this.keysPressed.add(event.code);
      }
      this.keysDown.add(event.code);
    });

    window.addEventListener('keyup', (event) => {
      this.keysDown.delete(event.code);
    });

    targetCanvas.addEventListener('contextmenu', (event) => event.preventDefault());

    targetCanvas.addEventListener('mousedown', (event) => {
      const button = event.button;
      if (!this.mouseDown.has(button)) {
        this.mousePressed.add(button);
      }
      this.mouseDown.add(button);
      this.updateMouse(event);
    });

    window.addEventListener('mouseup', (event) => {
      this.mouseDown.delete(event.button);
    });

    targetCanvas.addEventListener('mousemove', (event) => {
      this.updateMouse(event);
    });
  }

  updateMouse(event) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = VIEW_WIDTH / rect.width;
    const scaleY = VIEW_HEIGHT / rect.height;
    this.mouse.x = (event.clientX - rect.left) * scaleX;
    this.mouse.y = (event.clientY - rect.top) * scaleY;
  }

  isDown(...codes) {
    return codes.some((code) => this.keysDown.has(code));
  }

  wasPressed(...codes) {
    return codes.some((code) => this.keysPressed.has(code));
  }

  mouseWasPressed(button) {
    return this.mousePressed.has(button);
  }

  endFrame() {
    this.keysPressed.clear();
    this.mousePressed.clear();
  }
}

function buildTiles(level) {
  const tiles = [];
  const rows = level.grid;
  const height = rows.length;
  const width = rows[0].length;

  const isSolid = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return false;
    }
    return rows[y][x] === 'G';
  };

  const resolveHorizontalVariant = (left, right, { allowSingle = false } = {}) => {
    if (!left && !right) {
      return allowSingle ? 'single' : 'middle';
    }
    if (!left && right) {
      return 'left';
    }
    if (left && !right) {
      return 'right';
    }
    return 'middle';
  };

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (rows[y][x] !== 'G') {
        continue;
      }

      const left = isSolid(x - 1, y);
      const right = isSolid(x + 1, y);
      const top = isSolid(x, y - 1);
      const bottom = isSolid(x, y + 1);
      const topLeft = isSolid(x - 1, y - 1);
      const topRight = isSolid(x + 1, y - 1);
      const bottomLeft = isSolid(x - 1, y + 1);
      const bottomRight = isSolid(x + 1, y + 1);
      const isUpperGround = !top;

      let family = 'ground';
      let variant = resolveHorizontalVariant(left, right);

      const isUpperInnerLeftCorner = top && bottom && !left && right && !topLeft;
      const isUpperInnerRightCorner = top && bottom && left && !right && !topRight;
      const isLowerInnerLeftCorner = top && bottom && !left && right && !bottomLeft;
      const isLowerInnerRightCorner = top && bottom && left && !right && !bottomRight;

      if (!top && !bottom) {
        family = 'groundFloating';
      } else if (!top) {
        family = 'ground';
        variant = resolveHorizontalVariant(left, right);
      } else if (top && !bottom) {
        family = 'groundBottom';
        variant = resolveHorizontalVariant(left, right, { allowSingle: true });
      } else if (isUpperInnerLeftCorner) {
        family = 'groundCorner';
        variant = 'left';
      } else if (isUpperInnerRightCorner) {
        family = 'groundCorner';
        variant = 'right';
      } else if (isLowerInnerLeftCorner) {
        family = 'groundBottomCorner';
        variant = 'left';
      } else if (isLowerInnerRightCorner) {
        family = 'groundBottomCorner';
        variant = 'right';
      } else if (left && right && top && bottom) {
        family = 'groundCenter';
        variant = 'center';
      } else {
        family = 'groundCenter';
        variant = 'center';
      }

      tiles.push({
        gridX: x,
        gridY: y,
        x: x * TILE,
        y: y * TILE,
        width: TILE,
        height: TILE,
        family,
        variant,
        hasGrassOverlay: isUpperGround,
        grassVariant: isUpperGround ? resolveHorizontalVariant(left, right, { allowSingle: true }) : null
      });
    }
  }

  return {
    width: width * TILE,
    height: height * TILE,
    gridWidth: width,
    gridHeight: height,
    rows,
    tiles
  };
}

class Game {
  constructor(config, level, assets) {
    this.config = config;
    this.level = level;
    this.assets = assets;
    this.world = buildTiles(level);
    this.camera = { x: 0 };
    this.input = new InputManager(canvas);
    this.lastFrameTime = 0;
    this.accumulator = 0;
    this.running = true;
    this.pauseReason = null;
    this.confirmCallback = null;
    this.tutorialReturnReason = null;
    this.promptRect = null;
    this.deathTimer = 0;
    this.levelComplete = false;
    this.uiPulse = 0;

    this.initWorldState();
    this.bindUI();
    this.applyTutorialVisibility();
  }

  initWorldState() {
    const playerCfg = this.config.player;

    this.player = {
      x: this.level.playerStart.x,
      y: this.level.playerStart.y,
      width: playerCfg.width,
      height: playerCfg.height,
      vx: 0,
      vy: 0,
      facing: 1,
      onGround: false,
      coyoteTimer: 0,
      jumpBufferTimer: 0,
      attackState: null,
      attackTimer: 0,
      rangedShotFired: false,
      queuedAttack: null,
      attackBufferTimer: 0,
      hurtTimer: 0,
      invulnerability: 0,
      crouching: false,
      health: playerCfg.startHealth,
      ammo: playerCfg.ranged.startAmmo,
      alive: true,
      animationTime: 0
    };

    this.boxes = this.level.boxes.map((box, index) => ({
      id: `box-${index}`,
      x: box.x,
      y: box.y,
      width: this.config.box.size,
      height: this.config.box.size,
      vx: 0,
      vy: 0,
      onGround: false
    }));

    this.walkers = this.level.walkers.map((enemy, index) => ({
      id: `walker-${index}`,
      type: 'walker',
      x: enemy.x,
      y: enemy.y,
      width: this.config.enemies.walker.width,
      height: this.config.enemies.walker.height,
      vx: this.config.enemies.walker.speed,
      vy: 0,
      left: enemy.left,
      right: enemy.right,
      facing: 1,
      onGround: false,
      health: this.config.enemies.walker.health,
      attackCooldown: 0,
      attackTimer: 0,
      hurtTimer: 0,
      animationTime: 0,
      alive: true
    }));

    this.turrets = this.level.turrets.map((enemy, index) => ({
      id: `turret-${index}`,
      type: 'turret',
      x: enemy.x,
      y: enemy.y,
      width: this.config.enemies.turret.width,
      height: this.config.enemies.turret.height,
      facing: enemy.facing || 1,
      shotCooldown: 0.8 + index * 0.3,
      attackTimer: 0,
      health: this.config.enemies.turret.health,
      hurtTimer: 0,
      animationTime: 0,
      alive: true
    }));

    this.pickups = this.level.pickups.map((pickup, index) => ({
      id: `pickup-${index}`,
      ...pickup,
      width: 56,
      height: 56,
      collected: false,
      baseY: pickup.y,
      animationOffset: index * 0.8
    }));

    this.projectiles = [];
    this.switchPlate = {
      ...this.level.switchPlate,
      pressed: false
    };
    this.gate = {
      ...this.level.gate,
      open: false
    };
    this.chest = {
      ...this.level.chest,
      open: false
    };
  }

  bindUI() {
    menuButton.addEventListener('click', () => {
      if (this.levelComplete) {
        return;
      }
      this.openPauseMenu();
    });

    closeTutorialButton.addEventListener('click', () => {
      this.closeTutorial();
    });

    restartLevelButton.addEventListener('click', () => {
      this.hideOverlay(pauseModal);
      this.pauseReason = null;
      this.restart();
    });

    resumeGameButton.addEventListener('click', () => {
      this.hideOverlay(pauseModal);
      this.pauseReason = null;
    });

    openTutorialButton.addEventListener('click', () => {
      this.openTutorial(true);
    });

    goNavigationButton.addEventListener('click', () => {
      this.askConfirm('Вы точно уверены что хотите вернуться к навигации?', () => {
        window.location.href = this.level.navigationLink;
      });
    });

    goProjectButton.addEventListener('click', () => {
      this.askConfirm('Вы точно уверены что хотите перейти к проекту?', () => {
        window.location.href = this.level.projectLink;
      });
    });

    confirmYesButton.addEventListener('click', () => {
      const callback = this.confirmCallback;
      this.confirmCallback = null;
      this.hideOverlay(confirmModal);
      if (callback) {
        callback();
      }
    });

    confirmNoButton.addEventListener('click', () => {
      this.confirmCallback = null;
      this.hideOverlay(confirmModal);
      if (this.levelComplete) {
        this.pauseReason = 'complete';
      } else {
        this.pauseReason = 'menu';
      }
    });

    completeProjectButton.addEventListener('click', () => {
      this.askConfirm('Вы точно уверены что хотите перейти к проекту?', () => {
        window.location.href = this.level.projectLink;
      });
    });

    completeNavigationButton.addEventListener('click', () => {
      this.askConfirm('Вы точно уверены что хотите вернуться к навигации?', () => {
        window.location.href = this.level.navigationLink;
      });
    });
  }

  applyTutorialVisibility() {
    this.openTutorial(false);
  }

  openTutorial(fromPauseMenu = false) {
    this.tutorialReturnReason = fromPauseMenu ? 'menu' : null;
    if (fromPauseMenu) {
      this.hideOverlay(pauseModal);
    }
    this.showOverlay(tutorialOverlay);
    this.pauseReason = 'tutorial';
  }

  closeTutorial() {
    this.hideOverlay(tutorialOverlay);
    if (this.levelComplete) {
      this.pauseReason = 'complete';
    } else if (this.tutorialReturnReason === 'menu') {
      this.showOverlay(pauseModal);
      this.pauseReason = 'menu';
    } else {
      this.pauseReason = null;
    }
    this.tutorialReturnReason = null;
  }

  askConfirm(text, callback) {
    confirmText.textContent = text;
    this.confirmCallback = callback;
    this.showOverlay(confirmModal);
    this.pauseReason = 'confirm';
  }

  openPauseMenu() {
    this.showOverlay(pauseModal);
    this.pauseReason = 'menu';
  }

  showOverlay(element) {
    element.classList.remove('is-hidden');
  }

  hideOverlay(element) {
    element.classList.add('is-hidden');
  }

  restart() {
    this.hideOverlay(confirmModal);
    this.hideOverlay(levelCompleteModal);
    this.pauseReason = null;
    this.confirmCallback = null;
    this.tutorialReturnReason = null;
    this.promptRect = null;
    this.levelComplete = false;
    this.deathTimer = 0;
    this.initWorldState();
  }

  start() {
    requestAnimationFrame((timestamp) => this.frame(timestamp));
  }

  frame(timestamp) {
    if (!this.running) {
      return;
    }

    if (!this.lastFrameTime) {
      this.lastFrameTime = timestamp;
    }

    const delta = Math.min(0.05, (timestamp - this.lastFrameTime) / 1000);
    this.lastFrameTime = timestamp;
    this.accumulator += delta;

    while (this.accumulator >= this.config.physicsStep) {
      this.update(this.config.physicsStep);
      this.accumulator -= this.config.physicsStep;
    }

    this.render();
    this.input.endFrame();
    requestAnimationFrame((next) => this.frame(next));
  }

  isPaused() {
    return Boolean(this.pauseReason);
  }

  update(dt) {
    this.uiPulse += dt;

    if (this.input.wasPressed('Escape')) {
      if (!this.levelComplete) {
        if (this.pauseReason === 'menu') {
          this.hideOverlay(pauseModal);
          this.pauseReason = null;
        } else if (!this.pauseReason) {
          this.openPauseMenu();
        }
      }
    }

    if (this.isPaused()) {
      return;
    }

    if (!this.player.alive) {
      this.deathTimer += dt;
      if (this.deathTimer > 1.35) {
        this.restart();
      }
      return;
    }

    this.updatePlayer(dt);
    this.updateBoxes(dt);
    this.updateWalkers(dt);
    this.updateTurrets(dt);
    this.updateProjectiles(dt);
    this.updatePickups(dt);
    this.updateSwitchAndGate();
    this.updateChestInteraction();
    this.updateCamera(dt);
  }

  updateCamera(dt) {
    const targetX = clamp(
      this.player.x + this.player.width * 0.5 - VIEW_WIDTH * 0.42,
      0,
      Math.max(0, this.world.width - VIEW_WIDTH)
    );
    this.camera.x = lerp(this.camera.x, targetX, 1 - Math.pow(1 - this.config.camera.followX, dt * 60));
  }

  getMovementInput() {
    const left = this.input.isDown('KeyA', 'ArrowLeft');
    const right = this.input.isDown('KeyD', 'ArrowRight');
    return (right ? 1 : 0) - (left ? 1 : 0);
  }

  updatePlayer(dt) {
    const player = this.player;
    const inputX = this.getMovementInput();
    const wantsJump = this.input.wasPressed('Space', 'KeyW', 'ArrowUp');
    const wantsToggleCrouch = this.input.wasPressed('KeyC', 'ControlLeft', 'ControlRight');
    const wantsMelee = this.input.wasPressed('KeyE') || this.input.mouseWasPressed(0);
    const wantsRanged = this.input.wasPressed('KeyQ') || this.input.mouseWasPressed(2);

    player.animationTime += dt;
    player.jumpBufferTimer = Math.max(0, player.jumpBufferTimer - dt);
    player.coyoteTimer = Math.max(0, player.coyoteTimer - dt);
    player.hurtTimer = Math.max(0, player.hurtTimer - dt);
    player.invulnerability = Math.max(0, player.invulnerability - dt);
    player.attackBufferTimer = Math.max(0, player.attackBufferTimer - dt);

    if (wantsToggleCrouch) {
      if (player.crouching) {
        this.trySetCrouch(false);
      } else {
        this.trySetCrouch(true);
      }
    }

    if (wantsJump) {
      player.jumpBufferTimer = this.config.player.jumpBuffer;
    }

    if (wantsMelee) {
      player.queuedAttack = 'melee';
      player.attackBufferTimer = 0.16;
    } else if (wantsRanged) {
      player.queuedAttack = 'ranged';
      player.attackBufferTimer = 0.16;
    }

    if (player.attackTimer > 0) {
      player.attackTimer = Math.max(0, player.attackTimer - dt);
      if (player.attackState === 'ranged' && !player.rangedShotFired) {
        const fireMoment = this.config.player.ranged.fireMoment;
        if (this.config.player.ranged.duration - player.attackTimer >= fireMoment) {
          this.firePlayerProjectile();
          player.rangedShotFired = true;
        }
      }
      if (player.attackTimer === 0) {
        player.attackState = null;
        player.rangedShotFired = false;
      }
    }

    if (player.attackTimer === 0 && player.attackBufferTimer > 0 && player.queuedAttack) {
      if (player.queuedAttack === 'melee') {
        player.attackState = 'melee';
        player.attackTimer = this.config.player.melee.duration;
        player.rangedShotFired = false;
      } else if (player.queuedAttack === 'ranged') {
        player.attackState = 'ranged';
        player.attackTimer = this.config.player.ranged.duration;
        player.rangedShotFired = false;
      }

      player.queuedAttack = null;
      player.attackBufferTimer = 0;
    } else if (player.attackBufferTimer === 0) {
      player.queuedAttack = null;
    }

    const controlMultiplier = player.onGround ? 1 : this.config.player.airControl;
    const moveSpeed = player.crouching
      ? this.config.player.moveSpeed * this.config.player.crouchSpeedMultiplier
      : this.config.player.moveSpeed;
    if (player.hurtTimer <= 0) {
      const desiredSpeed = inputX * moveSpeed;
      const acceleration = this.config.player.acceleration * controlMultiplier;

      if (inputX !== 0) {
        if (desiredSpeed > player.vx) {
          player.vx = Math.min(desiredSpeed, player.vx + acceleration * dt);
        } else {
          player.vx = Math.max(desiredSpeed, player.vx - acceleration * dt);
        }
        player.facing = sign(inputX);
      } else if (player.onGround) {
        const frictionStep = this.config.player.friction * dt;
        if (Math.abs(player.vx) <= frictionStep) {
          player.vx = 0;
        } else {
          player.vx -= sign(player.vx) * frictionStep;
        }
      }
    }

    if (player.onGround) {
      player.coyoteTimer = this.config.player.coyoteTime;
    }

    if (player.jumpBufferTimer > 0 && player.coyoteTimer > 0 && player.hurtTimer <= 0) {
      player.vy = -this.config.player.jumpSpeed;
      player.onGround = false;
      player.coyoteTimer = 0;
      player.jumpBufferTimer = 0;
    }

    player.vy = Math.min(this.config.maxFallSpeed, player.vy + this.config.gravity * dt);
    this.moveEntityWithCollisions(player, dt, { checkBoxes: true, allowPushBoxes: true });

    if (player.attackState === 'melee') {
      this.applyMeleeHits();
    }

    if (player.health <= 0 && player.alive) {
      player.alive = false;
      player.vx = 0;
      player.vy = 0;
      this.deathTimer = 0;
    }
  }

  trySetCrouch(shouldCrouch) {
    const player = this.player;
    const standingHeight = this.config.player.height;
    const crouchHeight = this.config.player.crouchHeight;

    if (shouldCrouch) {
      if (player.crouching) {
        return true;
      }
      const bottom = player.y + player.height;
      player.height = crouchHeight;
      player.y = bottom - player.height;
      player.crouching = true;
      return true;
    }

    if (!player.crouching) {
      return true;
    }

    const bottom = player.y + player.height;
    const targetY = bottom - standingHeight;
    const testBounds = { x: player.x, y: targetY, width: player.width, height: standingHeight };
    const collides = this.getSolidRects(testBounds, { checkBoxes: true }).some((rect) => rectsIntersect(testBounds, rect));

    if (collides) {
      return false;
    }

    player.height = standingHeight;
    player.y = targetY;
    player.crouching = false;
    return true;
  }

  firePlayerProjectile() {
    const player = this.player;
    if (player.ammo <= 0) {
      return;
    }

    player.ammo = Math.max(0, player.ammo - 1);
    const projectileSize = this.config.player.ranged.size;
    this.projectiles.push({
      owner: 'player',
      x: player.facing > 0 ? player.x + player.width - 8 : player.x - projectileSize + 8,
      y: player.y + player.height * 0.42,
      width: projectileSize,
      height: projectileSize,
      vx: player.facing * this.config.player.ranged.speed,
      vy: 0,
      damage: this.config.player.ranged.damage,
      alive: true
    });
  }

  applyMeleeHits() {
    const player = this.player;
    const elapsed = this.config.player.melee.duration - player.attackTimer;
    if (elapsed < this.config.player.melee.hitStart || elapsed > this.config.player.melee.hitEnd) {
      return;
    }

    const hitboxWidth = this.config.player.melee.width;
    const hitboxHeight = this.config.player.melee.height;
    const hitbox = {
      x: player.facing > 0 ? player.x + player.width - 6 : player.x - hitboxWidth + 6,
      y: player.y + 18,
      width: hitboxWidth,
      height: hitboxHeight
    };

    for (const enemy of [...this.walkers, ...this.turrets]) {
      if (!enemy.alive) {
        continue;
      }
      if (enemy._lastMeleeFrame === player.attackTimer) {
        continue;
      }
      if (rectsIntersect(hitbox, enemy)) {
        this.damageEnemy(enemy, this.config.player.melee.damage);
        enemy._lastMeleeFrame = player.attackTimer;
        enemy.vx = (enemy.vx || 0) + player.facing * this.config.player.melee.pushback;
      }
    }
  }

  updateBoxes(dt) {
    for (const box of this.boxes) {
      box.vy = Math.min(this.config.maxFallSpeed, box.vy + this.config.gravity * dt);
      const frictionStep = this.config.box.friction * dt;
      if (box.onGround) {
        if (Math.abs(box.vx) <= frictionStep) {
          box.vx = 0;
        } else {
          box.vx -= sign(box.vx) * frictionStep;
        }
      }
      this.moveEntityWithCollisions(box, dt, { checkBoxes: true, excludeSelf: box });
    }
  }

  updateWalkers(dt) {
    for (const enemy of this.walkers) {
      if (!enemy.alive) {
        continue;
      }

      enemy.animationTime += dt;
      enemy.attackCooldown = Math.max(0, enemy.attackCooldown - dt);
      enemy.attackTimer = Math.max(0, enemy.attackTimer - dt);
      enemy.hurtTimer = Math.max(0, enemy.hurtTimer - dt);

      const baseSpeed = this.config.enemies.walker.speed;
      if (enemy.x <= enemy.left) {
        enemy.vx = baseSpeed;
        enemy.facing = 1;
      }
      if (enemy.x + enemy.width >= enemy.right) {
        enemy.vx = -baseSpeed;
        enemy.facing = -1;
      }

      enemy.vy = Math.min(this.config.maxFallSpeed, enemy.vy + this.config.enemies.walker.gravity * dt);
      this.moveEntityWithCollisions(enemy, dt, { checkBoxes: true });

      const overlapsPlayer = rectsIntersect(enemy, this.player);
      if (overlapsPlayer && enemy.attackCooldown <= 0 && this.player.invulnerability <= 0) {
        enemy.attackCooldown = this.config.enemies.walker.attackCooldown;
        enemy.attackTimer = 0.35;
        this.damagePlayer(this.config.enemies.walker.contactDamage, enemy.facing);
      }
    }
  }

  updateTurrets(dt) {
    for (const turret of this.turrets) {
      if (!turret.alive) {
        continue;
      }

      turret.animationTime += dt;
      turret.shotCooldown = Math.max(0, turret.shotCooldown - dt);
      turret.attackTimer = Math.max(0, turret.attackTimer - dt);
      turret.hurtTimer = Math.max(0, turret.hurtTimer - dt);

      const dx = (this.player.x + this.player.width * 0.5) - (turret.x + turret.width * 0.5);
      if (Math.abs(dx) <= this.config.enemies.turret.range) {
        turret.facing = dx >= 0 ? 1 : -1;
      }

      if (Math.abs(dx) <= this.config.enemies.turret.range && turret.shotCooldown === 0) {
        turret.shotCooldown = this.config.enemies.turret.shotInterval;
        turret.attackTimer = 0.42;
        this.projectiles.push({
          owner: 'enemy',
          x: turret.facing > 0 ? turret.x + turret.width - 10 : turret.x - this.config.enemies.turret.projectileSize + 10,
          y: turret.y + turret.height * 0.36,
          width: this.config.enemies.turret.projectileSize,
          height: this.config.enemies.turret.projectileSize,
          vx: turret.facing * this.config.enemies.turret.projectileSpeed,
          vy: 0,
          damage: this.config.enemies.turret.damage,
          alive: true
        });
      }
    }
  }

  updateProjectiles(dt) {
    for (const projectile of this.projectiles) {
      if (!projectile.alive) {
        continue;
      }

      projectile.x += projectile.vx * dt;
      projectile.y += projectile.vy * dt;

      if (
        projectile.x + projectile.width < 0 ||
        projectile.x > this.world.width ||
        projectile.y + projectile.height < 0 ||
        projectile.y > this.world.height
      ) {
        projectile.alive = false;
        continue;
      }

      if (this.intersectsStaticWorld(projectile) || (!this.gate.open && rectsIntersect(projectile, this.gate))) {
        projectile.alive = false;
        continue;
      }

      if (projectile.owner === 'player') {
        for (const enemy of [...this.walkers, ...this.turrets]) {
          if (!enemy.alive) {
            continue;
          }
          if (rectsIntersect(projectile, enemy)) {
            this.damageEnemy(enemy, projectile.damage);
            projectile.alive = false;
            break;
          }
        }
      } else if (projectile.owner === 'enemy' && this.player.invulnerability <= 0 && rectsIntersect(projectile, this.player)) {
        this.damagePlayer(projectile.damage, sign(projectile.vx) || 1);
        projectile.alive = false;
      }
    }

    this.projectiles = this.projectiles.filter((projectile) => projectile.alive);
  }

  updatePickups(dt) {
    for (const pickup of this.pickups) {
      if (pickup.collected) {
        continue;
      }

      pickup.y = pickup.baseY + Math.sin(this.uiPulse * this.config.pickups.bobSpeed + pickup.animationOffset) * this.config.pickups.bobAmplitude;
      if (rectsIntersect(pickup, this.player)) {
        pickup.collected = true;
        if (pickup.type === 'heart') {
          this.player.health = Math.min(this.config.player.maxHealth, this.player.health + this.config.pickups.heartRestore);
        } else if (pickup.type === 'ammo') {
          this.player.ammo = this.config.pickups.ammoFillTo;
        }
      }
    }
  }

  updateSwitchAndGate() {
    const plate = this.switchPlate;
    const plateTrigger = {
      x: plate.x + 8,
      y: plate.y - 4,
      width: plate.width - 16,
      height: plate.height + 12
    };

    plate.pressed = this.boxes.some((box) => rectsIntersect(box, plateTrigger));
    this.gate.open = plate.pressed;
  }

  updateChestInteraction() {
    if (this.chest.open) {
      this.promptRect = null;
      return;
    }

    const playerCenterX = this.player.x + this.player.width * 0.5;
    const chestCenterX = this.chest.x + this.chest.width * 0.5;
    const nearChest =
      Math.abs(playerCenterX - chestCenterX) < 120 &&
      Math.abs((this.player.y + this.player.height) - (this.chest.y + this.chest.height)) < 140;

    if (!nearChest || !this.gate.open) {
      this.promptRect = null;
      return;
    }

    const screenX = chestCenterX - this.camera.x - 32;
    const screenY = this.chest.y - 84;
    this.promptRect = { x: screenX, y: screenY, width: 64, height: 64 };

    const pressedInteract = this.input.wasPressed('KeyF');
    const clickedPrompt = this.input.mouseWasPressed(0) && pointInRect(this.input.mouse.x, this.input.mouse.y, this.promptRect);

    if (pressedInteract || clickedPrompt) {
      this.openChest();
    }
  }

  openChest() {
    this.chest.open = true;
    this.levelComplete = true;
    this.showOverlay(levelCompleteModal);
    this.pauseReason = 'complete';
  }

  damageEnemy(enemy, damage) {
    enemy.health -= damage;
    enemy.hurtTimer = enemy.type === 'walker' ? this.config.enemies.walker.hurtFlashTime : this.config.enemies.turret.hurtFlashTime;
    if (enemy.health <= 0) {
      enemy.alive = false;
    }
  }

  damagePlayer(amount, sourceDirection) {
    const player = this.player;
    if (player.invulnerability > 0) {
      return;
    }

    player.health = Math.max(0, player.health - amount);
    player.hurtTimer = 0.48;
    player.invulnerability = this.config.player.hurtInvulnerability;
    player.vx = sourceDirection * this.config.player.knockbackX;
    player.vy = -this.config.player.knockbackY;
  }

  getTileRectanglesForBounds(bounds) {
    const minX = clamp(Math.floor(bounds.x / TILE) - 1, 0, this.world.gridWidth - 1);
    const maxX = clamp(Math.floor((bounds.x + bounds.width) / TILE) + 1, 0, this.world.gridWidth - 1);
    const minY = clamp(Math.floor(bounds.y / TILE) - 1, 0, this.world.gridHeight - 1);
    const maxY = clamp(Math.floor((bounds.y + bounds.height) / TILE) + 1, 0, this.world.gridHeight - 1);
    const rects = [];

    for (let y = minY; y <= maxY; y += 1) {
      for (let x = minX; x <= maxX; x += 1) {
        if (this.world.rows[y][x] === 'G') {
          rects.push(makeRect(x * TILE, y * TILE, TILE, TILE));
        }
      }
    }

    return rects;
  }

  getSolidRects(bounds, options = {}) {
    const rects = this.getTileRectanglesForBounds(bounds);

    if (!this.gate.open) {
      rects.push(makeRect(this.gate.x, this.gate.y, this.gate.width, this.gate.height));
    }

    if (options.checkBoxes) {
      for (const box of this.boxes) {
        if (options.excludeSelf && box === options.excludeSelf) {
          continue;
        }
        rects.push(makeRect(box.x, box.y, box.width, box.height));
      }
    }

    return rects;
  }

  intersectsStaticWorld(bounds) {
    return this.getTileRectanglesForBounds(bounds).some((rect) => rectsIntersect(bounds, rect));
  }

  moveEntityWithCollisions(entity, dt, options = {}) {
    entity.onGround = false;

    const moveX = entity.vx * dt;
    if (options.allowPushBoxes && moveX !== 0) {
      this.resolvePlayerBoxPush(entity, moveX);
    }

    entity.x += moveX;
    const horizontalRects = this.getSolidRects(entity, options);
    for (const rect of horizontalRects) {
      if (!rectsIntersect(entity, rect)) {
        continue;
      }
      if (moveX > 0) {
        entity.x = rect.x - entity.width;
      } else if (moveX < 0) {
        entity.x = rect.x + rect.width;
      }
      entity.vx = 0;
    }

    entity.y += entity.vy * dt;
    const verticalRects = this.getSolidRects(entity, options);
    for (const rect of verticalRects) {
      if (!rectsIntersect(entity, rect)) {
        continue;
      }
      if (entity.vy > 0) {
        entity.y = rect.y - entity.height;
        entity.vy = 0;
        entity.onGround = true;
      } else if (entity.vy < 0) {
        entity.y = rect.y + rect.height;
        entity.vy = 0;
      }
    }

    entity.x = clamp(entity.x, 0, this.world.width - entity.width);
    entity.y = clamp(entity.y, 0, this.world.height - entity.height + 300);
  }

  resolvePlayerBoxPush(player, moveX) {
    if (moveX === 0) {
      return;
    }

    const predicted = {
      x: player.x + moveX,
      y: player.y,
      width: player.width,
      height: player.height
    };

    for (const box of this.boxes) {
      if (!rectsIntersect(predicted, box)) {
        continue;
      }

      const deltaX = clamp(moveX, -this.config.box.maxPushDistancePerFrame, this.config.box.maxPushDistancePerFrame);
      const oldX = box.x;
      box.x += deltaX;
      const boxRects = this.getSolidRects(box, { checkBoxes: true, excludeSelf: box });

      let blocked = false;
      for (const rect of boxRects) {
        if (!rectsIntersect(box, rect)) {
          continue;
        }
        blocked = true;
        break;
      }

      if (blocked) {
        box.x = oldX;
      } else {
        box.vx = deltaX / this.config.physicsStep;
      }
    }
  }

  drawBackground() {
    const bgCfg = this.level.background;
    const bgImage = this.assets.background;
    const scaledWidth = bgCfg.sourceWidth * bgCfg.scale;
    const scaledHeight = bgCfg.sourceHeight * bgCfg.scale;
    const maxVerticalShift = Math.max(0, scaledHeight - VIEW_HEIGHT);
    const playerNormalizedY = clamp((this.player.y + this.player.height * 0.5) / this.world.height, 0, 1);
    const offsetY = clamp(playerNormalizedY * maxVerticalShift, 0, maxVerticalShift);
    const parallaxX = this.camera.x * bgCfg.parallaxX;

    if (bgImage) {
      const startX = -((parallaxX % scaledWidth) + scaledWidth);
      for (let drawX = startX; drawX < VIEW_WIDTH + scaledWidth; drawX += scaledWidth) {
        ctx.drawImage(bgImage, Math.floor(drawX), Math.floor(-offsetY), scaledWidth, scaledHeight);
      }
      return;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, VIEW_HEIGHT);
    gradient.addColorStop(0, bgCfg.colorTop);
    gradient.addColorStop(1, bgCfg.colorBottom);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);

    const patternWidth = 220;
    const patternOffset = -((parallaxX % patternWidth) + patternWidth);
    for (let x = patternOffset; x < VIEW_WIDTH + patternWidth; x += patternWidth) {
      for (let y = -offsetY; y < VIEW_HEIGHT + 120; y += 140) {
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.fillRect(Math.floor(x), Math.floor(y), 96, 34);
        ctx.fillStyle = 'rgba(0,0,0,0.18)';
        ctx.fillRect(Math.floor(x + 40), Math.floor(y + 62), 120, 28);
      }
    }
  }

  drawTiles() {
    const grassCfg = this.config.tileDecor?.grassOverlay;

    for (const tile of this.world.tiles) {
      const screenX = tile.x - this.camera.x;
      if (screenX + tile.width < -4 || screenX > VIEW_WIDTH + 4) {
        continue;
      }

      const familyAsset = this.assets.tiles?.[tile.family];
      const baseImage = tile.family === 'groundCenter'
        ? familyAsset
        : familyAsset?.[tile.variant];

      if (baseImage) {
        ctx.drawImage(baseImage, Math.floor(screenX), tile.y, tile.width, tile.height);
      } else {
        if (tile.family === 'groundFloating') {
          ctx.fillStyle = '#6a593f';
        } else if (tile.family === 'groundBottom' || tile.family === 'groundBottomCorner') {
          ctx.fillStyle = '#594734';
        } else {
          ctx.fillStyle = '#635241';
        }

        ctx.fillRect(Math.floor(screenX), tile.y, tile.width, tile.height);

        if (tile.family === 'groundCenter') {
          ctx.fillStyle = 'rgba(0,0,0,0.08)';
          ctx.fillRect(Math.floor(screenX) + 10, tile.y + 10, tile.width - 20, tile.height - 20);
        } else {
          ctx.fillStyle = 'rgba(0,0,0,0.12)';
          for (let ix = 0; ix < tile.width; ix += 24) {
            for (let iy = 16; iy < tile.height; iy += 24) {
              ctx.fillRect(Math.floor(screenX) + ix, tile.y + iy, 12, 12);
            }
          }

          if (tile.family === 'groundCorner' || tile.family === 'groundBottomCorner') {
            ctx.fillStyle = 'rgba(255,255,255,0.08)';
            if (tile.variant === 'left') {
              ctx.beginPath();
              ctx.moveTo(Math.floor(screenX), tile.y);
              ctx.lineTo(Math.floor(screenX + tile.width * 0.45), tile.y);
              ctx.lineTo(Math.floor(screenX), tile.y + tile.height * 0.45);
              ctx.closePath();
              ctx.fill();
            } else if (tile.variant === 'right') {
              ctx.beginPath();
              ctx.moveTo(Math.floor(screenX + tile.width), tile.y);
              ctx.lineTo(Math.floor(screenX + tile.width * 0.55), tile.y);
              ctx.lineTo(Math.floor(screenX + tile.width), tile.y + tile.height * 0.45);
              ctx.closePath();
              ctx.fill();
            }
          }
        }
      }

      if (!tile.hasGrassOverlay) {
        continue;
      }

      const grassImage = this.assets.tiles?.grassOverlay?.[tile.grassVariant];
      const grassWidth = tile.width;
      const grassHeight = grassCfg
        ? Math.max(
            Math.round(grassWidth * (grassCfg.sourceHeight / grassCfg.sourceWidth)),
            Math.round(tile.height * 0.42)
          )
        : 36;
      const grassX = Math.floor(screenX);
      const grassY = Math.floor(tile.y + (grassCfg?.offsetY ?? -15));

      if (grassImage) {
        ctx.drawImage(grassImage, grassX, grassY, grassWidth, grassHeight);
      } else {
        ctx.fillStyle = '#8fb14a';
        ctx.fillRect(grassX, grassY + Math.floor(grassHeight * 0.32), grassWidth, Math.ceil(grassHeight * 0.38));
        ctx.fillStyle = '#dce7b3';
        ctx.fillRect(grassX, grassY, grassWidth, Math.max(6, Math.floor(grassHeight * 0.22)));
      }
    }
  }

  drawSwitch() {
    const switchImage = this.switchPlate.pressed ? this.assets.ui.switch?.on : this.assets.ui.switch?.off;
    const screenX = this.switchPlate.x - this.camera.x;
    if (switchImage) {
      ctx.drawImage(switchImage, Math.floor(screenX), Math.floor(this.switchPlate.y - 12), this.switchPlate.width, this.switchPlate.height + 28);
      return;
    }

    ctx.fillStyle = this.switchPlate.pressed ? '#8baa46' : '#c7776c';
    ctx.fillRect(Math.floor(screenX), Math.floor(this.switchPlate.y), this.switchPlate.width, this.switchPlate.height);
    ctx.fillStyle = '#f0ead2';
    ctx.fillRect(Math.floor(screenX + 10), Math.floor(this.switchPlate.y + 8), this.switchPlate.width - 20, 10);
  }

  drawGate() {
    const screenX = this.gate.x - this.camera.x;
    if (this.gate.open) {
      const image = this.assets.ui.gate?.open;
      if (image) {
        ctx.drawImage(image, Math.floor(screenX), this.gate.y, this.gate.width, this.gate.height);
      } else {
        ctx.fillStyle = 'rgba(170, 210, 120, 0.25)';
        ctx.fillRect(Math.floor(screenX), this.gate.y, this.gate.width, this.gate.height);
      }
      return;
    }

    const image = this.assets.ui.gate?.closed;
    if (image) {
      ctx.drawImage(image, Math.floor(screenX), this.gate.y, this.gate.width, this.gate.height);
      return;
    }

    ctx.fillStyle = '#4c5d77';
    ctx.fillRect(Math.floor(screenX), this.gate.y, this.gate.width, this.gate.height);
    ctx.fillStyle = '#d9dee6';
    for (let y = 0; y < this.gate.height; y += 28) {
      ctx.fillRect(Math.floor(screenX) + 14, this.gate.y + y, 12, 18);
      ctx.fillRect(Math.floor(screenX) + 40, this.gate.y + y, 12, 18);
      ctx.fillRect(Math.floor(screenX) + 66, this.gate.y + y, 12, 18);
    }
  }

  drawChest() {
    const screenX = this.chest.x - this.camera.x;
    const image = this.chest.open ? this.assets.ui.chest?.open : this.assets.ui.chest?.closed;
    if (image) {
      ctx.drawImage(image, Math.floor(screenX), Math.floor(this.chest.y), this.chest.width, this.chest.height);
      return;
    }

    ctx.fillStyle = this.chest.open ? '#9c7a3a' : '#754f25';
    ctx.fillRect(Math.floor(screenX), Math.floor(this.chest.y + 18), this.chest.width, this.chest.height - 18);
    ctx.fillStyle = '#d3b56a';
    ctx.fillRect(Math.floor(screenX), Math.floor(this.chest.y), this.chest.width, 28);
    ctx.fillStyle = '#2b2010';
    ctx.fillRect(Math.floor(screenX + this.chest.width * 0.44), Math.floor(this.chest.y + 34), 12, 22);
  }

  drawPickups() {
    for (const pickup of this.pickups) {
      if (pickup.collected) {
        continue;
      }

      const screenX = pickup.x - this.camera.x;
      const image = pickup.type === 'heart' ? this.assets.ui.pickups?.heart : this.assets.ui.pickups?.ammo;
      if (image) {
        ctx.drawImage(image, Math.floor(screenX), Math.floor(pickup.y), pickup.width, pickup.height);
        continue;
      }

      if (pickup.type === 'heart') {
        this.drawFallbackHeart(screenX + 8, pickup.y + 6, 40, 'full');
      } else {
        this.drawFallbackBullet(screenX + 8, pickup.y + 16, 40, true);
      }
    }
  }

  drawBoxes() {
    for (const box of this.boxes) {
      const screenX = box.x - this.camera.x;
      ctx.fillStyle = '#7f5834';
      ctx.fillRect(Math.floor(screenX), Math.floor(box.y), box.width, box.height);
      ctx.fillStyle = '#a6794c';
      ctx.fillRect(Math.floor(screenX) + 6, Math.floor(box.y) + 6, box.width - 12, 10);
      ctx.fillRect(Math.floor(screenX) + 6, Math.floor(box.y) + box.height - 16, box.width - 12, 10);
      ctx.fillStyle = '#5b3a20';
      ctx.fillRect(Math.floor(screenX) + box.width * 0.45, Math.floor(box.y), 10, box.height);
    }
  }

  drawWalkers() {
    for (const enemy of this.walkers) {
      if (!enemy.alive) {
        continue;
      }

      const screenX = enemy.x - this.camera.x;
      const animation = enemy.attackTimer > 0 ? 'attack' : 'idle';
      const frame = getFrame(this.assets.enemies.walker?.[animation], enemy.animationTime, animation === 'attack' ? 8 : 4, true);

      ctx.save();
      if (enemy.facing < 0) {
        ctx.translate(Math.floor(screenX + enemy.width), 0);
        ctx.scale(-1, 1);
      } else {
        ctx.translate(Math.floor(screenX), 0);
      }

      if (enemy.hurtTimer > 0) {
        ctx.globalAlpha = 0.65;
      }

      if (frame) {
        ctx.drawImage(frame, 0, Math.floor(enemy.y), enemy.width, enemy.height);
      } else {
        ctx.fillStyle = '#7f3e3e';
        ctx.fillRect(0, Math.floor(enemy.y), enemy.width, enemy.height);
        ctx.fillStyle = '#d9b0a0';
        ctx.fillRect(10, Math.floor(enemy.y) + 12, enemy.width - 20, 24);
        ctx.fillStyle = '#241717';
        ctx.fillRect(enemy.width - 22, Math.floor(enemy.y) + 24, 10, 10);
      }

      ctx.restore();
    }
  }

  drawTurrets() {
    for (const turret of this.turrets) {
      if (!turret.alive) {
        continue;
      }

      const screenX = turret.x - this.camera.x;
      const animation = turret.attackTimer > 0 ? 'attack' : 'idle';
      const frame = getFrame(this.assets.enemies.turret?.[animation], turret.animationTime, animation === 'attack' ? 7 : 1.5, true);

      ctx.save();
      if (turret.facing < 0) {
        ctx.translate(Math.floor(screenX + turret.width), 0);
        ctx.scale(-1, 1);
      } else {
        ctx.translate(Math.floor(screenX), 0);
      }

      if (turret.hurtTimer > 0) {
        ctx.globalAlpha = 0.65;
      }

      if (frame) {
        ctx.drawImage(frame, 0, Math.floor(turret.y), turret.width, turret.height);
      } else {
        ctx.fillStyle = '#3e546f';
        ctx.fillRect(0, Math.floor(turret.y), turret.width, turret.height);
        ctx.fillStyle = '#b7d2e4';
        ctx.fillRect(18, Math.floor(turret.y) + 14, turret.width - 30, 18);
        ctx.fillRect(turret.width - 16, Math.floor(turret.y) + 30, 26, 10);
      }

      ctx.restore();
    }
  }

  drawProjectiles() {
    for (const projectile of this.projectiles) {
      const screenX = projectile.x - this.camera.x;
      ctx.fillStyle = projectile.owner === 'player' ? '#f7dd7c' : '#ff947c';
      ctx.fillRect(Math.floor(screenX), Math.floor(projectile.y), projectile.width, projectile.height);
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.fillRect(Math.floor(screenX) + 4, Math.floor(projectile.y) + 4, projectile.width - 8, projectile.height - 8);
    }
  }

  drawPlayer() {
    const player = this.player;
    const screenX = player.x - this.camera.x;
    let animation = 'idle';
    let fps = 3.5;
    let loop = true;
    let animationTime = player.animationTime;

    if (!player.alive) {
      animation = 'hurt';
      fps = 6;
      loop = false;
      animationTime = this.deathTimer;
    } else if (player.hurtTimer > 0) {
      animation = 'hurt';
      fps = 6;
      loop = false;
      animationTime = 0.48 - player.hurtTimer;
    } else if (player.attackState === 'melee') {
      animation = 'melee';
      fps = 7;
      loop = false;
      animationTime = this.config.player.melee.duration - player.attackTimer;
    } else if (player.attackState === 'ranged') {
      animation = 'ranged';
      fps = 7;
      loop = false;
      animationTime = this.config.player.ranged.duration - player.attackTimer;
    } else if (!player.onGround) {
      animation = 'jump';
      fps = 1;
      loop = false;
    } else if (Math.abs(player.vx) > 20) {
      animation = 'run';
      fps = 7;
    }

    const frame = getFrame(this.assets.player?.[animation], animationTime, fps, loop);
    const isAttackAnimation = animation === 'melee' || animation === 'ranged';

    let renderWidth = player.width;
    let renderHeight = player.height;
    let renderX = Math.floor(screenX);
    let renderY = Math.floor(player.y);

    if (isAttackAnimation) {
      const attackScale = player.height / this.config.player.attackFrameHeight;
      renderWidth = Math.round(this.config.player.attackFrameWidth * attackScale);
      renderHeight = Math.round(this.config.player.attackFrameHeight * attackScale);
      renderY = Math.floor(player.y + player.height - renderHeight);

      const extraWidth = Math.max(0, renderWidth - player.width);
      renderX = player.facing < 0
        ? Math.floor(screenX - extraWidth)
        : Math.floor(screenX);
    }

    ctx.save();
    if (player.invulnerability > 0 && Math.floor(this.uiPulse * 14) % 2 === 0) {
      ctx.globalAlpha = 0.55;
    }

    if (frame) {
      if (player.facing < 0) {
        ctx.translate(renderX + renderWidth, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(frame, 0, renderY, renderWidth, renderHeight);
      } else {
        ctx.drawImage(frame, renderX, renderY, renderWidth, renderHeight);
      }
    } else {
      const fallbackX = Math.floor(screenX);
      ctx.fillStyle = '#ecefe4';
      ctx.fillRect(fallbackX, renderY, player.width, player.height);
      ctx.fillStyle = '#4f6a8b';
      ctx.fillRect(fallbackX + 14, renderY + 24, player.width - 28, 28);
      ctx.fillStyle = '#161920';
      ctx.fillRect(fallbackX + player.width - 18, renderY + 22, 8, 8);
      ctx.fillStyle = '#9c6589';
      ctx.fillRect(fallbackX + 10, renderY + player.height - 18, player.width - 20, 10);
    }

    ctx.restore();

    if (this.config.debug && player.attackState === 'melee') {
      const hitboxWidth = this.config.player.melee.width;
      const hitboxHeight = this.config.player.melee.height;
      const hitboxX = player.facing > 0 ? player.x + player.width - 6 : player.x - hitboxWidth + 6;
      ctx.strokeStyle = '#ff4444';
      ctx.strokeRect(Math.floor(hitboxX - this.camera.x), Math.floor(player.y + 18), hitboxWidth, hitboxHeight);
    }
  }

  drawHud() {
    const heartSlots = 6;
    const heartsY = 28;
    const heartsWidth = heartSlots * this.config.ui.heartSize + (heartSlots - 1) * this.config.ui.heartGap;
    const heartsX = VIEW_WIDTH - heartsWidth - 34;
    const bulletsY = heartsY + 90;

    for (let i = 0; i < heartSlots; i += 1) {
      const slotHealth = clamp(this.player.health - i * 2, 0, 2);
      const variant = slotHealth >= 2 ? 'full' : slotHealth === 1 ? 'half' : 'empty';
      const image = this.assets.ui.hearts?.[variant];
      const x = heartsX + i * (this.config.ui.heartSize + this.config.ui.heartGap);
      if (image) {
        ctx.drawImage(image, x, heartsY, this.config.ui.heartSize, this.config.ui.heartSize);
      } else {
        this.drawFallbackHeart(x, heartsY + 4, this.config.ui.heartSize - 6, variant);
      }
    }

    for (let i = 0; i < this.config.player.ranged.maxAmmo; i += 1) {
      const isFull = i < this.player.ammo;
      const image = isFull ? this.assets.ui.bullets?.full : this.assets.ui.bullets?.empty;
      const x = VIEW_WIDTH - 260 + i * (this.config.ui.bulletSize + 10);
      if (image) {
        ctx.drawImage(image, x, bulletsY, this.config.ui.bulletSize, this.config.ui.bulletSize);
      } else {
        this.drawFallbackBullet(x, bulletsY + 2, this.config.ui.bulletSize - 4, isFull);
      }
    }
  }

  drawFallbackHeart(x, y, size, variant) {
    const color = variant === 'full' ? '#d96a7b' : variant === 'half' ? '#d96a7b' : '#3b4351';
    const base = size / 8;
    const drawX = Math.floor(x);
    const drawY = Math.floor(y);

    const heartPixels = [
      [1, 0], [2, 0], [5, 0], [6, 0],
      [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
      [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
      [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
      [2, 4], [3, 4], [4, 4], [5, 4],
      [3, 5], [4, 5],
      [3, 6]
    ];

    for (const [px, py] of heartPixels) {
      if (variant === 'half' && px > 3) {
        ctx.fillStyle = '#3b4351';
      } else {
        ctx.fillStyle = color;
      }
      ctx.fillRect(drawX + px * base, drawY + py * base, base + 1, base + 1);
    }
  }

  drawFallbackBullet(x, y, size, isFull) {
    ctx.fillStyle = isFull ? '#e7d36c' : '#4a5361';
    ctx.fillRect(Math.floor(x + size * 0.2), Math.floor(y), size * 0.4, size * 0.72);
    ctx.fillStyle = isFull ? '#f7ebae' : '#798390';
    ctx.fillRect(Math.floor(x + size * 0.15), Math.floor(y + size * 0.58), size * 0.5, size * 0.18);
  }

  drawInteractionPrompt() {
    if (!this.promptRect) {
      return;
    }

    const pulse = 1 + Math.sin(this.uiPulse * 5) * 0.06;
    const width = this.promptRect.width * pulse;
    const height = this.promptRect.height * pulse;
    const x = this.promptRect.x + (this.promptRect.width - width) * 0.5;
    const y = this.promptRect.y + (this.promptRect.height - height) * 0.5;

    ctx.fillStyle = 'rgba(16,19,28,0.92)';
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = '#eef2df';
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);
    ctx.fillStyle = '#eef2df';
    ctx.font = '26px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillText('F', x + width * 0.5, y + height * 0.64);
  }

  drawDeathMessage() {
    if (this.player.alive) {
      return;
    }

    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(180, 780, VIEW_WIDTH - 360, 180);
    ctx.strokeStyle = '#eef2df';
    ctx.lineWidth = 6;
    ctx.strokeRect(180, 780, VIEW_WIDTH - 360, 180);
    ctx.fillStyle = '#eef2df';
    ctx.font = '28px "Press Start 2P"';
    ctx.textAlign = 'center';
    ctx.fillText('Вы проиграли', VIEW_WIDTH * 0.5, 860);
  }

  render() {
    ctx.clearRect(0, 0, VIEW_WIDTH, VIEW_HEIGHT);
    this.drawBackground();
    this.drawTiles();
    this.drawSwitch();
    this.drawGate();
    this.drawChest();
    this.drawPickups();
    this.drawBoxes();
    this.drawWalkers();
    this.drawTurrets();
    this.drawProjectiles();
    this.drawPlayer();
    this.drawHud();
    this.drawInteractionPrompt();
    this.drawDeathMessage();

    if (this.config.debug) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(12, VIEW_HEIGHT - 92, 360, 70);
      ctx.fillStyle = '#ffffff';
      ctx.font = '14px monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`player: ${this.player.x.toFixed(1)} / ${this.player.y.toFixed(1)}`, 24, VIEW_HEIGHT - 58);
      ctx.fillText(`camera: ${this.camera.x.toFixed(1)}`, 24, VIEW_HEIGHT - 34);
    }
  }
}

(async function init() {
  const level = LEVELS.level1;
  const assets = await loadAssets(GAME_CONFIG, level);
  const game = new Game(GAME_CONFIG, level, assets);
  game.start();
})();

})();