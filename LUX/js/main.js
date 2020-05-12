$(document).ready(function(){

    const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sept", "oct", "nov", "dec"
    ];
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    $(".link-first-date").text(curr_date + " " + monthNames[curr_month] + " " + curr_year);
    $(".link-last-date").text(curr_date + " " + monthNames[curr_month] + " " + curr_year);


    var dateToday = new Date();
    $('.main-calendar-r').daterangepicker({
        "alwaysShowCalendars": true,
        minDate: dateToday,
        locale: {
            format: 'DD/MMM/YYYY'
        }
    }, function(end) {
        $(".calendar-popup").removeClass('open');
        let dtFull = $(".drp-selected").text();
        let dtarr = [];
        dtarr = dtFull.split("-", 3);
        var dtclearone = dtarr[0].split(' ').join('');
        var dtcleartwo = dtarr[1].split(' ').join('');
        var dtclearonefi = dtclearone.split('/').join(' ');
        var dtcleartwofi = dtcleartwo.split('/').join(' ');
        $(".link-first-date").text(dtclearonefi);
        $(".link-last-date").text(dtcleartwofi);
    });

    $(".first-page-background").addClass('current');

    $( ".gamburger" ).click(function() {
        $( "body" ).toggleClass('open_sidebar');
    });

    $( ".mobile-btn-dropdown" ).click(function() {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).parent().children('ul').slideDown();
            $(this).parent().children('ul').addClass('open-line');
        } else {
            $(this).parent().children('ul').slideUp();
            $(this).parent().children('ul').removeClass('open-line');
        }

    });




    $( ".sidebar_box_close" ).click(function() {
        $( "body" ).removeClass('open_sidebar');
        $( ".sidebar_submenu" ).removeClass('open');
    });

    $(document).mouseup(function (e){
        var div = $(".sidebar");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $( "body" ).removeClass('open_sidebar');
        }
    });

    let zindexmenu = 1;

    $( ".dropdown" ).hover(
        function() {
            zindexmenu += 1;
            let cont = 0;
            let i = 0;
            while (i < 1) {
                cont = cont + 1;
                let hasthisclass = 'submenu-hover-' + cont;
                if ($( this ).hasClass(hasthisclass)) {
                    console.log('true');
                    $( ".sidebar_submenu" ).addClass('open');
                    $( "#submenu"+cont ).css("z-index", zindexmenu);
                    i++;
                }
            }
        }
    );

    $( ".body_custom" ).hover(
        function() {
            $( ".sidebar_submenu" ).removeClass('open');
        }
    );

    $( ".social-fixed-block" ).hover(
        function() {
            $( ".social-fixed-block-hoverbtn" ).addClass('visible-sfbh');
        }, function() {
            $( ".social-fixed-block-hoverbtn" ).removeClass('visible-sfbh');
        }
    );

    $( ".social-fixed-block-hoverbtn" ).click(function() {
        $( ".social-fixed-block" ).toggleClass('closest');
    });



    $('nav ul li:not([class])').hover(
        function() {
            $( ".sidebar_submenu" ).removeClass('open');
        }
    );

    $('.flowing-scroll').on( 'click', function(){
        var el = $(this);
        var dest = el.attr('href');
        if(dest !== undefined && dest !== '') {
            $('html').animate({
                    scrollTop: $(dest).offset().top
                }, 1000
            );
        }
        return false;
    });

    $('.bth-scroll-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:0+"px"},{duration:1E3});
    });

    $('.calendar-link').on( 'click', function(){
        $(".calendar-popup").addClass('open');
        $(".main-calendar-r").click();
    });

    $('.calendar-popup, .applyBtn').on( 'click', function(){
        $(".calendar-popup").removeClass('open');
    });

    $('.main-calendar-wrapper').click(function (e) {
        e.stopPropagation();
    });

    var postion = $('#section2').offset().top,
        height = $('#section2').height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if(scroll  > postion) {
            $('body').addClass('top-button-open')
        } else {
            $('body').removeClass('top-button-open')
        }
    });


    var postion1 = $('.parallax-1').offset().top,
        height1 = $('.parallax-1').height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if( scroll > (postion1 - height1) ) {
            $('.parallax-1').addClass('parralax-scroll-active');
        }
    });

    var postion2 = $('.parallax-2').offset().top,
        height2 = $('.parallax-2').height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if( scroll > (postion2 - height2) ) {
            $('.parallax-2').addClass('parralax-scroll-active');
        }
    });

    var postion3 = $('.parallax-3').offset().top,
        height3 = $('.parallax-3').height();
    $(document).on('scroll', function (){
        var scroll = $(document).scrollTop();
        if( scroll > (postion3 - height3) ) {
            $('.parallax-3').addClass('parralax-scroll-active');
        }
    });





});


