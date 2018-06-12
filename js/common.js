$(document).ready(function() {

//прилипающие меню
	var $menu = $("#menu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 600 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 600 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });

$('.autoheight').equalHeights();
	//плавный скролл
		$(".navigat li a").mPageScroll2id();

		//открыть по клике карту
		$(".open_map").click(function()
{
    var myDiv = document.getElementById('map');
    if(myDiv.style.display == 'none')
    {
        myDiv.style.display = 'block';
    }
    else
    {
        myDiv.style.display = 'none';
    }
    return false;
});

$(".name_faq").click(function() {
		if ($(this).siblings(".text_faq").is(":hidden")) {
			$(this).siblings(".text_faq").slideDown();
			$(this).addClass("active");
		} else {
			$(this).siblings(".text_faq").slideUp();
			$(this).removeClass("active");
		}
	});

	//кнопка sandwich
	 $(" .btn_nav").click(function() {
  	$(".btn_nav .sandwich").toggleClass("active");
  });
  		$(".navigation_list a").click(function() {
	
		$(".sandwich").toggleClass("active");
		});
	$(".btn_nav").click(function() {
  		if ($(".navigation_list").is(":hidden")) {
  			$(".navigation_list").fadeIn(600);
  		} else {
  			$(".navigation_list").fadeOut(600);
  		}
			$(".navigation_list a").click(function() {
				$(".navigation_list").fadeOut(600);
				$(".sandwich").removeClass("active");
			});
});


	//слайдер

	 $('.billbord_slider').slick({
	 	arrows: true,
    infinite: true,
  slidesToShow: 1,
  autoplay: true,
	autoplaySpeed: 4000,
  slidesToScroll: 1
  });

	  $('.slider_review').slick({
	 	arrows: true,
    infinite: true,
  slidesToShow: 3,
  autoplay: true,
	autoplaySpeed: 4000,
  slidesToScroll: 1,
  responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
  });


$('.slider_for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		dots: false,
		fade: true,
		draggable: true,
		asNavFor: '.slider_nav',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				
			}
		}
		]
	});
$('.slider_nav').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		asNavFor: '.slider_for',
		dots: false,
		centerMode: false,
		vertical: true,
		draggable: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				vertical: false,
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 480,
			settings: {
				vertical: false,
				slidesToShow: 4,
			}
		}
		]
	});

	 // стайлер для select
	 $('select').styler();

	 
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		fixed : false,
    autoCenter : true
	});


	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

});

$(window).load(function(){ 
	var fh = $('.main_footer').height(); 
	var wh = $(window).height(); 
	var сh = wh;
	$('.billbord_error').css('min-height', сh); 
});
