const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

// canvas element 는 두개의 사이즈를 가지고 와야한다. css와 현재 화면에 그려있는!
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

// 페인팅 스톱!
function stoppainting() {
    painting = false;
}

// 페인팅 스타트!
function startpainting() {
    painting = true;
}

// 마우스가 캔버스 위에서 움직임
function onMouseMove(event) {
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y);

    if(!painting) {
        // console.log("creating line in", x , y);
        ctx.beginPath(); // 시작점
        ctx.moveTo(x, y); // 시작점에서 클릭한 곳까지 선으로 만들기
    } else {
        console.log("creating line in", x , y);
        ctx.lineTo(x, y); // 마지막 점을 특정 좌표와 직선으로 연결한다
        ctx.stroke(); // 선 그리기
        // ctx.closePath();
    }
}

function handleColorClick(event) {
    // console.log(event.target.style)
    const color = event.target.style.backgroundColor; // 클릭한 컬러의 백그라운드 속성만 가져오기
    // console.log(color);
    ctx.strokeStyle = color;
}

function handleRangeChange(event) {
    // console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {
    if(filling == true) {
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint"
    }
}

// canvas가 존재하는지 확인 & canvas 안 마우스 움직임 감지
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startpainting);
    canvas.addEventListener("mouseup", stoppainting);
    canvas.addEventListener("mouseleave", stoppainting);
}

// console.log(Array.from(colors)); // Array.from => object로부터 array를 만든다
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

if(range) {
    range.addEventListener("input", handleRangeChange)
}

if(mode) {
    mode.addEventListener("click", handleModeClick)
}