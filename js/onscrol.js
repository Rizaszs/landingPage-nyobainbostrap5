window.onscroll = function () {scrollfunction() };

function scrollfunction() {
    let navbar = document.getElementById("navbar");
    if (document.body.scrollaTop > 20 || document.documentElement.scrollTop >20) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
}