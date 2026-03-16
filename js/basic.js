const flashCards = document.querySelectorAll(".flash-card");

// Flash card flipping feature
flashCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Collapse any other open card first
    flashCards.forEach((c) => {
      if (c !== card) c.classList.remove("flipped");
    });

    // Toggle clicked card
    card.classList.toggle("flipped");
    e.stopPropagation();
  });
});

// Click outside — unflip all cards
document.addEventListener("click", () => {
  flashCards.forEach((card) => card.classList.remove("flipped"));
});

// Fretboard scroll dot indicator
const fretTrack = document.getElementById("fretTrack");
const fretDots = document.querySelectorAll("#fretDots .fret-dot");

if (fretTrack && fretDots.length) {
  fretTrack.addEventListener("scroll", () => {
    // Sync active dot to current card index
    const idx = Math.round(fretTrack.scrollLeft / fretTrack.clientWidth);
    fretDots.forEach((d, i) => d.classList.toggle("active", i === idx));
  });
}