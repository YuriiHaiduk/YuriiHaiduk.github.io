window.onload = function () {
    let mobileMenuBtn = document.querySelector(' .mobile-menu-button');
    let mobileMenu = document.querySelector(' .mobile-menu');
    let mobileMenuClose = document.querySelector(' .mobile-menu-close');
    mobileMenuBtn.onclick = function () {
        mobileMenu.classList.add('active');
        console.log('red');
    };
    mobileMenuClose.onclick = function () {
        mobileMenu.classList.remove('active');
    };

    if ($(".authorization-section-popup").length) {
        //    popup authorization
        let authButton = document.querySelectorAll('.account-btn');
        let overlay = document.querySelector('.overlay');
        let authPopup = document.querySelector('.authorization-section-popup');
        let authClose = document.querySelector('.popup-close-authorization');
        authButton.forEach(function (element,index) {
            element.onclick = function () {
                overlay.classList.add('active');
                authPopup.classList.add('active');
            };
        });

        authClose.onclick = function () {
            overlay.classList.remove('active');
            authPopup.classList.remove('active');
        };
    };

        //popup cart
    if ($(".cart-popup").length) {
        let cartPopupBtn = document.querySelectorAll('.cart-popup-btn');
        let overlay = document.querySelector('.overlay');
        let cartPopup = document.querySelector('.cart-popup');
        let cartClose = document.querySelector('.popup-close-cart');
        //    popup auth  for delete class
        let authPopup = document.querySelector('.authorization-section-popup')
        //
        cartPopupBtn.forEach(function (element,index) {
            element.onclick = function () {
                overlay.classList.add('active');
                cartPopup.classList.add('active');
            };
        });
        overlay.onclick = function () {
            overlay.classList.remove('active');
            cartPopup.classList.remove('active');
            //    popup auth delete class
            overlay.classList.remove('active');
            authPopup.classList.remove('active');
            //
        };
        cartClose.onclick = function () {
            overlay.classList.remove('active');
            cartPopup.classList.remove('active');
        };
    };


    //    mobile filter
    if ($(".sidebar-wrapper").length)  {
        let filterOpen = document.querySelector('.filter-button');
        let filterClose = document.querySelector('.sidebar-info__title');
        let overlay = document.querySelector('.overlay');
        let filterbar = document.querySelector('.sidebar-wrapper');
        //popup auth
        let authPopup = document.querySelector('.authorization-section-popup')
        //
        //popup cart
        let cartPopup = document.querySelector('.cart-popup');
        //

        filterOpen.onclick = function () {
            overlay.classList.add('active');
            filterbar.classList.add('active');
            document.querySelector('body').classList.add('no-scroll');
            document.querySelector('html').classList.add('no-scroll');
        };
        overlay.onclick = function () {
            overlay.classList.remove('active');
            filterbar.classList.remove('active');
            authPopup.classList.remove('active');
            cartPopup.classList.remove('active');
            document.querySelector('body').classList.remove('no-scroll');
            document.querySelector('html').classList.remove('no-scroll');
        };
        filterClose.onclick = function () {
            overlay.classList.remove('active');
            filterbar.classList.remove('active');
            document.querySelector('body').classList.remove('no-scroll');
            document.querySelector('html').classList.remove('no-scroll');
        };

    };


// cart-tabs
    if ($(".cart-tabs").length){
        // делаем здесь что-то

        let tar = document.getElementsByClassName('tab-h');
        tar = Array.from(tar);
        for (var i = 0; i < tar.length; i++) {
            tar[i].addEventListener('click',fTabs);
        }

        function fTabs(event) {
            for (var i = 0; i < tar.length; i++) {
                tar[i].classList.remove('active');
            }
            this.classList.add('active');
            let datatab = event.target.getAttribute('data-tab');
            let tabBody = document.getElementsByClassName('tab-b');
            for (var i = 0; i < tabBody.length; i++) {
                if (datatab == i) {
                    tabBody[i].style.display = 'block';
                }
                else{
                    tabBody[i].style.display = 'none';

                }
            }
        }
    };

//    cart popup btn   cart-popup-btn


//    owl carousel
    if ($(".goods-section").length) {
        $('.default-goods-section-slider .goods').owlCarousel({
            items: 7,
            loop: true,
            center: true,
            // margin:10,
            dots: false,
            nav: false,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            responsive: {
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                450: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 3,
                },
                1100: {
                    items: 4,
                },
                1400: {
                    items: 5,
                },
                1700: {
                    items: 7,
                }
            }
        });
    };
