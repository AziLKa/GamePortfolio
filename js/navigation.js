const pendingLinks = document.querySelectorAll('a[href="#"], .is-disabled');

pendingLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
  });
});
