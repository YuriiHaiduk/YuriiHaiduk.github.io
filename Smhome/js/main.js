console.log('2222');

// $( document ).ready(function() {
// 	$('.flexslider').flexslider({
// 		slideshow: true,
// 		startAt: 0,
// 		directionNav: true,
// 		controlNav: false,
// 		prevText: "Previous", //String: Тест для кнопки "previous" пункта directionNav
// nextText: "Next",  //String: Тест для кнопки "next" пункта directionNav
// 			animation: "slide",
//
// 			start: function(slider){
// 					$('body').removeClass('loading');
// 			}
// 	});
// });
$(window).load(function() {


	});
$(window).load(function() {
  // The slider being synced must be initialized first

	//
	// var minHeight = 0;
	//
	// $("#slider .slides li").each(function(){
	// if ( $(this).height() > minHeight )
	// {
	// 	minHeight = $(this).height();
	// }
	// });
	//
	// $(".goods-item-container").height(minHeight);
	//


	function setEqualHeight(selector) {
        var heights = new Array();

        $(selector).each(function() {

            $(this).css('min-height', '0');
            $(this).css('max-height', 'none');
            $(this).css('height', 'auto');

            heights.push($(this).height());
        });

        var max = Math.max.apply( Math, heights );
    $(selector).each(function() {
            $(this).css('height', max + 'px');
        });
    }


        setEqualHeight('#slider .slides li');

        $(window).resize(function() {

            setTimeout(function() {
                setEqualHeight('#slider .slides li');
            }, 120);
        });


					$('#carousel').flexslider({
				    animation: "slide",
				    controlNav: false,
				    animationLoop: false,
				    slideshow: false,
						maxItems: 2,
				    // itemWidth: 210,
				    // itemMargin: 5,
				    asNavFor: '#slider'
				  });
				  $('#slider').flexslider({
				    animation: "slide",
				    controlNav: false,
				    animationLoop: false,
				    slideshow: false,
						maxItems: 2,
						// controlNav: true,
directionNav: true,
				    sync: "#carousel"
				  });



});
