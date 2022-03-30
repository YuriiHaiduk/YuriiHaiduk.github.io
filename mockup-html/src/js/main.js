function initAcc(elem, option){
    //addEventListener on mouse click
    document.addEventListener('click', function (e) {
        e.preventDefault();
        //check is the right element clicked
        if (!e.target.matches(elem+' .accordion-button')) return;
        else{

            //check if element contains active class
            if(!e.target.parentElement.classList.contains('active')){
                if(option==true){
                    //if option true remove active class from all other accordions
                    var elementList = document.querySelectorAll(elem +' .accordion-content');
                    Array.prototype.forEach.call(elementList, function (e) {
                        e.classList.remove('active');
                    });
                }
                //add active class on cliked accordion
                e.target.parentElement.classList.add('active');
            }else{
                //remove active class on cliked accordion
                e.target.parentElement.classList.remove('active');
                console.log('fsafas')
            }
        }
    });
}


//activate accordion function
initAcc('.accordion', true);


function mobileMenuFunc() {
    let MobileMenuBtn = document.querySelector('.mobile-menu-open-button');
    let MobileMenu = document.querySelector('.main-menu-nav');
    MobileMenuBtn.addEventListener('click',function () {
        MobileMenuBtn.querySelector('.hamburger').classList.toggle('is-active');
        MobileMenu.classList.toggle('open');
    })
}
mobileMenuFunc();


function MoreBlocksOpen() {
    let button = document.querySelector('.js-more');
    let blockslist = document.querySelectorAll('.blocks-list-item-wrapper');
    button.addEventListener('click',function (e) {
        e.preventDefault();
        if(!button.classList.contains('active')){
            button.classList.add('active');
            button.innerText = 'Less';
            blockslist.forEach(element =>{
                element.classList.add('open');
            })
        }
        else{
            button.classList.remove('active');
            button.innerText = 'More';
            blockslist.forEach(element =>{
                element.classList.remove('open');
            })
        }
    })
}

MoreBlocksOpen();