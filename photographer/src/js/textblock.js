const aboutText = document.querySelector('.about-text-block');

const splitText = (el) => {
    el.innerHTML = el.textContent.trim().replace(/(\S*)/g, m => {
        return `<div class="word">` +
            m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
            `</div>`;
    });
    return el;
};

const split = splitText(aboutText);

function random(min, max){
    return (Math.random() * (max - min)) + min;
}



Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    TweenMax.from(el, 2, {
        opacity: 0,
        scale: .1,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        delay: idx * 0.02,
        repeat: 0,
        scrollTrigger:{
            trigger:'.about-text-block-wrapper',
        }
    })
});



