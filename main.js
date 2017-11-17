$(document).ready(function(){

  // - Step 1: Add the class "affix" to the nav element when the scroll distance reaches past 50 pixels.
  $(window).scroll(function (){
    // console.log($(window).scrollTop());

    if ($(window).scrollTop() > 50) {
     $('nav').addClass('active');
   } else {
      $('nav').removeClass('active');
    }
  });

  // - Step 2: When the navbar links are clicked, animate a page scroll down to that anchor.
  $("nav a").on("click", function(){

  var target = $(this).attr("href");

  var targetOffset = $(target).offset().top;
  console.log(targetOffset);
  $('html').animate({
    scrollTop: $(target).offset().top
  }, 1000);
});

  $("#learnMore").on("click", function(){

  var target = $(this).attr("href");

  var targetOffset = $(target).offset().top;
  console.log(targetOffset);
  $('html').animate({
    scrollTop: $(target).offset().top
  }, 1000);
  });
});
