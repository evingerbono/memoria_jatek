
const LIST = ['kepek/kep1.jpg', 'kepek/kep2.jpg', 'kepek/kep3.jpg', 'kepek/kep4.jpg', 'kepek/kep5.jpg', 'kepek/kep6.jpg', 'kepek/kep1.jpg', 'kepek/kep2.jpg', 'kepek/kep3.jpg', 'kepek/kep4.jpg', 'kepek/kep5.jpg', 'kepek/kep6.jpg']
let db = 0;
const KIVALASZTOTTKEPEK = []

$(function () {
    const FESLO = $('#felso');
    let tartalom = osszeAllit();
    FESLO.append(tartalom);
    const FELSOKEPEK = $('#felso img');
    FELSOKEPEK.on('click', kepreKattintas);
})

function osszeAllit() {
    let txt = "";
    for (let index = 0; index < LIST.length; index++) {
        txt += `<div><img src="kepek/hatter.jpg" alt="" id="${index}"></div>`;
    }
    return txt;
}

function kepreKattintas() {
    const aktKep = event.target;
    console.log($(aktKep).attr("id"));
    aktKep.src = LIST[aktKep.id];
    KIVALASZTOTTKEPEK.push($(aktKep).attr("id"))
    db++;
    if (db == 2) {
        db = 0;
        visszafordit();
    }
}

function visszafordit() {

    console.log(KIVALASZTOTTKEPEK);
    setTimeout(function () {
        const FELSOKEPEK = $('#felso img')
        let aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[0]);
        $(aktKep).attr('src', 'kepek/hatter.jpg');
        aktKep = FELSOKEPEK.eq(KIVALASZTOTTKEPEK[1]);
        $(aktKep).attr('src', 'kepek/hatter.jpg');
        KIVALASZTOTTKEPEK.pop();
        KIVALASZTOTTKEPEK.pop();
    }, 1000)
}