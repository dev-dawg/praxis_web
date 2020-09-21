//Navbar transparent to solid effect =================
  // $(window).scroll(function() {
  //   if ($(".navbar").offset().top > 50) {
  //       $(".navbar-inverse").css("background-color", "rgb(31, 63, 84)").css("border-color", "rgb(31, 63, 84)");
  //       $("#nav-scroll").css("border-bottom", "none");
  //   } else {
  //       $(".navbar-inverse").css("background-color", "transparent");
  //       $("#nav-scroll").css("border-bottom", "1px solid rgba(255,255,255, 0.5)");
  //   }
  // });


//Navbar transparent to solid effect only when screensize > 768 px ==
// $( window ).resize(function() {
  var windowWidth = $(window).width();
  if (windowWidth < 767) {
    $(".navbar-inverse").css("background-color", "rgb(31, 63, 84)").css("border-color", "rgb(31, 63, 84)");
    console.log("huray");
   } else {
    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-inverse").css("background-color", "rgb(31, 63, 84)").css("border-color", "rgb(31, 63, 84)");
          $("#nav-scroll").css("border-bottom", "none");
      } else {
          $(".navbar-inverse").css("background-color", "transparent");
          $("#nav-scroll").css("border-bottom", "1px solid rgba(255,255,255, 0.5)");
      }
    });
  }
// });
//Document ready function=====================
$(document).ready(function(){
//Smooth scroll function======================
  var $root = $('html, body');
  //
  $('.navbar-nav a, .navbar-brand a, .page-scroll a').click(function() {
    var href = $.attr(this, 'href');

    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }

    return false;
  });
  //Overlay hover function
  $('.portfolio-img-container').mouseenter(function(){
    $('.project-des', this).slideDown(200).css("display", "flex");
    console.log(this);
  }).mouseleave(function(){
    $('.project-des', this).slideUp(200);
  });

});//end of document ready function
