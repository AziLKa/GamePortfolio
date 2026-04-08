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

export async function loadAssets(config, level) {
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

export function getFrame(frames, time = 0, fps = 8, loop = true) {
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
