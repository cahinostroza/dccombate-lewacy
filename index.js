const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", onThemeButtonClick);
const modal = document.getElementById("modal");
function onThemeButtonClick() {
  modal.style.display = "block";
}

function imageClicked(image) {
  document.body.style.backgroundImage = `url('./src/assets/imgs/${image}')`;
  localStorage.setItem('bg-image', image);
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const bgImage = localStorage.getItem('bg-image');

if (bgImage) {
  document.body.style.backgroundImage = `url('./src/assets/imgs/${bgImage}')`;
} else {
  document.body.style.backgroundImage = "url('./src/assets/imgs/space.jpg')";
}