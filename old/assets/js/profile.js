window.addEventListener('DOMContentLoaded', event => {

    //console.log("inside script");
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#side-nav-profile');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#side-nav-profile',
            offset: 74,
        });
    }
    ;

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
