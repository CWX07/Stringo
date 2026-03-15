const tracks = document.querySelectorAll(".scroll-track");

tracks.forEach(track => {
  // find the dots container that comes right after this track
  const dotsContainer = track.nextElementSibling;
  if (!dotsContainer) return;

  const dots = dotsContainer.querySelectorAll(".practice-dot");
  if (!dots.length) return;

  track.addEventListener(
    "scroll",
    () => {
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    },
    { passive: true }
  );
});