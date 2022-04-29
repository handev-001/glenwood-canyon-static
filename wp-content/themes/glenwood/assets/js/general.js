var $ = jQuery.noConflict();
$(document).ready(function () {
	// custom menu toggle
	$(".menu-main-menu-container").append("<span class='menu-close'><span></span><span></span></span>");
	$(".menu-btn").click(function (e) {
		$("body").toggleClass("menu-open");
		e.preventDefault();
	});
	$(".menu-close").click(function () {
		$(".menu-btn").trigger("click");
	});
	$(".fix-menu-bg").click(function () {
		$(".menu-btn").trigger("click");
	});
	// home banner slider
	/*$('.home-banner-slider').slick({
		infinite: true
		, slidesToShow: 1
		, slidesToScroll: 1
		, dots: false
		, arrows: true
		, speed: 500
		, autoplay: true
		,autoplaySpeed: 5000
		, fade: true
		, cssEase: 'linear',
		responsive: [
    {
      breakpoint: 991,
      settings: {
     arrows: false
      }
    }
			]
	});*/

		// single image slider
	$('.single-img-slider').slick({
		infinite: true
		, slidesToShow: 1
		, slidesToScroll: 1
		, dots: false
		, arrows: true
		, speed: 500
		, autoplay: true
		,autoplaySpeed: 3000

	});

		$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
				fixedContentPos: true,
		fixedBgPos: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 200, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});

	//package popup

		$('.detail-popup-btn').magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: false,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom popup-package-detail'
	});


	  $('.package-col').each(function() {
    $(this).find('.toggle-package').on('click', function(e) {
      $(this).closest('.package-col').find('.more-package-detail').slideToggle();
		$(this).toggleClass('active');
		e.preventDefault();
    });
  });

	 if( $(".menu-btn").css('display').toLowerCase() == 'block') {
        $('.header-cta').insertBefore("#top-menu");
    }
    else{
        $('.header-cta').insertAfter(".header-call");
    }


	$(window).resize(function(){
    if( $(".menu-btn").css('display').toLowerCase() == 'block') {
        $('.header-cta').insertBefore("#top-menu");
    }
    else{
        $('.header-cta').insertAfter(".header-call");
    }
});


	// sticky header

  stickyHeader();



    $(".navselect").on('change',function(){
        var datalink = $('option:selected', this).attr('data-link');
        window.location.href = datalink;
    });

});

$(window).load(function () {
    stickyHeader();
	var nh = $("header").outerHeight();
  	$("body").css('padding-top', nh + 'px');

});

$(window).scroll(function () {
    stickyHeader();
});
$(window).resize(function () {
    stickyHeader();
    var nh = $("header").outerHeight();
  	$("body").css('padding-top', nh + 'px');
});

lastScroll = 0;
var offset = $('.site-header').outerHeight();
var navHeight = $("header").outerHeight();
function stickyHeader() {
    if ($(window).scrollTop() > 118 ) {
        $("body").addClass("headerFix");
    } else {
        $("body").removeClass("headerFix");
    }
    var scroll = $(window).scrollTop();
    if(lastScroll - scroll > 0) {
        $("body").addClass("stickyHeader");
    } else {
        $("body").removeClass("stickyHeader");
    }
    lastScroll = scroll;
};
