const bgImage = localStorage.getItem('bg-image');

if (bgImage) {
  document.body.style.backgroundImage = `url('../assets/imgs/${bgImage}')`;
} else {
  document.body.style.backgroundImage = "url('../assets/imgs/space.jpg')";
}