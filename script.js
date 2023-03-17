
const LIST = ['kepek/kep1.jpg', 'kepek/kep2.jpg', 'kepek/kep3.jpg', 'kepek/kep4.jpg', 'kepek/kep5.jpg', 'kepek/kep6.jpg']

$(function () {
    const FESLO = $('#felso');
    let tartalom=osszeAllit();
    FESLO.append(tartalom);
})

function osszeAllit() {
    let txt = "";
    for (let index = 0; index < LIST.length; index++) {
        txt += `<div><img src="${LIST[index]}"></div>`;
    }
    return txt;
}