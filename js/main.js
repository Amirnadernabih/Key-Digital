// Function to change navbar background and logo on scroll
/*
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.nav-link'); // Use querySelectorAll
    var originalLogo = document.getElementById('originalLogo');
    var scrolled = window.scrollY;

    // Check if the user has scrolled more than 500px
    if (scrolled > 150) {
        navbar.style.backgroundColor = "#FFF";
        navbar.style.marginTop = "0";
        navbar.style.boxShadow = "0px 30px 50px rgba(0, 0, 0, 0.05)";
        navbar.style.minHeight = "60px";

        // Change the color of nav-links
        navLinks.forEach(function(link) {
            link.style.color = '#111111';
        });

        // Change the logo source to your new logo
        originalLogo.src = '../imgs/logo-dark.png';

    } else {
        // Revert to the original styles
        navbar.style.backgroundColor = 'transparent';
        originalLogo.src = '../imgs/logo.png';
        navbar.style.marginTop = "12px";
        navbar.style.boxShadow = "none";
        navLinks.forEach(function(link) {
            link.style.color = '#FFF';
        });
    }
};
*/