document.addEventListener("DOMContentLoaded", () => {

  let baseFontSize = 16;

  const zoomInButton = document.querySelector(".zoom-in");
  const zoomOutButton = document.querySelector(".zoom-out");

  function updateFontSize(scale) {
    baseFontSize += scale;

    if (baseFontSize < 12) baseFontSize = 12;
    if (baseFontSize > 32) baseFontSize = 32;

    document.body.style.fontSize = `${baseFontSize}px`;

    document.querySelectorAll(".box").forEach((box) => {
      box.style.fontSize = `${baseFontSize}px`;
      box.querySelectorAll("*").forEach((child) => {
        child.style.fontSize = `${baseFontSize}px`;
      });
    });
  }

  zoomInButton.addEventListener("click", () => {
    updateFontSize(2);
  });

  zoomOutButton.addEventListener("click", () => {
    updateFontSize(-2);
  });
});

function playSiren() {
  const sirenAudio = document.getElementById("siren-sound");
  sirenAudio.play();
}
