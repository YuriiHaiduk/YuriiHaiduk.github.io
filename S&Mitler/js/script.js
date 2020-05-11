$(document).ready(function() {
    $('#my-menu').mmenu({
        extensions:['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right' ],
        navbar: {
            title: '<img src="img/logo.svg" alt="logo">'
        },
        // offCanvas: {
        //     position: 'right'
        // },
    });

    //hamburger
    let api = $('#my-menu').data('mmenu');
    api.bind('open:finish',function () {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish',function () {
        $('.hamburger').removeClass('is-active');
    });



    const initializedCarousel = new Promise(function(resolve, reject) {
        $('.services-carousel').on('initialized.owl.carousel');
        resolve();
    });
    initializedCarousel.then(function () {
        carouselService();
    })

    $('.services-carousel').owlCarousel({
        // loop:true,
        nav:true,
        dots:false,
        smartSpeed:700,
        navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            }

        }
    });


//    height sliders
        let masEl = document.getElementsByClassName('services-carousel__content');
        masEl = Array.from(masEl);
        let masHeight = [];
        let max;
        function equalHeight() {
            for (var i = 0; i < masEl.length; i++) {
                masEl[i].style.height ='auto';
                masHeight.push(masEl[i]);
                max = Math.max(masHeight[i].offsetHeight);
            }
            for (var k = 0; k < masEl.length; k++) {
                masEl[k].style.height = max + 'px';
                // masEl[k].style.padding = 35 + 'px';
            }
        }
        equalHeight();
        window.onresize = equalHeight;

//    photo height how slider item
    function carouselService() {
        $('.services-carousel__item').each(function () {
            let ths = $(this);
            let thish = ths.find('.services-carousel__content').outerHeight();
            ths.find('.services-carousel__image').css('min-height',thish);
        });
    };
    carouselService()

//auto slider height on resize
    $( window ).resize(function() {
        equalHeight();
        window.onresize = equalHeight;
        carouselService()
    });


//    add span in h3
    $('.services-carousel__content .services-carousel__title').each(function () {
        let ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/,'<span>$1</span>'));
    });

    $('.section .section-title').each(function () {
        let ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/,'<span>$1</span>'));
    });


//    mail
//     $(document).ready(function() {
//
//         //E-mail Ajax Send
//         $("form.callback").submit(function() { //Change
//             var th = $(this);
//             $.ajax({
//                 type: "POST",
//                 url: "/mail.php", //Change
//                 data: th.serialize()
//             }).done(function() {
//                 $(th).find('.success').addClass('active').css('display','flex').hide().fadeIn();
//                 alert("Thank you!");
//                 setTimeout(function() {
//                     // Done Functions
//                     th.trigger("reset");
//                 }, 1000);
//             });
//             return false;
//         });
//
//     });

    $("form.callback").submit(function() {
        $(this).find('.success').addClass('active').css('display','flex').hide().fadeIn();
        setTimeout(function() {
            // Done Functions
            $('.success').removeClass('active').fadeOut();
            $("form.callback").trigger("reset");
        }, 2300);
        return false;
    });



//    selectize
    $('select').selectize({
        create:true,
    });

//    reviews carousel
    $('.testimonials').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        smartSpeed:700,
        // responsiveClass: true,
        items:1,
        autoHeight:true,

    });

//    partners carousel
    $('.partners-slider').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        smartSpeed:700,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        // responsiveClass: true,
        // autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            },
            1100:{
                items:4
            }

        }

    });

//    to top button
    $(window).scroll(function () {
        if($(this).scrollTop() > $(this).height()){
            $('.to-top').addClass('active');
        }
        else if($(this).scrollTop() <= $(this).height()){
            $('.to-top').removeClass('active');
        }
    });
    $('.to-top').click(function () {
        $('html,body').stop().animate({
            scrollTop:0},
            'slow',
            'swing'
        );
    });


//    preloader
$(window).on('load',function () {
    $('.preloader').delay(1000).fadeOut('slow');
});

});

