const startGameBackButton = document.getElementById('startGameBackButton');
const startGameStartLink = document.querySelector('.hello-action--primary');

const openPreviousPage = () => {
  if (document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      if (referrerUrl.origin === window.location.origin) {
        window.history.back();
        return;
      }
    } catch (error) {
      // Ignore malformed referrer and use fallback navigation.
    }
  }

  window.location.href = 'hello.html';
};

if (startGameBackButton) {
  startGameBackButton.addEventListener('click', openPreviousPage);
}

document.addEventListener('keydown', event => {
  const activeElement = document.activeElement;

  if ((event.code === 'Enter' || event.code === 'Space') && activeElement === startGameBackButton) {
    event.preventDefault();
    openPreviousPage();
    return;
  }

  if ((event.code === 'Enter' || event.code === 'Space') && activeElement === startGameStartLink) {
    event.preventDefault();
    window.location.href = 'platformer.html';
  }
});
