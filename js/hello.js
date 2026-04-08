const yesButton = document.getElementById('helloYesButton');
const startLink = document.querySelector('.hello-action--primary');

if (yesButton) {
  yesButton.addEventListener('click', () => {
    window.location.href = 'resume.html';
  });
}

document.addEventListener('keydown', event => {
  const activeElement = document.activeElement;

  if ((event.code === 'Enter' || event.code === 'Space') && activeElement && activeElement.id === 'helloYesButton') {
    event.preventDefault();
    window.location.href = 'resume.html';
    return;
  }

  if ((event.code === 'Enter' || event.code === 'Space') && activeElement === startLink) {
    event.preventDefault();
    window.location.href = 'start-the-game.html';
  }
});
