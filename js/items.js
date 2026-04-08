(() => {
  const slots = Array.from(document.querySelectorAll('.inventory-slot'));
  const previewImage = document.getElementById('itemPreviewImage');
  const previewName = document.getElementById('itemPreviewName');
  const previewDescription = document.getElementById('itemPreviewDescription');
  const previewMeter = document.getElementById('itemPreviewMeter');

  if (!slots.length || !previewImage || !previewName || !previewDescription || !previewMeter) {
    return;
  }

  const applyItem = slot => {
    slots.forEach(button => button.classList.toggle('is-selected', button === slot));

    const { itemName, itemValue, itemImage, itemDescription } = slot.dataset;

    previewImage.src = itemImage;
    previewImage.alt = itemName;
    previewName.textContent = itemName;
    previewDescription.textContent = itemDescription;
    previewMeter.style.setProperty('--item-value', itemValue);
    previewMeter.setAttribute('aria-label', `${itemName} ${itemValue} percent`);
  };

  slots.forEach(slot => {
    slot.addEventListener('click', () => applyItem(slot));

    slot.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        applyItem(slot);
      }
    });
  });

  const selectedSlot = slots.find(slot => slot.classList.contains('is-selected')) || slots[0];
  applyItem(selectedSlot);
})();
