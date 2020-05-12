$(document).ready(function (){



  $('.slider .owl-carousel').owlCarousel({

    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText:[],
    responsive:{
        0:{
            items:1,
            dots:true,
            nav:false
        },
        750:{
            items:1
        }
    }
});


$('.carousel').owlCarousel({

  loop:true,
  margin:25,
  nav:true,
  dots:false,
  autoplay:false,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  navText:[],
  responsive:{
      0:{
          items:1

      },
      480:{
          items:2
      },
      680:{
          items:3
      },
      1024:{
          items:4
      }
  }
});

$('.carousel2').owlCarousel({

  loop:true,
  margin:25,
  nav:true,
  dots:false,
  autoplay:false,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  navText:[],
  responsive:{
      0:{
          items:1,
          nav:false,
          dots:true
      },
      480:{
          items:1,
          nav:false,
          dots:true
      },
      650:{
        items:1,
        nav:false,
        dots:true
      },
      680:{
        nav:true,
        dots:false,
          items:1
      },
      780:{
        nav:true,
          items:2
      }
  }
});




});
const iconSearch = document.querySelector('.icons__search');
const body = document.querySelector('body');

iconSearch.addEventListener('click', function(event){
  event.stopPropagation();
  iconSearch.classList.add('icons__search--active');
});

body.addEventListener('click', function(event){
  iconSearch.classList.remove('icons__search--active');
});
