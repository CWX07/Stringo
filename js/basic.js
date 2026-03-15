const flashCards = document.querySelectorAll(".flash-card");

flashCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Collapse any other open card first
    flashCards.forEach((c) => {
      if (c !== card) c.classList.remove("flipped");
    });

    card.classList.toggle("flipped");
    e.stopPropagation();
  });
});

document.addEventListener("click", () => {
  flashCards.forEach((card) => card.classList.remove("flipped"));
});

const fretTrack = document.getElementById("fretTrack");
const fretDots = document.querySelectorAll("#fretDots .fret-dot");

if (fretTrack && fretDots.length) {
  fretTrack.addEventListener("scroll", () => {
    const idx = Math.round(fretTrack.scrollLeft / fretTrack.clientWidth);
    fretDots.forEach((d, i) => d.classList.toggle("active", i === idx));
  }, { passive: true });
}