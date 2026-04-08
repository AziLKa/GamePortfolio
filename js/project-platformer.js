(() => {
  const menuButton = document.getElementById('projectMenuButton');
  const menuOverlay = document.getElementById('projectMenuOverlay');
  const scrollThumb = document.getElementById('projectScrollThumb');
  const gifPreview = document.getElementById('projectPreviewGif');
  const foxIdlePreview = document.getElementById('foxIdlePreview');

  if (menuButton && menuOverlay) {
    const closeMenu = () => {
      menuOverlay.classList.add('is-hidden');
      menuButton.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('project-menu-open');
    };

    const openMenu = () => {
      menuOverlay.classList.remove('is-hidden');
      menuButton.setAttribute('aria-expanded', 'true');
      document.body.classList.add('project-menu-open');
    };

    menuButton.addEventListener('click', () => {
      const isHidden = menuOverlay.classList.contains('is-hidden');
      if (isHidden) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    menuOverlay.addEventListener('click', event => {
      if (event.target === menuOverlay) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menuOverlay.classList.contains('is-hidden')) {
        closeMenu();
      }
    });
  }

  if (gifPreview) {
    const candidates = (gifPreview.dataset.candidates || gifPreview.getAttribute('src') || '')
      .split('|')
      .map(item => item.trim())
      .filter(Boolean);
    const fallback = gifPreview.dataset.fallback || '';

    let candidateIndex = 0;
    const probeImage = new Image();

    const applySource = src => {
      gifPreview.src = src;
    };

    const tryNextSource = () => {
      if (candidateIndex >= candidates.length) {
        if (fallback) {
          applySource(fallback);
        }
        return;
      }

      const nextSource = candidates[candidateIndex];
      candidateIndex += 1;

      probeImage.onload = () => applySource(nextSource);
      probeImage.onerror = () => tryNextSource();
      probeImage.src = nextSource;
    };

    tryNextSource();
  }

  if (foxIdlePreview) {
    const frameCount = 10;
    const frames = [];
    let currentFrameIndex = 0;
    let animationReady = false;

    const formatFramePath = index => `img/fox_idle_${String(index).padStart(4, '0')}.png`;

    const loadFrame = index => new Promise(resolve => {
      const image = new Image();
      image.onload = () => resolve(image.src);
      image.onerror = () => resolve(null);
      image.src = formatFramePath(index);
    });

    Promise.all(Array.from({ length: frameCount }, (_, index) => loadFrame(index))).then(results => {
      results.filter(Boolean).forEach(src => frames.push(src));

      if (!frames.length) {
        foxIdlePreview.classList.add('is-hidden');
        return;
      }

      foxIdlePreview.src = frames[0];
      animationReady = frames.length > 1;
    });

    window.setInterval(() => {
      if (!animationReady || frames.length < 2) {
        return;
      }

      currentFrameIndex = (currentFrameIndex + 1) % frames.length;
      foxIdlePreview.src = frames[currentFrameIndex];
    }, 140);
  }

  if (scrollThumb) {
    let dragging = false;
    let dragOffset = 0;

    const scrollbar = scrollThumb.parentElement;

    const getMetrics = () => {
      const scrollbarRect = scrollbar.getBoundingClientRect();
      const thumbRect = scrollThumb.getBoundingClientRect();
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const maxThumbOffset = Math.max(0, scrollbarRect.height - thumbRect.height);
      return { scrollbarRect, thumbRect, maxScroll, maxThumbOffset };
    };

    const updateThumb = () => {
      const { maxScroll, maxThumbOffset } = getMetrics();
      const ratio = window.scrollY / maxScroll;
      const top = maxThumbOffset * ratio;
      scrollThumb.style.top = `${top}px`;
    };

    const scrollFromClientY = clientY => {
      const { scrollbarRect, thumbRect, maxScroll, maxThumbOffset } = getMetrics();
      const thumbHeight = thumbRect.height;
      const rawTop = clientY - scrollbarRect.top - dragOffset;
      const clampedTop = Math.max(0, Math.min(maxThumbOffset, rawTop));
      const ratio = maxThumbOffset > 0 ? clampedTop / maxThumbOffset : 0;
      const nextScroll = ratio * maxScroll;
      window.scrollTo({ top: nextScroll, behavior: 'auto' });
    };

    scrollThumb.addEventListener('mousedown', event => {
      const thumbRect = scrollThumb.getBoundingClientRect();
      dragging = true;
      dragOffset = event.clientY - thumbRect.top;
      document.body.classList.add('is-dragging-scrollbar');
      event.preventDefault();
    });

    document.addEventListener('mousemove', event => {
      if (!dragging) {
        return;
      }
      scrollFromClientY(event.clientY);
    });

    document.addEventListener('mouseup', () => {
      dragging = false;
      document.body.classList.remove('is-dragging-scrollbar');
    });

    scrollbar.addEventListener('mousedown', event => {
      if (event.target === scrollThumb || scrollThumb.contains(event.target)) {
        return;
      }
      const thumbRect = scrollThumb.getBoundingClientRect();
      dragOffset = thumbRect.height / 2;
      scrollFromClientY(event.clientY);
    });

    window.addEventListener('scroll', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);
    window.addEventListener('load', updateThumb, { once: true });
    updateThumb();
  }
})();
