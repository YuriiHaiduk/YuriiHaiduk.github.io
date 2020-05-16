$(document).ready(function() {

    function wResize() {
        $('.header').css('min-height', $(window).height());
    };
    wResize();
    $(window).resize(function () {
        wResize();
    });

//    top tabs
    $('.top-phone-in-wrapper .tab').click(function () {
        $('.top-phone-in-wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.top-phone-in-wrapper .tab-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    //    top tabs hero
    $('.top-hero__tabs .tab').click(function () {
        $('.top-hero__tabs .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.top-hero__tabs .tab-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

//    sparkle effectsin header
    $(".sparkle").sparkle({
        "count": 200, // Количество искр
        // "color": "rainbow",  Цвета искр. Можно использовать массив ["#ff0080","#ff0080","#FFF"]
        // "color":  ["#DE4A00","#AB000B","#DE4A00"],
        "color":  ["#de2a16","#ab4f1f","#de0700"],
        "minSize": 3, // Минимальный размер искры
        "maxSize": 5, // Максимальный размер искры
        "overlap": 0, // На сколько пикселей выходить за края объекта
        "direction": "both", // Направление движения (both, up, down)
        "speed": 1, // Скорость движения искр
        "fadeSpeed": 300 // Скорость исчезания/появления
    });

});

