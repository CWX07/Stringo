const mobileScreen = window.matchMedia("(max-width: 425px)");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBarBtn = document.getElementById("sideBarBtn");
const topNav = document.getElementById("topNav");
const sideBar = document.getElementById("sideBar");

// Desktop: toggle expanded/collapsed
sideBarBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar_open");
});

// Mobile: toggle sidebar visible/hidden
hamburgerBtn.addEventListener("click", () => {
  sideBar.classList.toggle("sidebar_open");
});

function handleDeviceScreen(e) {
  if (e.matches) {
    // Mobile: hide sidebar by default, show hamburger
    sideBar.classList.remove("sidebar_open");
    hamburgerBtn.style.display = "flex";
    sideBarBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
    topNav.style.display = "block";
  } else {
    // Desktop: show sidebar collapsed, hide hamburger
    sideBar.classList.remove("sidebar_open");
    hamburgerBtn.style.display = "none";
    sideBarBtn.innerHTML = '<i class="fa-solid fa-angles-right"></i>';
    topNav.style.display = "none";
  }
}

handleDeviceScreen(mobileScreen);
mobileScreen.addEventListener("change", handleDeviceScreen);

// Active page sidebar-item
const sidebarItem = document.querySelectorAll(".sidebar-item");

sidebarItem.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
