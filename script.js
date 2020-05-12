window.onload = function() {

    document.querySelector('#search').oninput = function () {
        let val = this.value.trim().toLowerCase();
        let allitemsname = document.querySelectorAll('.list .list__item .name');

        if (val != '') {
            allitemsname.forEach(function (elem) {
                if (elem.innerText.toLowerCase().search(val) == -1) {
                    elem.parentElement.classList.add('hide');
                    elem.innerHTML = elem.innerText;
                } else {
                    elem.parentElement.classList.remove('hide');
                    let str = elem.innerText;
                    let position = elem.innerText.toLowerCase().search(val);
                    elem.innerHTML = insertMark(str, position, val.length);
                    console.log(elem);
                }
            })
        } else {
            allitemsname.forEach(function (elem) {
                elem.parentElement.classList.remove('hide');
                elem.innerHTML = elem.innerText;
            })
        }
    };

    function insertMark(str, position, len) {
        return str.slice(0, position)+'<mark>'+str.slice(position, position+len)+'</mark>'+str.slice(position+len);
    }
};