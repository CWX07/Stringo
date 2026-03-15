// Dot indicators for each difficulty scroll track (Beginner, Intermediate and Advanced)
const tracks = document.querySelectorAll(".scroll-track");

tracks.forEach(track => {
  // Dots sit right after the track in the DOM
  const dotsContainer = track.nextElementSibling;
  if (!dotsContainer) return;

  // Target dots in the same scroll track
  const dots = dotsContainer.querySelectorAll(".practice-dot");
  if (!dots.length) return;

  track.addEventListener(
    "scroll",
    () => {
      // Sync active dot to current card index
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    },
    { passive: true }
  );
});