export const GAME_CONFIG = {
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
