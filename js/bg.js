const body = document.querySelector ("body");

const IMG_NUM = 3;

function paintImage (imgNumber) {
    const image = new Image ();
    image.src = `image/${imgNumber +1}.jpg`;
    image.classList.add ("bgImage");
    body.appendChild (image);
}

function genRandom () {
    const number = Math.floor (Math.random () * IMG_NUM);
    return number;
}

function init () {
    const randomNumber = genRandom ();
    paintImage (randomNumber);
}

init ();