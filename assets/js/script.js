$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // autoWidth: true,
    items: 2,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("pickle-sidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("pickle-sidenav").style.width = "0";
}