const gridItem2 = document.getElementById('grid-item2');

// Mostra il testo e nasconde l'immagine al passaggio del mouse
gridItem2.addEventListener('mouseover', () => {
  gridItem2.classList.add('active');
});

// Ripristina l'immagine e nasconde il testo quando il mouse esce
gridItem2.addEventListener('mouseout', () => {
  gridItem2.classList.remove('active');
});