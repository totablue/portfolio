const UIHamburgerBar = document.querySelector(
    ".navbar .mobile-only .hamburger .bar"
);
const UIMobileNav = document.querySelector(".mobile-nav");
const UIBody = document.querySelector("body");
let showMenu = false;

UIHamburgerBar.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        UIHamburgerBar.classList.add("open");
        UIMobileNav.classList.add("open");
        UIBody.classList.add("blur");
    } else {
        UIHamburgerBar.classList.remove("open");
        UIMobileNav.classList.remove("open");
        UIBody.classList.remove("blur");
    }
    showMenu = !showMenu;
}
