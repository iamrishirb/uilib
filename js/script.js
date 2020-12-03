var typed = new Typed('#slider', {
    strings: ["UI Components", "Website Templates", "UI Assets", "Design Resources", "Web Design Components"],
    typeSpeed: 80,
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