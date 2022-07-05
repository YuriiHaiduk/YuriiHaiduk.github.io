
window.onload = function () {

    window.addEventListener("scroll", () => {
        const indicatorBar = document.querySelector(".scroll-indicator-bar");

        const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = (pageScroll / height) * 100;

        indicatorBar.style.width = scrollValue + "%";
    });

    function anchors(){
        let menuLinks = document.querySelectorAll('a[data-goto]');
        if(menuLinks.length > 0){
            menuLinks.forEach(menuLink=>{
                menuLink.addEventListener('click',onMenuLinkClick)
            });
            function onMenuLinkClick(e) {
                const menuLink = e.target;
                if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                    const gotoBlock = document.querySelector(menuLink.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
                    window.scrollTo({
                        top:gotoBlockValue,
                        behavior:"smooth"
                    })
                    e.preventDefault()
                }
            }
        }
    }
    anchors()


    function headerMenu(){
        let mobmenu = document.querySelector('.header-menu');
        let mobBtn = document.querySelector('.hamburger');
        let pageWrapper = document.querySelector('body');
        let overlay = document.querySelector('.space-cover-menu-header');
        mobBtn.addEventListener('click',function () {
            if(mobBtn.classList.contains('is-active')){
                pageWrapper.classList.remove('page-menu-opened')
                mobBtn.classList.remove('is-active')
                setTimeout(()=>{
                    mobmenu.classList.remove('transitioned')
                },500)
            }else {
                mobBtn.classList.add('is-active')
                pageWrapper.classList.add('page-menu-opened')
                mobmenu.classList.add('transitioned')
            }
        })
        overlay.addEventListener('click',function () {
            pageWrapper.classList.remove('page-menu-opened')
            mobBtn.classList.remove('is-active')
            setTimeout(()=>{
                mobmenu.classList.remove('transitioned')
            },500)
        })
    }
    headerMenu()



    function cardPhotoBlockAnimation() {
            const body = document.querySelector('.photo-card-block')

            cx = window.innerWidth / 1.66
            cy = window.innerHeight / 1.66

            body.addEventListener('mousemove', e => {

                clientX = e.pageX
                clientY = e.pageY

                request = requestAnimationFrame(updateMe)

            })

            function updateMe() {
                dx     = clientX - cx
                dy     = clientY - cy
                tiltx  = dy / cy
                tilty  = dx / cx
                radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
                degree = radius * 11
                gsap.to('.photo-card-block__content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
            }


        gsap.to('.photo-card-block__title', {  opacity:1 , zoom:1,  duration: 0.9, delay: .45,
            scrollTrigger:{
                trigger:'.photo-card-block',
            }})
        gsap.to('.photo-card-block__text', {  opacity:1 , zoom:1,  duration: 0.74, delay: .75,
            scrollTrigger:{
                trigger:'.photo-card-block',
            }})
        gsap.to('.photo-card-block-photo__letters', {  opacity:1 , translateY:0 ,zoom:1,  duration: 1, delay: .25,
            scrollTrigger:{
                trigger:'.photo-card-block',
            }})
        gsap.to('.photo-card-block-photo-layer--1', {  opacity:0.2 , left: -10, top: 10, duration: 1, delay: .65,
            scrollTrigger:{
                trigger:'.photo-card-block',
            }})
        gsap.to('.photo-card-block-photo-layer--2', { opacity:0.2 , left: -20, top: 20, duration: 1, delay: .65,
            scrollTrigger:{
                trigger:'.photo-card-block',
            }})
        gsap.to('.photo-card-block-photo-layer--3', { opacity:0.2 , left: -30, top: 30, duration: 1, delay: .65,
            scrollTrigger:{
                trigger:'.photo-card-block',
            }})
    }
    function cursorCustom() {
        const body = document.querySelector('body');
        const cursor = document.querySelector('#cursor');
        const follower = document.querySelector('#aura');
        const links = document.querySelectorAll('a');

        mouseX=0,mouseY=0,posX=0,posY=0

        function mouseCoords(e) {
            mouseX = e.pageX
            mouseY = e.pageY
        }


        gsap.to({},0.01,{
            repeat:-1,
            onRepeat:()=>{
                posX += (mouseX - posX) / 5
                posY += (mouseY - posY) / 5
                gsap.set(cursor,{
                    css:{
                        left:mouseX,
                        top:mouseY
                    }
                })
                gsap.set(follower,{
                    css:{
                        left:posX -24,
                        top:posY - 24
                    }
                })
            }
        })

        body.addEventListener('mousemove',function (e) {
            mouseCoords(e)
            cursor.classList.remove('hidden')
            follower.classList.remove('hidden')
        })

        for(let i = 0; i < links.length; i++) {

            links[i].addEventListener('mouseover', () => {
                cursor.classList.add('active')
                follower.classList.add('active')
            })

            links[i].addEventListener('mouseout', () => {
                cursor.classList.remove('active')
                follower.classList.remove('active')
            })

        }

        body.addEventListener('mouseout', () => {
            cursor.classList.add('hidden')
            follower.classList.add('hidden')
        })


    }

    if(window.innerWidth > 1050){
        cursorCustom()
        cardPhotoBlockAnimation()
    }













    // to top btn
    // if(document.querySelector('.btn-to-top')){
    //     let toTopBtn = document.querySelector('.btn-to-top');
    //     let timeOutScroll;
    //
    //     function topBtnScroll() {
    //         if (pageYOffset >= document.documentElement.clientHeight) {
    //             toTopBtn.classList.add('active');
    //         } else {
    //             toTopBtn.classList.remove('active');
    //         }
    //     }
    //
    //     window.addEventListener('scroll', topBtnScroll);
    //
    //     function toTop() {
    //         let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    //         if (top > 0) {
    //             window.scrollBy(0, -100);
    //             timeOutScroll = setTimeout(toTop, 20);
    //         } else {
    //             clearTimeout(timeOutScroll);
    //         }
    //     }
    //     toTopBtn.addEventListener('click', toTop);
    // }



};
