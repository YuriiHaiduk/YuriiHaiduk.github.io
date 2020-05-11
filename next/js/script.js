
$('.go-to').on( 'click', function(){
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }
    return false;
});


let menu_button = document.querySelector('.menu-button-container');
let menu = document.querySelector('.mobile-menu');
let close = document.querySelector('.close-btn-container');


close.onclick = function () {
        menu.classList.remove('mobile-menu--active');
        menu_button.classList.remove('menu-button-container--active');
}


menu_button.onclick = function () {
    if(menu.classList.contains('mobile-menu--active')){
        menu.classList.remove('mobile-menu--active');
        menu_button.classList.remove('menu-button-container--active');
    }else{
        menu.classList.add('mobile-menu--active');
        menu_button.classList.add('menu-button-container--active');
    }
}