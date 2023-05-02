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

     // 프로모션 플로팅 버튼
    function goToPromo(){
        let evtSecTp = $('#wizWrp .evtCnts').offset().top; // 이벤트 섹션 상단
        console.log('11',evtSecTp);

        $('#wizWrp #aside .a_apply a.t2').click(function() {
            $('html, body').stop().animate({
                scrollTop: evtSecTp
            }, 500);
        });
    }
    goToPromo();

    // 탑 버튼
	$('#wizWrp #aside .tpBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


    /* 비디오 컨트롤 */
	// 첫 번째 비디오
    $("#vdoCtrlPly").click(function(){
        $(this).addClass("on");
        $("#vdoCtrlPlyTrg")[0].play();
        $('#wizWrp .vertiVideo .vdThm01 > img').css('z-index', '-3');
    });
    $("#vdoCtrlPlyTrg").on("ended",function(){
        $("#vdoCtrlPly").removeClass("on");
        $("#vdoCtrlPlyTrg")[0].currentTime = 0;
        $('#wizWrp .vertiVideo .vdThm01 > img').css('z-index', '1');
    });
    // 두 번째 비디오
    $('#vdoCtrlPly02').click(function() {
        $(this).hide();
        $('#vdoCtrlPlyTrg02')[0].play();
        $('#wizWrp .ecoFriendVideo .vdThm02 > img').css('z-index', '-3');
    });
    $('#vdoCtrlPlyTrg02').on('ended', function(){
        $('#vdoCtrlPly02').show();
        $('#vdoCtrlPlyTrg02')[0].currentTime = 0;
        $('#wizWrp .ecoFriendVideo .vdThm02 > img').css('z-index', '1');
    });


    $(window).scroll(function() {

        // 첫 번째 섹션 상단에 닿으면 오른쪽 로고 변경
        if( $(window).scrollTop() >= $('#wizWrp .wizSimple').offset().top) {
            $('#wizWrp #header .h_wrap .h_slogan').addClass('on');
        } else {
            $('#wizWrp #header .h_wrap .h_slogan').removeClass('on');
        }

        // 스크롤 시 프로모션 버튼 크기 작게
        if($(window).scrollTop() > 0) {
            $('#wizWrp #aside').addClass('on');
        } else {
            $('#wizWrp #aside').removeClass('on');
        }

    });

    $( window ).resize(function() {
		AOS.refresh();
		setTimeout("AOS.refresh()", 1000);
		/* 높이 계산 */
		//calHeight();
        goToPromo();
	});



});
