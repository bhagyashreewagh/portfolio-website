/*!
 * Custom Portfolio JS
 * Smooth scrolling, responsive menu collapse, and navbar shrinking
 */

(function ($) {
    "use strict"; // Start of use strict

    // Smooth Scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        // Check if the current link points to the same page
        if (
            location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            var target = $(this.hash); // Target section
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

            if (target.length) {
                // Animate smooth scrolling
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72, // Adjust offset
                    },
                    800, // Duration in milliseconds
                    "easeInOutExpo" // Smooth easing effect
                );
                return false;
            }
        }
    });

    // Close responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav", // Navbar ID
        offset: 74, // Adjust offset for active section
    });

    // Navbar shrink on scroll
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass(
