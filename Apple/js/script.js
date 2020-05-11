
$(document).ready(function() {
    //custom dropdown select
    //custom select

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



    //сustom rangebar
    //custom range
    function init() {
        var sliders = document.getElementsByClassName("tick-slider-input");
        for (var i=0;i<sliders.length;i++) {
            var slider = sliders[0];
            slider.oninput = onSliderInput;
            updateProgress(slider);
            setTicks(slider);
        }
    }

    function onSliderInput(event) {
        updateProgress(event.target);
    }

    function updateProgress(slider) {
        var progress = document.getElementById("weightProgress");
        var percent = getSliderPercent(slider);

        progress.style.width = percent * 100 + "%";
    }

    function getSliderPercent(slider) {
        var range = slider.max - slider.min;
        var absValue = slider.value - slider.min;

        return absValue / range;
    }

    window.addEventListener('resize', setTicks);


    function setTicks(slider) {
        const positions = ["Не нравится", "Нормльный&nbsp;сервис кроме некоторых проблем", "Отличный&nbsp;сервис&nbsp;,но&nbsp; есть недоработки&nbsp;", "Всё супер"];
        const positions1 = ["0%","25%","75%","100%"];
        var container = document.getElementById("weightTicks");
        container.innerHTML = '';
        var spacing = parseInt(slider.step);
        var sliderRange = slider.max - slider.min;
        var tickCount = sliderRange / spacing + 1; // +1 to account for 0


        var tickValue = parseInt(slider.min);

        if($(window).width() < 768)  {
            for (const pos of positions1) {
                var tick = document.createElement("div");
                tick.className = "tick-slider-tick";
                var tickValueElem = document.createElement("div");
                tickValueElem.className = "tick-value";
                tickValueElem.innerHTML = pos;
                tick.appendChild(tickValueElem);
                container.appendChild(tick);
                tickValue += spacing;
            }
        }
        else{
            for (const pos of positions) {
                var tick = document.createElement("div");
                tick.className = "tick-slider-tick";
                var tickValueElem = document.createElement("div");
                tickValueElem.className = "tick-value";
                tickValueElem.innerHTML = pos;
                tick.appendChild(tickValueElem);
                container.appendChild(tick);
                tickValue += spacing;
            }
        }



    }

    window.onload = init;





    let menu_button = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');

    menu_button.onclick = function () {
        if(menu.classList.contains('menu__active')){
            menu.classList.remove('menu__active');
            menu_button.classList.remove('menu-btn__active');
        }else{
            menu.classList.add('menu__active');
            menu_button.classList.add('menu-btn__active');
        }
    }

  function giveopacity(selecteditem,time){
      let features_block = document.querySelectorAll(selecteditem);
      if ($(document).scrollTop() + $(window).height() > $(selecteditem).offset().top && $(document).scrollTop() - $(selecteditem).offset().top < $(selecteditem).height()){
          for(let i=0; i<features_block.length; i++){
              setTimeout(()=>{
                  features_block[i].style.opacity='1';
              },time * i)
          }
      }


      if ($(document).scrollTop() + $(window).height() > $(selecteditem).offset().top && $(document).scrollTop() - $(selecteditem).offset().top > $(selecteditem).height()){
          for(let i=0; i<features_block.length; i++){
              setTimeout(()=>{
                  if(i % 2 == 0){
                      features_block[i].style.opacity='1';
                  }else{
                      features_block[i].style.opacity='1';
                  }

              },time * i)
          }
      }


      window.addEventListener('scroll', function() {
          if ($(document).scrollTop() + $(window).height() > $(selecteditem).offset().top && $(document).scrollTop() - $(selecteditem).offset().top < $(selecteditem).height()){
              for(let i=0; i<features_block.length; i++){
                  setTimeout(()=>{
                      features_block[i].style.opacity='1';
                  },time * i)
              }
          }
      });
  }
  giveopacity('.features-block__item',150);

    function giveomargins(selecteditem,time){
        let features_block = document.querySelectorAll(selecteditem);
        if ($(document).scrollTop() + $(window).height() > $(selecteditem).offset().top && $(document).scrollTop() - $(selecteditem).offset().top < $(selecteditem).height()){
            for(let i=0; i<features_block.length; i++){
                setTimeout(()=>{
                    if(i % 2 == 0){
                        features_block[i].style.left='0';
                    }else{
                        features_block[i].style.right='0';
                    }

                },time * i)
            }
        }


        if ($(document).scrollTop() + $(window).height() > $(selecteditem).offset().top && $(document).scrollTop() - $(selecteditem).offset().top > $(selecteditem).height()){
            for(let i=0; i<features_block.length; i++){
                setTimeout(()=>{
                    if(i % 2 == 0){
                        features_block[i].style.left='0';
                    }else{
                        features_block[i].style.right='0';
                    }

                },time * i)
            }
        }



        window.addEventListener('scroll', function() {
            if ($(document).scrollTop() + $(window).height() > $(selecteditem).offset().top && $(document).scrollTop() - $(selecteditem).offset().top < $(selecteditem).height()){
                for(let i=0; i<features_block.length; i++){
                    setTimeout(()=>{
                        if(i % 2 == 0){
                            features_block[i].style.left='0';
                        }else{
                            features_block[i].style.right='0';
                        }

                    },time * i)
                }
            }
        });
    }

    giveomargins('.catalog-card',100);


//    before /after slider activited

        $('.before-after').twentytwenty();

//        slick slider
    $('.before-slider').slick({
        draggable:false,
        dots:true,
        arrows:false,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //
        //         }
        //     },
        //     {
        //         breakpoint: 767,
        //         settings: {
        //
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //
        //         }
        //     }
        //
        // ]
    });

    $('.reviews-slider').slick({
        dots:true,
        arrows:false,
        slidesToShow:3,
        slidesToScroll:3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ],


    });


//    animate scroll to element
//     $("a[href^='#']").click(function () {
//         let _href = $(this).attr('href');
//         $("html,body").animate({scrollTop:$(_href).offset().top -100 + "px"});
//         return false;
//     });


    $('a[href^=\'#\']').on( 'click', function(){
        var el = $(this);
        var dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html').animate({
                    scrollTop: $(dest).offset().top -100 + "px" // прокручиваем страницу к требуемому элементу
                }, 500 // скорость прокрутки
            );
        }
        return false;
    });


//    phone validation
    $('input[type=tel]').mask("+(999) 99-999-9999");

});


