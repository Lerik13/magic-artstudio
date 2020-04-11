$(function(){

  $('.header__top-burger').click(function(event){
    //$('.header-menu__burger,.header-menu__menu').toggleClass('active');
    $('.header__top-burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__slider').slick({    
    infinite: true,    
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows--left header__slider-arrows--left" src="img/svg/arrow_slider-yellow.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows--right header__slider-arrows--right" src="img/svg/arrow_slider-yellow.svg" alt="">',
    dots: true,
    dotsClass: 'header__slider-dots',    
    //centerMode: true,
    //focusOnSelect: true
  });
  
  $('.services__slider').slick({    
    infinite: true,
    //fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows--left services__slider-arrows--left" src="img/svg/arrow-slider2-orange.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows--right services__slider-arrows--right" src="img/svg/arrow-slider2-orange.svg" alt="">',
    //dots: true,
    //dotsClass: 'header__slider-dots',
    //centerMode: true,
    //focusOnSelect: true
    useTransform: true,
 	  speed: 400,
 	  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    asNavFor: '.services__slider-nav',
    //adaptiveHeight: true,
  });

  $('.services__slider-nav').slick({
    infinite: true,
    arrows: false,
    prevArrow: '<img class="slider-arrows slider-arrows--left-small" src="img/svg/arrow_slider-yellow.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows--right-small" src="img/svg/arrow_slider-yellow.svg" alt="">',
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true, 		
    centerMode: false,
    asNavFor: '.services__slider',
    //centerPadding: '60px',

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          arrows: false,
          centerMode: true,          
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1160,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]    
    //draggable: true,
  });

  $('.reviews__slider-video').slick({    
    infinite: true,
    //fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows--left reviews__slider-arrows--left" src="img/svg/arrow_slider-yellow.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows--right reviews__slider-arrows--right" src="img/svg/arrow_slider-yellow.svg" alt="">',    
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.popup__slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1031,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 736,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
   ]
  });
  $('.reviews__slider').slick({    
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows--left reviews__slider-arrows--left" src="img/svg/arrow_slider-pink.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows--right reviews__slider-arrows--right" src="img/svg/arrow_slider-pink.svg" alt="">',    
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.popup__slider').slick({    
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows--left popup__slider-arrows--left" src="img/svg/arrow_slider-white.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows--right popup__slider-arrows--right" src="img/svg/arrow_slider-white.svg" alt="">',    
    slidesToShow: 1,
    slidesToScroll: 1,
    //adaptiveHeight: true,
    asNavFor: '.reviews__slider-video',
  });

  $('#popup__close-btn').click(function(event){
    $('#popup__video-bs').get(0).pause();
    $('#popup__video-bs').get(0).currentTime = 0;
  });
  $('#popup__close-review-btn').click(function(event){
    pause_all_reviews_video();
  });
  function pause_all_reviews_video(){
    $.each( $('.popup__video-review'), function(index, element) {
      $('#'+$(element).attr('id')).get(0).pause();
      $('#'+$(element).attr('id')).get(0).currentTime = 0;
    });        

  }

  //new WOW().init();
});