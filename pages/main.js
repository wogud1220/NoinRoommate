document.querySelectorAll(".zoom").forEach((button) => {
  button.addEventListener("click", (event) => {
    const isZoomIn = event.target.textContent === "+";
    const body = document.body;
    let currentZoom = parseFloat(body.style.zoom) || 1;
    currentZoom += isZoomIn ? 0.1 : -0.1;
    body.style.zoom = Math.max(0.5, Math.min(2, currentZoom));
  });
});

function playSiren() {
  const sirenAudio = document.getElementById("siren-sound");
  sirenAudio.play();
}
