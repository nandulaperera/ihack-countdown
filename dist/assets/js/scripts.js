/*
Author       : Hash Theme.
Template Name: Evanta - Responsive Event Landing Page
Version      : 1.0
*/
/*=============================================
Table Of Contents
================================================

01. PRELOADER JS
02. MENU JS
03. TIMER JS
04. SECTIONS BACKGROUNDS
05. TESTIMONIAL SLIDER JS
06. EVENT SLIDER JS
07. SPONSORS SLIDER JS
08. GOOGLE MAP
09. VENOBOX JS
10. WOW ANIMATION JS
11. SNOW FALL JS
 

Table Of Contents end
================================================
*/

var requiredTime;
var spaceCount=0;

(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* 01. PRELOADER JS */
		
		$(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });
		
	
        /* 02. MENU JS */
		
        $(window).on('scroll', function() {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        });
		
        $('a.js-scroll-trigger').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 48
            }, 1000);
            e.preventDefault();
        });
		
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 54
        });

		
        /* 03. TIMER JS */
		
        $('#clock').countdown('2019/10/25', function(event) {
            var $this = $(this).html(event.strftime('<h4>%M :<span>MIN</span></h4>' + '<h4>%S <span>SEC</span></h4>'));
        });
		
		document.getElementById("setTimer").onclick = function(){
			var time=document.getElementById("txtTime").value;
			requiredTime=time;
			if(time==""){
				alert("Please set a value for the timer");
				document.getElementById("txtTime").focus();
			}else{
				document.getElementById("timerSet").style.visibility="hidden";
				var currentTime=new Date();
				var newTime=new Date(currentTime.getTime()+parseInt(time)*60000);
				$('#clock').countdown(newTime, function(event) {
					var $this = $(this).html(event.strftime('<h4>%M :<span>MIN</span></h4>' + '<h4>%S <span>SEC</span></h4>'));
				});
				$('#clock').countdown("stop");
			}
			
		}
		
		document.body.onkeyup = function(e){
			if(e.keyCode == 32){
				++spaceCount;
				if(spaceCount%2==1){
					var time=document.getElementById("txtTime").value;
					var currentTime=new Date();
					var newTime=new Date(currentTime.getTime()+parseInt(time)*60000);
					$('#clock').countdown(newTime, function(event) {
						var $this = $(this).html(event.strftime('<h4>%M :<span>MIN</span></h4>' + '<h4>%S <span>SEC</span></h4>'));
					});
				}else{
					$('#clock').countdown("stop");
				}
			}else if(e.keyCode == 82){
				//$('#clock').countdown("remove");
				var time=document.getElementById("txtTime").value;
				console.log(time);
				var currentTime=new Date();
				var newTime=new Date(currentTime.getTime()+parseInt(time)*60000);
				$('#clock').countdown(newTime, function(event) {
					var $this = $(this).html(event.strftime('<h4>%M :<span>MIN</span></h4>' + '<h4>%S <span>SEC</span></h4>'));
				});
				$('#clock').countdown("stop");
				spaceCount=0;
			}
		}
		
		

		/* 04. SECTIONS BACKGROUNDS */

        var pageSection = $("section,div");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

		
        /* 05. HOME SLIDER JS */
		
		$('.home-slider').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: true,
            autoplay: false,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
		
        /* 05. TESTIMONIAL SLIDER JS */
		
		$('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplay: true,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });



        /* 06. EVENT SLIDER JS */
		
		$('.event-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplay: false,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* 07. SPONSORS SLIDER JS */
		
		$('.sponsors-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: false,
            autoplay: true,
			autoplayTimeout: 2500,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });



        /* 07. SPONSORS SLIDER JS */
		
		$('.message-slider').owlCarousel({
			loop:true,
			margin: 30,
			nav: false,
			autoplay: true,
			autoplayTimeout: 2300,
			dots: false,
			items:1,
			mouseDrag: true,
			animateIn: "fadeInDown",
			animateOut: "fadeOutDown"
        });





    });
		
		

    /* 09. VENOBOX JS */

    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title',
        titlePosition: 'bottom',
        spinner: 'wave'
    });

    /* 10. WOW ANIMATION JS */

    new WOW().init();
	/* 11. SNOW FALL JS */
	
	$('.home-static-2,.home-static-4,.valentine-snow').snowfall({
	  round: true,
	  flakeCount : 300,
	  maxSpeed : 5,
	  maxSize : 5
	});
	
})(jQuery);

