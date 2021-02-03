$(function(){

    $('.menu__item-link, .logo').on('click', function (e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
          top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
      });

    $('.slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        pauseOnHover: true
    });

});



