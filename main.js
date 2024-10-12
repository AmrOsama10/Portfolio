  new WOW().init();
  $(document).ready(function () {
    
    $(window).on("scroll", function () {
      var scrollPos = $(window).scrollTop() + 100; 

      $(".nav-link").each(function () {
        var section = $($(this).attr("href"));

        if (section.length) {
          var sectionTop = section.offset().top; 
          var sectionHeight = section.outerHeight(); 

          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
            $(".nav-link").removeClass("active"); 
            $(this).addClass("active"); 
          }
        }
      });
    });

    $(".nav-link").on("click", function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  });

