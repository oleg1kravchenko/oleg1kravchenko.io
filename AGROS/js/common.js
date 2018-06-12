$(document).ready(function() {

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 16,
                    scrollwheel: false,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(51.739624, 36.187591), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.

                };


                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);




                var marker = new google.maps.Marker({
                	draggable: true,
                	raiseOnDrag: false,
                	map: map,
                	position:new google.maps.LatLng(51.739624, 36.187591)
                });
            }

//прилипающие меню
	var $menu = $("#menu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 600 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 600 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });


$('.bx_slider').bxSlider({
	controls: false,
	mode: 'fade'
});
$('.slider_review').bxSlider({
	controls: false
});

	jQuery(function($){
	$(".phone_input").mask("+ 7 (999) 999-99-99");
});

	 $('.slider_about').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        centerMode: true,
        variableWidth: true,
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

	//кнопка sandwich
	 $(" .btn_nav").click(function() {
  	$(".btn_nav .sandwich").toggleClass("active");
  });
  		$(".mobile_list li a").click(function() {
	
		$(".sandwich").toggleClass("active");
		});
	$(".btn_nav").click(function() {
  		if ($(".mobile_list").is(":hidden")) {
  			$(".mobile_list").fadeIn(600);
  		} else {
  			$(".mobile_list").fadeOut(600);
  		}
			$(".mobile_list li a").click(function() {
				$(".mobile_list").fadeOut(600);
				$(".sandwich").removeClass("active");
			});
});

	//слайдер

	 $('.slider').slick({
    infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
  });

	 $( ".wrap_addative" ).mouseout(function() {
	 
  $( this ).parent().removeClass("active");
});
	 $( ".wrap_addative" ).mouseover(function() {
	 	  $( ".additive_item" ).removeClass("active");
  $( this ).parent().addClass("active");
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
	$(".fancybox").fancybox();


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
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});