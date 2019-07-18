const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// canvas element 는 두개의 사이즈를 가지고 와야한다. css와 현재 화면에 그려있는!
canvas.width = 700;
canvas.width = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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

// 마우스가 컨버스 위에서 클릭
function onMouseDown(event) {
    console.log(event);
    painting = true;
}

// canvas가 존재하는지 확인 & canvas 안 마우스 움직임 감지
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startpainting);
    canvas.addEventListener("mouseup", stoppainting);
    canvas.addEventListener("mouseleave", stoppainting);
}