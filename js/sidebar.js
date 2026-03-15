// Breakpoint for mobile
const breakPoint = window.matchMedia("(max-width: 425px)");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBarBtn = document.getElementById("sideBarBtn");
const sideBar = document.getElementById("sideBar");

// Desktop: expand / collapse sidebar
sideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar_open");
});

// Mobile: show / hide sidebar
hamburgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar_open");
});

// Reset sidebar state on screen size change
// Change icon based on screen size
function handleDeviceScreen() {
  if (breakPoint.matches) {
    // Mobile: hidden by default, swap icon to X
    sideBar.classList.remove("sidebar_open");
    sideBarBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
  } else {
    // Desktop: collapsed by default, swap icon to arrows
    sideBar.classList.remove("sidebar_open");
    sideBarBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
  }
}

handleDeviceScreen();
breakPoint.addEventListener("change", handleDeviceScreen);

// Highlight active page in sidebar
const sidebarItem = document.querySelectorAll(".sidebar-item");

sidebarItem.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});