//owl carousel views goods
    $('.goods-section-views .goods').owlCarousel({
        items:4,
        loop:true,
        center:true,
        // margin:10,
        dots:false,
        nav:false,
        // URLhashListener:true,
        autoplayHoverPause:true,
        // startPosition: 'URLHash',
        responsive:{
            0 : {
                items:1,
            },
            // breakpoint from 480 up
            450 : {
                items:2,
            },
            // breakpoint from 768 up
            768 : {
                items:3,
            },
            1100 : {
                items:4,
            },
            1400 : {
                items:5,
            },
            1700 : {
                items:5,
            }
        }
    });
//    related products
    $('.goods-section.related-goods .goods').owlCarousel({
        items:4,
        loop:true,
        center:true,
        // margin:10,
        dots:false,
        nav:false,
        // URLhashListener:true,
        autoplayHoverPause:true,
        // startPosition: 'URLHash',
        responsive:{
            0 : {
                items:1,
            },
            // breakpoint from 480 up
            450 : {
                items:2,
            },
            // breakpoint from 768 up
            768 : {
                items:3,
            },
            992 : {
                items:2,
            },
            1200 : {
                items:3,
            },
            1600 : {
                items:4,
            }
        }
    });


// main menu mobile
let mainMobileMenuBtn = document.querySelector('.mobile-main-menu-btn');
let mainMobileMenu = document.querySelector('.mobile-main-menu');

let mobileMenu1item = document.querySelectorAll('.mobile-main-menu-list li');
let mobileMenu1iList = document.querySelector('.mobile-main-menu-list');
let goMainMenu = document.querySelector('.go-main-menu');

let mobileMenu2item = document.querySelectorAll('.mobile-main-menu-list-2 li');
let mobileMenu2iList = document.querySelector('.mobile-main-menu-list-2');

let mobileMenu3iList = document.querySelector('.mobile-main-menu-list-3');

    mainMobileMenuBtn.onclick = function () {
        this.classList.toggle('active');
        mainMobileMenu.classList.toggle('active');
    };

    mobileMenu1item.forEach(function (element) {
        element.onclick = function(){
            this.lastElementChild.classList.add('active');
        };
    });

    mobileMenu2item.forEach(function (element) {
        element.onclick = function(){
            this.lastElementChild.classList.add('active');
        };
    });


    $(document).on('click', '.go-main-menu', function () {
        $('.mobile-main-menu-list-2').removeClass('active');
    });
    $(document).on('click', '.go-main-menu-2', function () {
        $('.mobile-main-menu-list-3').removeClass('active');
    });


//    same goods height
    if ($(".container-goods").length) {
        let masEl = document.querySelectorAll( '.goods-catalog-list .goods__item');
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
            }
        }
        equalHeight();
        window.onresize = equalHeight;
        $(window).on('resize', function(){
            equalHeight();
        });
        };

    // if ($(".goods-section-views").length) {
    //     let masEl1 = document.querySelectorAll( '.goods-section-views .owl-item');
    //     masEl1 = Array.from(masEl1);
    //     let masHeight1 = [];
    //     let max1;
    //     function equalHeight1() {
    //         for (var i = 0; i < masEl1.length; i++) {
    //             masEl1[i].style.height ='auto';
    //             masHeight1.push(masEl1[i]);
    //             max1 = Math.max(masHeight1[i].offsetHeight);
    //         }
    //         for (var k = 0; k < masEl1.length; k++) {
    //             masEl1[k].style.height = max1 + 'px';
    //         }
    //     }
    //     equalHeight1();
    //     window.onresize = equalHeight1;
    //     $(window).on('resize', function(){
    //         equalHeight1();
    //     });
    // };




    //    custom rangebar
    if ($(".slider-rangebar").length) {
    var slider = document.querySelector('.slider-rangebar');
    var marginMin = document.querySelector('.range-input-min'),
        marginMax = document.querySelector('.range-input-max');

        noUiSlider.create(slider, {
            start: [140, 4000],
            connect: true,
            margin: 30,
            range: {
                'min': 0,
                'max': 10000
            }
        });
        slider.noUiSlider.on('update', function (values, handle) {
            if (handle) {
                marginMax.value = values[handle];
            } else {
                marginMin.value = values[handle];
            }
        });
     };


