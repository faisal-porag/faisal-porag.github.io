
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // NAV SCROLL STYLE
    var $mainNav = $('#mainNav');
    function toggleNavScrolled() {
      $mainNav.toggleClass('is-scrolled', $(window).scrollTop() > 40);
    }
    toggleNavScrolled();
    $(window).on('scroll', toggleNavScrolled);

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      once: true,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });


    

