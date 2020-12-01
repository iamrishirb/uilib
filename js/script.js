var typed = new Typed('#slider', {
    strings: ["UI Assets", "UI Components", "Website Templates", "Design Resources", "Web Design Components"],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    cursorChar: '_',
    shuffle: true,
    smartBackspace: false,
    loop: true
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