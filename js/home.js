// Snap scroll dot indicator
const track = document.querySelector(".scroll-track");
const dots = document.querySelectorAll(".snap-dot");

if (track && dots.length) {
  track.addEventListener(
    "scroll",
    () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    },
    { passive: true },
  );
}
