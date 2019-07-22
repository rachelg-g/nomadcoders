const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//     console.log("finished loading");
// }

function paintImage(imgNumber) {
    const image = new Image();
    const div = document.createElement("div");
    body.appendChild(div);
    div.style.backgroundImage = `url('images/${imgNumber + 1}.jpg')`;
    div.classList.add("bgImage")
    
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    // console.log(Math.random(), Math.floor());
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();