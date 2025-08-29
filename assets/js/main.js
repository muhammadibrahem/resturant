window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
        document.querySelector(".header").classList.add("header-bg");
    }
    else {
        document.querySelector(".header").classList.remove("header-bg");
    }
});
// tabs
function tabs(tabsSelector) {
    const tabsContainer = document.querySelector(tabsSelector);
    const tabsList = tabsContainer.querySelector(".tabs-list");

    tabsList.addEventListener("click", (event) => {
        const clickedTab = event.target.closest(".tabs-btn");
        if (!clickedTab || clickedTab.classList.contains("active")) {
            return;
        }
        switchtab(clickedTab);
    });
    function switchtab(clickedTab) {
        const activeTab = tabsContainer.querySelector(".tabs-btn.active");
        const activePanel = tabsContainer.querySelector(".tabs-panel.active");
        activeTab.classList.remove("active")
        activePanel.classList.remove("active");
        clickedTab.classList.add("active");
        const target = clickedTab.getAttribute("data-target");
        tabsContainer.querySelector(target).classList.add("active");

    }
}
tabs(".rest-menu-tabs")

// testimonial slider
const testimonialsSlider = new Swiper('.testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: '.testimonials-pagination',
        clickable: true,
    }
});
// mobile  menu
const menuBtn = document.querySelector(".header .menubtn");
const menu = document.querySelector(".header .menu");
const menuLinks = menu.querySelectorAll("a");

function toggleMenu() {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("open");
}

menuBtn.addEventListener("click", toggleMenu);

function menuLinkAction() {
    if (window.innerWidth <= 991 && menu.classList.contains("open")) {
        toggleMenu();
    }

}
menuLinks.forEach((a) => {
    a.addEventListener("link", menuLinkAction)
});

window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("loaded");
    preloader.addEventListener("transitioned", function () {
        this.style.display = "none";
    })
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        pnce: true,
        delay: 400,
    })
})