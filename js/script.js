var typed = new Typed('#slider', {
    strings: ["UI Components", "Website Templates", "UI Assets", "Design Resources", "UI Snippets"],
    typeSpeed: 100,
    backSpeed: 40,
    showCursor: true,
    loop: true,
    cursorChar: '_',
    backDelay: 1000
});


function openNav() {
    document.getElementById("main-nav").style.width = "100%";
  }
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("main-nav").style.width = "0";
  }
  

// Menu-toggle button

$(document).ready(function() {
        $("#menu-icon").on("click", function() {
            $("#menu ul").toggleClass("showing");
        });
});

// Scrolling Effect

$(window).on("scroll", function() {
        if($(window).scrollTop()) {
            $('#navigation').addClass('black');
        }

        else {
            $('#navigation').removeClass('black');
        }
});

ScrollReveal().reveal('.lottiefile');
ScrollReveal().reveal('.section-head', { delay: 500 });
ScrollReveal().reveal('.section-text', { delay: 500 });