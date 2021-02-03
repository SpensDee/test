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
    
    $('.video__icon').on('click', function() {
      $('.video__media')[0].controls = true;
      $('.video__media')[0].muted = false;
      $('.video__media')[0].volume = 1;
      $('.video__icon').addClass('disabled');
    });
});



