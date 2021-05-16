// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.c-links__container');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});


// Tab
var tabs = new Tabs({
    elem: "tabs",
    open: 1,
    activeClass: "js-tabs__title-active"
});

tabs.open(0);


// Modal
var modal = document.querySelector(".c-modal");
var trigger = document.querySelector(".js-trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);








