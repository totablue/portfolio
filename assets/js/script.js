const UIHamburgerBar = document.querySelector(
    ".navbar .mobile-only .hamburger .bar"
);
const UIMobileNav = document.querySelector(".mobile-nav");
const UIMain = document.querySelector("main");
const UIBody = document.querySelector("body");
const UINavLinks = document.querySelectorAll(".nav-link");
const UIHeader = document.querySelector("header");
let showMenu = false;

// UI Elements for Project Cards Animations
const projectsCard = document.querySelectorAll(".projects-card");
const infoBtn = document.querySelectorAll(".projects-card-info");
const flapCard = document.querySelectorAll(".projects-card-flap");
let showInfo = false;

UIHamburgerBar.addEventListener("click", toggleMenu);
window.addEventListener("scroll", addHeaderBg);

function toggleMenu() {
    if (!showMenu) {
        UIHamburgerBar.classList.add("open");
        UIMobileNav.classList.add("open");
        UIMain.classList.add("blur");
        UIBody.classList.add("blur");
    } else {
        UIHamburgerBar.classList.remove("open");
        UIMobileNav.classList.remove("open");
        UIMain.classList.remove("blur");
        UIBody.classList.remove("blur");
    }
    showMenu = !showMenu;
}

// Closes Mobile Menu when link is clicked
for (let i = 0; i < UINavLinks.length; i++) {
    UINavLinks[i].addEventListener("click", function () {
        UIHamburgerBar.classList.remove("open");
        UIMobileNav.classList.remove("open");
        UIMain.classList.remove("blur");
        UIBody.classList.remove("blur");
        showMenu = false;
    });
}

function addHeaderBg() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        UIHeader.style.background = "#1e293b";
        UIHeader.classList.add("box-shadow");
    } else {
        UIHeader.style.background = "transparent";
        UIHeader.classList.remove("box-shadow");
    }
}

// Toggle open / close on Project items
for (let j = 0; j < infoBtn.length; j++) {
    infoBtn[j].addEventListener("click", function () {
        if (!showInfo) {
            for (let k = 0; k < this.children.length; k++) {
                this.children[k].classList.add("open");
            }
            flapCard[j].classList.add("open");
            projectsCard[j].classList.add("open");
            showInfo = true;
        } else {
            for (let k = 0; k < this.children.length; k++) {
                this.children[k].classList.remove("open");
            }
            flapCard[j].classList.remove("open");
            projectsCard[j].classList.remove("open");
            showInfo = false;
        }
    });
}
