$(function () {

	document.documentElement.classList.remove("no-js");

	$('.header__top-burger').click(function (event) {
		$('.header__top-burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	if ($('.parallax__list') && ($('.parallax__list').length > 0)) {
		$('.parallax__list>li').addClass('layer');
		let scene = $('.parallax__list').get(0);
		let parallaxInstance = new Parallax(scene);
	}

	$('.wrapper').addClass('active');

	$('.services__slider').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows--left services__slider-arrows--left" src="img/svg/arrow-slider2-orange.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right services__slider-arrows--right" src="img/svg/arrow-slider2-orange.svg" alt="">',
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		asNavFor: '.services__slider-nav',
		//adaptiveHeight: true,
	});

	$('.services__slider-nav').slick({
		arrows: false,
		prevArrow: '<img class="slider-arrows slider-arrows--left-small" src="img/svg/arrow_slider-yellow.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right-small" src="img/svg/arrow_slider-yellow.svg" alt="">',
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		centerMode: false,
		asNavFor: '.services__slider',

		responsive: [{
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
	});

	$('.reviews__slider-video').slick({
		//fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows--left reviews__slider-arrows--left" src="img/svg/arrow_slider-yellow.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right reviews__slider-arrows--right" src="img/svg/arrow_slider-yellow.svg" alt="">',
		slidesToShow: 3,
		slidesToScroll: 3,
		asNavFor: '.popup__slider',
		focusOnSelect: true,
		responsive: [{
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
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows--left reviews__slider-arrows--left reviews__slider-arrows--main" src="img/svg/arrow_slider-pink.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right reviews__slider-arrows--right reviews__slider-arrows--main" src="img/svg/arrow_slider-pink.svg" alt="">',
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	$('.popup__slider').slick({
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows--left popup__slider-arrows--left slider-popup" src="img/svg/arrow_slider-white.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right popup__slider-arrows--right slider-popup" src="img/svg/arrow_slider-white.svg" alt="">',
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		asNavFor: '.reviews__slider-video',
	});

	$('.gallery__slider').slick({
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 1,
		speed: 500,
		variableWidth: false,
		prevArrow: '<img class="slider-arrows slider-arrows--left gallery__slider-arrows--left" src="img/svg/arrow-slider2-orange.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right gallery__slider-arrows--right" src="img/svg/arrow-slider2-orange.svg" alt="">',
		dots: true,
		dotsClass: 'gallery__slider-dots',
		responsive: [{
				breakpoint: 1025,
				settings: {
					centerPadding: '12%',
				}
			},
			{
				breakpoint: 824,
				settings: {
					centerPadding: '10px',
				}
			},
		],
	});
	// ----------------------------------------
	$('.photos__slider').slick({
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		asNavFor: '.photos__slider-nav',
		draggable: false,
	});

	$('.photos__slider-nav').slick({
		arrows: false,
		prevArrow: '<img class="slider-arrows slider-arrows--left-small" src="img/svg/arrow_slider-yellow.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows--right-small" src="img/svg/arrow_slider-yellow.svg" alt="">',
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		centerMode: false,
		asNavFor: '.photos__slider',
		responsive: [{
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
	});

	$('#popup__close-btn').click(function (event) {
		//$('#popup-video').toggleClass('active');
		$('#popup__video-bs').get(0).pause();
		//$('#popup__video-bs').get(0).currentTime = 0;
	});

	$('#popup__close-review-btn').click(function (event) {
		pause_all_reviews_video();
	});
	$('.slider-popup').click(function (e) {
		pause_all_reviews_video();
	});
	$('.popup').click(function (event) {
		//console.log("close");
		//pause_all_reviews_video();
		//$('#popup__close-review-btn').click();
	});

	function pause_all_reviews_video() {
		$.each($('.popup__video-review'), function (index, element) {
			$('#' + $(element).attr('id')).get(0).pause();
			//$('#' + $(element).attr('id')).get(0).currentTime = 0;
		});

	}

	$('.faq__question').click(function (event) {
		event.preventDefault();
		$(this).next($('.faq__answer')).slideToggle('slow');
		$(this).toggleClass('faq__question--active');
		$(this).next($('.faq__answer')).toggleClass('faq__answer--visible');
	});


	/* --- Scrooling - nav menu --------------------------------------------------------- */
	$("body").on('click', '[href*="#a-"]', function (e) {
		$('.header__top-burger,.menu').removeClass('active');
		$('body').removeClass('lock');
		var fixed_offset = -120;
		$('html,body').stop().animate({
			scrollTop: $(this.hash).offset().top - fixed_offset
		}, 1000);
		e.preventDefault();
	});

	$('#book-package-1').click(function () {
		$('#contact__add-info').val("package 1 - Bubble Show");
	});
	$('#book-package-2').click(function () {
		$('#contact__add-info').val("package 2 - Double Fun (Bubble Show + Balloon Twisting)");
	});
	$('#book-package-3').click(function () {
		$('#contact__add-info').val("package 3 - Super Fun (Bubble Show + Balloon Twisting + Surprise Balloon)");
	});

	/* --- btn UP ------------------------------------------------------------ */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if ($('#btnUp').is(':hidden')) {
				$('#btnUp').css({
					opacity: 1
				}).fadeIn('slow');
			}
		} else {
			$('#btnUp').stop(true, false).fadeOut('fast');
		}
	});

	$('#btnUp').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, "slow");
	});


	$('.policies__link').click(function (event) {
		event.preventDefault();
		$(this).next($('.policies__text')).slideToggle('slow');
		$(this).toggleClass('policies__link--active');
		$(this).next($('.policies__text')).toggleClass('policies__text--visible');
	});

	/* --- Additional services - checkboxs ------------------------------------ */
	$('#check-bt').click(function () {
		$('#check-bt').is(":checked") ? $('#check-bt-form').prop('checked', true) : $('#check-bt-form').prop('checked', false);
	});
	$('#check-sb').click(function () {
		$('#check-sb').is(":checked") ? $('#check-sb-form').prop('checked', true) : $('#check-sb-form').prop('checked', false);
	});
	$('#check-fp').click(function () {
		$('#check-fp').is(":checked") ? $('#check-fp-form').prop('checked', true) : $('#check-fp-form').prop('checked', false);
	});
	$('#check-bm').click(function () {
		$('#check-bm').is(":checked") ? $('#check-bm-form').prop('checked', true) : $('#check-bm-form').prop('checked', false);
	});

	// --- Bonus - change radio button ---------------
	if ($('#service-bonus__img')) {
		if (Modernizr.webp) {
			$('#service-bonus__img').attr('src', "img/costumes/01.webp");
		} else {
			$('#service-bonus__img').attr('src', "img/costumes/01.jpg");
		}
	}
	$("input:radio[name=radio-costume]").click(function () {
		if (Modernizr.webp) {
			$('#service-bonus__img').attr('src', "img/costumes/" + $(this).val() + ".webp");
			console.log($(this).val() + ".webp");
		} else {
			$('#service-bonus__img').attr('src', "img/costumes/" + $(this).val() + ".jpg");
			console.log($(this).val() + ".jpg");
		}
		//$('#service-bonus__img').attr('src', "img/costumes/" + $(this).val() + ".jpg");
	});	
	$('input:radio[name=radio-costume][value=01]').click();

	new WOW().init();
});
