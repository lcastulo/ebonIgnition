const dropdownBtns = document.querySelectorAll(".dropdown-toggle");
const dropdowns = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");

document.querySelector(".nav-list").addEventListener("click", (e) => {
  dropdownBtns.forEach((btn) => {
    if (e.target !== btn) {
      btn.closest(".dropdown").classList.remove("show");
    } else if (e.target === btn) {
      btn.closest(".dropdown").classList.toggle("show");
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dropdown-toggle")) {
    dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));
  }
});

hamburgerBtn.addEventListener("click", () => {
  headerNav.classList.toggle("mobile-show");
});

window.addEventListener("resize", () => {
  if (headerNav.classList.contains("mobile-show") && window.matchMedia("(min-width: 1000px)").matches) {
    headerNav.classList.remove("mobile-show");
  }
});
