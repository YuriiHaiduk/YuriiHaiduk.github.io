function openInfo() {
    let tabitem = document.querySelectorAll('.brand-info-list-item');
    let content = document.querySelector('.main-info-content');
    let navlink = document.querySelectorAll('.tab-content-info .nav-link');
    let startMenu = document.querySelector('.start-menu');
    tabitem.forEach(function (element) {
        element.addEventListener('click',function (e) {
            e.preventDefault()
            content.classList.add('open')
            startMenu.classList.add('close')
            // navlink.forEach(function (element) {
            //     element.classList.remove('active')
            // })
            // document.querySelector(`.tab-content-info .nav-link#${element.dataset.openInfo}`).classList.add('active')
            document.querySelector(`.tab-content-info .nav-link#${element.dataset.openInfo}`).click()
        })
    })
}

openInfo()