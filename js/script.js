jQuery(document).ready(function($) {
	
	/*SLIDE BANNER*/
	
	$(".block-banner li:eq(0)").addClass("active").show();
	
	function slide () {
		if($(".active")
			.next()
			.size()){
			
			$(".active")
				.fadeOut()
				.removeClass("active")
				.next()
				.fadeIn()
				.addClass("active");
		}
		else {
			$(".active")
				.fadeOut()
				.removeClass("active");
		
			$(".block-banner li:eq(0)")
				.fadeIn()
				.addClass("active");
		}
	};

	setInterval(slide, 4000);

	/* BUTTONS SCROLLER */

	$(function scrollButtons() {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.menu').fadeIn();
			}
			else {
				$('.menu').fadeOut();
			}
		});

		$('.menu a').click(function () {
			$('body, html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		$('.btn-portfolio').click(function () {
			$('body, html').animate({
				scrollTop: $('.site-portfolio').offset().top
			}, 1000);
			return false;
		});

		$('.btn-sobre').click(function () {
			$('body, html').animate({
				scrollTop: $('.site-about').offset().top
			}, 1000);
			return false;
		});
	});

	/* SKILL BAR */
	$(function scrollSkills() {
		$('.scroll-button').click(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 671) {
					$('.percent').each(function(){
						$(this).find('.skillbar-bar').animate({
							width: $(this).attr('data-percent')
						}, 3000);
					});	
				}
			});
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 671) {
				$('.percent').each(function(){
					$(this).find('.skillbar-bar').animate({
						width: $(this).attr('data-percent')
					}, 3000);
				});	
			}
		});
	});

	/* LIGHTBOX */

	lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'resizeDuration':	700
   })
}); 
