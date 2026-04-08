(() => {
  if (window.__portfolioSiteLoaderInit) {
    return;
  }
  window.__portfolioSiteLoaderInit = true;

  const skipLoaderKey = 'portfolio:skip-loader-once';

  const markNextPageToSkipLoader = target => {
    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest('a[data-skip-loader="true"]');
    if (!link) {
      return;
    }

    sessionStorage.setItem(skipLoaderKey, '1');
  };

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    markNextPageToSkipLoader(event.target);
  });

  document.addEventListener('keydown', event => {
    if (event.defaultPrevented || !['Enter', ' '].includes(event.key)) {
      return;
    }

    markNextPageToSkipLoader(document.activeElement);
  });

  const shouldSkipLoader = sessionStorage.getItem(skipLoaderKey) === '1';
  if (shouldSkipLoader) {
    sessionStorage.removeItem(skipLoaderKey);
    return;
  }

  const overlay = document.createElement('div');
  overlay.className = 'site-loader';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="site-loader__stack">
      <div class="site-loader__frame site-loader__frame--1 is-active"></div>
      <div class="site-loader__frame site-loader__frame--2"></div>
      <div class="site-loader__frame site-loader__frame--3"></div>
      <div class="site-loader__frame site-loader__frame--4"></div>
    </div>
  `;

  const attachOverlay = () => {
    if (!document.body || overlay.isConnected) {
      return;
    }
    document.body.appendChild(overlay);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachOverlay, { once: true });
  } else {
    attachOverlay();
  }

  let frameIndex = 0;
  const frames = () => [...overlay.querySelectorAll('.site-loader__frame')];
  const tick = () => {
    const items = frames();
    items.forEach((item, index) => item.classList.toggle('is-active', index === frameIndex));
    frameIndex = (frameIndex + 1) % Math.max(1, items.length);
  };

  const intervalId = window.setInterval(tick, 140);
  const startTime = performance.now();
  const minVisible = 650;

  const hideLoader = () => {
    const elapsed = performance.now() - startTime;
    const delay = Math.max(0, minVisible - elapsed);

    window.setTimeout(() => {
      overlay.classList.add('is-hidden');
      window.clearInterval(intervalId);
      window.setTimeout(() => overlay.remove(), 260);
    }, delay);
  };

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
  }
})();
