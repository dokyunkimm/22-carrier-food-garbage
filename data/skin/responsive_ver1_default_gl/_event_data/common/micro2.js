/* 제작사 : D.LOFT - http://www.dloft.net/ */
/* 작성자 : 신범선 - sbs7195@dloft.net */
/* 작성일 : 2021.06.03 */
var newJquery = $.noConflict(true);
var Cheight = $(window).height();

$('.height').css({'height':Cheight+'px'});
$('.height').css({'min-height':Cheight+'px'});

$(function(){
	/* AOS초기화  */
	AOS.init({
	  // Global settings:
	  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 180, // offset (in px) from the original trigger point
	  delay: 0, // values from 0 to 3000, with step 50ms
	  duration: 400, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: false, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
	setTimeout("AOS.refresh()", 1000);

	$( window ).resize(function() {
		AOS.refresh();
		setTimeout("AOS.refresh()", 1000);
		/* 높이 계산 */
		calHeight();
	});

	window.onload = function () {
		/* 높이 계산 */
		calHeight();
	}

	$(window).scroll(function() {
	});

	/* 높이 계산 */
	function calHeight(){
		Cheight = $(window).height();
		$('.height').css({'height':Cheight+'px'});
		$('.height').css({'min-height':Cheight+'px'});
	}

	var owl = newJquery('.cp_slide');
	owl.owlCarousel({
		items: 2,
		loop: true,
		nav: true,
		video:true,
		callbacks: true,
		URLhashListener:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
		startPosition: 'URLHash',
		responsive:{
			1024:{
				items:1
			},
			1025:{
				items: 2,
			}
		}
	});

	/* 비디오 컨트롤 */
	$('.cp_video .cp_thumb').click(function(){
		var video = $('#cp_video');
		if($('.c_pictorial .cp_video').hasClass("play") === true) {
			video.get(0).pause();
			$('.c_pictorial .cp_video').removeClass('play');
		}else{
			video.get(0).play();
			$('.c_pictorial .cp_video').addClass('play');
		}
	});
	$('.cp_video2 .cp_thumb2').click(function(){
		var video = $('#cp_video2');
		if($('.c_pictorial .cp_video2').hasClass("play") === true) {
			video.get(0).pause();
			$('.c_pictorial .cp_video2').removeClass('play');
		}else{
			video.get(0).play();
			$('.c_pictorial .cp_video2').addClass('play');
		}
	});
});

