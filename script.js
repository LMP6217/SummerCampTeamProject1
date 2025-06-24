const box = document.getElementById('animation-box');

function setAnimation(type) {
  box.className = ''; // Reset current animation
  if (type !== 'none') {
    box.classList.add(type); // Add new animation class
  }
}