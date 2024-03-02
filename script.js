// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function sendwhatsapp() {
        var phonenumber = "+6288973629895"; 

        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var projectName = document.querySelector("#projectName").value;
        var projectDescription = document.querySelector("#projectDescription").value;

        // Validasi input
        if (!name || !email || !projectName || !projectDescription) {
            alert("Please fill in the existing columns!!");
            return;
        }

        // Clearing input fields
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#projectName").value = "";
        document.querySelector("#projectDescription").value = "";

        var url = "https://wa.me/" + phonenumber + "?text=" +
            "*Name:* " + name + "%0a" +
            "*Email:* " + email + "%0a" +
            "%0a%0a" +
            "*Name Project:* " + projectName + "%0a" +
            "*Project Description:* " + projectDescription +
            "%0a%0a" +
            "@new.customer";

        window.open(url, '_blank').focus();
    }