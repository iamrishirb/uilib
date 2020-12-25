var typed = new Typed('#slider', {
  strings: ["UI Components", "Website Templates", "UI Assets", "Design Resources", "UI Snippets"],
  typeSpeed: 100,
  backSpeed: 40,
  showCursor: true,
  loop: true,
  cursorChar: '_',
  backDelay: 1000
});

//mobile navigation
function openNav() {
document.getElementById("main-nav").style.width = "100%";
$("#floating-bg").addClass("displayNone");
}
/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("main-nav").style.width = "0";
$("#floating-bg").removeClass("displayNone");
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

ScrollReveal().reveal('.para');
ScrollReveal().reveal('.hero-message', { delay: 500 });
ScrollReveal().reveal('.head', { delay: 500 });
ScrollReveal().reveal('.lottiefile', { delay: 500 });
ScrollReveal().reveal('.section-head', { delay: 800 });
ScrollReveal().reveal('.section-text', { delay: 1200 });
ScrollReveal().reveal('#girl');
ScrollReveal().reveal('#girlshadow', { delay: 500 });


function detect_active(){
  // get active
  var get_active = $("#dp-slider .dp_item:first-child").data("class");
  $("#dp-dots li").removeClass("active");
  $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
}
$("#dp-next").click(function(){
  var total = $(".dp_item").length;
  $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });
  detect_active();

});

$("#dp-prev").click(function(){
  var total = $(".dp_item").length;
  $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });

  detect_active();
});

$("#dp-dots li").click(function(){
  $("#dp-dots li").removeClass("active");
  $(this).addClass("active");
  var get_slide = $(this).attr('data-class');
  console.log(get_slide);
  $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });
});


$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
  var get_slide = $(this).attr('data-class');
  console.log(get_slide);
  $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });

  detect_active();
var typed = new Typed('#slider', {
  strings: ["UI Components", "Website Templates", "UI Assets", "Design Resources", "UI Snippets"],
  typeSpeed: 100,
  backSpeed: 40,
  showCursor: true,
  loop: true,
  cursorChar: '_',
  backDelay: 1000
});

//mobile navigation
function openNav() {
document.getElementById("main-nav").style.width = "100%";
$("#floating-bg").addClass("displayNone");
}
/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("main-nav").style.width = "0";
$("#floating-bg").removeClass("displayNone");
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

ScrollReveal().reveal('.para');
ScrollReveal().reveal('.hero-message', { delay: 500 });
ScrollReveal().reveal('.head', { delay: 500 });
ScrollReveal().reveal('.lottiefile', { delay: 500 });
ScrollReveal().reveal('.section-head', { delay: 800 });
ScrollReveal().reveal('.section-text', { delay: 1200 });
ScrollReveal().reveal('#girl');
ScrollReveal().reveal('#girlshadow', { delay: 500 });


function detect_active(){
  // get active
  var get_active = $("#dp-slider .dp_item:first-child").data("class");
  $("#dp-dots li").removeClass("active");
  $("#dp-dots li[data-class="+ get_active +"]").addClass("active");
}
$("#dp-next").click(function(){
  var total = $(".dp_item").length;
  $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });
  detect_active();

});

$("#dp-prev").click(function(){
  var total = $(".dp_item").length;
  $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });

  detect_active();
});

$("#dp-dots li").click(function(){
  $("#dp-dots li").removeClass("active");
  $(this).addClass("active");
  var get_slide = $(this).attr('data-class');
  console.log(get_slide);
  $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });
});


$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function(){
  var get_slide = $(this).attr('data-class');
  console.log(get_slide);
  $("#dp-slider .dp_item[data-class=" + get_slide + "]").hide().prependTo("#dp-slider").fadeIn();
  $.each($('.dp_item'), function (index, dp_item) {
    $(dp_item).attr('data-position', index + 1);
  });

  detect_active();
});