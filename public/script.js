const burger = document.querySelector("#burger");
const nav = document.querySelector("#navLinks");
const navlinks = document.querySelectorAll("#nav-link");

let menuOpen = false;


burger.addEventListener("click", () => {
  nav.classList.toggle("nav-menu");
  menuOpen = !menuOpen;
  console.log(menuOpen ? "menu open" : "menu closed");
});


navlinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800 && menuOpen) {
      nav.classList.toggle("nav-menu");
      menuOpen = false;
      console.log("link clicked, menu closed");
    }
  });
});
