document.querySelectorAll(".zoom").forEach((button) => {
  button.addEventListener("click", (event) => {
    const isZoomIn = event.target.textContent === "+";
    const body = document.body;
    let currentZoom = parseFloat(body.style.zoom) || 1;
    currentZoom += isZoomIn ? 0.1 : -0.1;
    body.style.zoom = Math.max(0.5, Math.min(2, currentZoom));
  });
document.addEventListener('DOMContentLoaded', () => {

    let baseFontSize = 16;

    const zoomInButton = document.querySelector('.zoom-in');
    const zoomOutButton = document.querySelector('.zoom-out');

    const boxes = document.querySelectorAll('.box');

    function updateFontSize(scale) {
        baseFontSize += scale;

        if (baseFontSize < 12) baseFontSize = 12;
        if (baseFontSize > 32) baseFontSize = 32;

        document.body.style.fontSize = `${baseFontSize}px`;

        boxes.forEach((box) => {
            box.style.fontSize = `${baseFontSize}px`;
        });
    }

    zoomInButton.addEventListener('click', () => {
        updateFontSize(2);
    });

    zoomOutButton.addEventListener('click', () => {
        updateFontSize(-2);
    });
});


function playSiren() {
  const sirenAudio = document.getElementById("siren-sound");
  sirenAudio.play();
}
