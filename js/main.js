const startButton = document.getElementById('startButton');
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.getElementById('main-menu');
const heroSection = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');

const heroThemes = [
  {
    name: 'green',
    background: 'img/hero-pattern.png',
    title: 'img/logo-title-green.png',
    header: '#90ad49',
    overlay: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.04), rgba(28, 46, 24, 0.12))',
    shadow: 'rgba(58, 73, 95, 0.18)'
  },
  {
    name: 'orange',
    background: 'img/hero-pattern-orange.png',
    title: 'img/logo-title-orange.png',
    header: '#f4a642',
    overlay: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.03), rgba(112, 46, 20, 0.12))',
    shadow: 'rgba(96, 44, 54, 0.22)'
  },
  {
    name: 'blue',
    background: 'img/hero-pattern-blue.png',
    title: 'img/logo-title-blue.png',
    header: '#6b9baa',
    overlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.06), rgba(4, 12, 28, 0.22))',
    shadow: 'rgba(4, 12, 28, 0.3)'
  }
];

const applyRandomTheme = () => {
  if (!heroSection || !heroTitle) {
    return;
  }

  const theme = heroThemes[Math.floor(Math.random() * heroThemes.length)];

  heroSection.style.setProperty('--hero-background-image', `url("../${theme.background}")`);
  document.documentElement.style.setProperty('--header-color', theme.header);
  heroSection.style.setProperty('--hero-overlay', theme.overlay);
  heroSection.style.setProperty('--hero-title-shadow', theme.shadow);
  heroSection.dataset.theme = theme.name;
  heroTitle.src = theme.title;
};

const openIntroTarget = () => {
  document.body.classList.add('intro-complete');
  console.log('Start screen activated');
};

applyRandomTheme();

if (startButton) {
  startButton.addEventListener('click', openIntroTarget);
}

document.addEventListener('keydown', event => {
  if (event.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    openIntroTarget();
  }
});

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mainMenu.classList.toggle('is-open');
  });

  mainMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainMenu.classList.remove('is-open');
    });
  });

  const startButton = document.getElementById('startButton');

  if (startButton) {
    startButton.addEventListener('click', () => {
      window.location.href = "hello.html";
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      window.location.href = "hello.html";
    }
  });
}
