// Snap scroll dot indicator for the "Get Started" cards
const track = document.querySelector(".scroll-track");
const dots = document.querySelectorAll(".snap-dot");

if (track && dots.length) {
  track.addEventListener(
    "scroll",
    () => {
      // Sync active dot to current card index
      const idx = Math.round(track.scrollLeft / track.offsetWidth);
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    });
}