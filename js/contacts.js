const contactButtons = document.querySelectorAll('.contact-button');

contactButtons.forEach(button => {
  button.addEventListener('click', event => {
    const href = button.getAttribute('href');

    if (!href || href === '#') {
      event.preventDefault();
    }
  });
});