//    reset checkbox
    if ($(".checked-param-wrappers").length) {
        // button reset all checkbox
        let resetCheckbox = document.querySelector('.param-clear');
        let paramList = document.querySelector('.param-list');
        resetCheckbox.onclick = function () {
            $(".container-checkbox input:checked").prop("checked", false);
            paramList.innerHTML = '';
            event.preventDefault();
        };

        //add param
        function paramChange() {
            let paramcheckbox = $('.container-checkbox input[type="checkbox"]:checked');
            let accam = '';
            let paramList = $('.param-list');
            paramcheckbox.each(function (index, value) {
                let checkboxTitle = $(value).closest('.sidebar-characteristic').find('.sidebar-characteristic__title').text();
                let checkboxName = $(value).closest('.container-checkbox').find('.checkbox-name').text();
                let datafilter = $(value).closest('.container-checkbox').find('input').attr('data-filter-id');
                accam  += `<span class="param-item" data-filter-id='${datafilter}'><span class="param-close-icon"></span><span class="param-name">${checkboxTitle}</span>:<span class="param-content">${checkboxName}</span></span>`;
            });
            paramList.html(accam);
        };

        $(document).on('click', '.sidebar-characteristic input[type="checkbox"]', function(){
            paramChange();
        });

        //delete param
        $(document).on('click', '.checked-param-wrappers .param-item', function(){
            let id = $(this).attr('data-filter-id');
            $(`.sidebar-characteristic input[data-filter-id=${id}]`).prop("checked",false);
            paramChange();
        });

    };




// slick product cart
    if ($(".product-cart-container").length) {

        $('.main-photo').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable: false,
            // asNavFor: '.nav-photo'
        });
        $('.nav-photo').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.main-photo',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            vertical: true,
            draggable: false
        });

    //    tabs
        if ($(".tabs-info").length){
            // делаем здесь что-то

            let tar = document.getElementsByClassName('tab-h');
            tar = Array.from(tar);
            for (var i = 0; i < tar.length; i++) {
                tar[i].addEventListener('click',fTabs);
            }

            function fTabs(event) {
                for (var i = 0; i < tar.length; i++) {
                    tar[i].classList.remove('active');
                }
                this.classList.add('active');
                let datatab = event.target.getAttribute('data-tab');
                let tabBody = document.getElementsByClassName('tab-b');
                for (var i = 0; i < tabBody.length; i++) {
                    if (datatab == i) {
                        tabBody[i].style.display = 'block';
                    }
                    else{
                        tabBody[i].style.display = 'none';

                    }
                }
            }
        };

    };






//  !!!!!!!!!!!!!!!!!!!!!!!!  custom select js !!!!!!!!!!!!!!!!!!!!!!!!!!!
    function create_custom_dropdowns() {
        $('select').each(function(i, select) {
            if (!$(this).next().hasClass('dropdown')) {
                $(this).after('<div class="dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
                var dropdown = $(this).next();
                var options = $(select).find('option');
                var selected = $(this).find('option:selected');
                dropdown.find('.current').html(selected.data('display-text') || selected.text());
                options.each(function(j, o) {
                    var display = $(o).data('display-text') || '';
                    dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
                });
            }
        });
    }

// Event listeners

// Open/close
    $(document).on('click', '.dropdown', function(event) {
        $('.dropdown').not($(this)).removeClass('open');
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).find('.option').attr('tabindex', 0);
            $(this).find('.selected').focus();
        } else {
            $(this).find('.option').removeAttr('tabindex');
            $(this).focus();
        }
    });
// Close when clicking outside
    $(document).on('click', function(event) {
        if ($(event.target).closest('.dropdown').length === 0) {
            $('.dropdown').removeClass('open');
            $('.dropdown .option').removeAttr('tabindex');
        }
        event.stopPropagation();
    });
// Option click
    $(document).on('click', '.dropdown .option', function(event) {
        $(this).closest('.list').find('.selected').removeClass('selected');
        $(this).addClass('selected');
        var text = $(this).data('display-text') || $(this).text();
        $(this).closest('.dropdown').find('.current').text(text);
        $(this).closest('.dropdown').prev('select').val($(this).data('value')).trigger('change');
    });

// Keyboard events
    $(document).on('keydown', '.dropdown', function(event) {
        var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
        // Space or Enter
        if (event.keyCode == 32 || event.keyCode == 13) {
            if ($(this).hasClass('open')) {
                focused_option.trigger('click');
            } else {
                $(this).trigger('click');
            }
            return false;
            // Down
        } else if (event.keyCode == 40) {
            if (!$(this).hasClass('open')) {
                $(this).trigger('click');
            } else {
                focused_option.next().focus();
            }
            return false;
            // Up
        } else if (event.keyCode == 38) {
            if (!$(this).hasClass('open')) {
                $(this).trigger('click');
            } else {
                var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
                focused_option.prev().focus();
            }
            return false;
            // Esc
        } else if (event.keyCode == 27) {
            if ($(this).hasClass('open')) {
                $(this).trigger('click');
            }
            return false;
        }
    });

    $(document).ready(function() {
        create_custom_dropdowns();
    });


    if ($(".goods__buy-btn").length) {
        let goodsBtn = document.querySelectorAll('.goods__buy-btn')
        goodsBtn.forEach(function (element) {
            element.onclick = () => $.notify("Товар добавлен в корзину!", "success");
        });
    };

};
