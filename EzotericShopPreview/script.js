window.onload = function() {
    if(window.innerWidth > 991){
        const eyeball = document.querySelector(".ball");

        document.onmousemove = () => {
            const x = event.clientX * 100 / window.innerWidth + "%";
            const y = event.clientY * 100 / window.innerHeight + "%";

            eyeball.style.left = x;
            eyeball.style.top = y;
            eyeball.style.transform = "translate(-"+x+", -"+y+")";
        }

    }

};
