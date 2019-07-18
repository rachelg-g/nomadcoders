const canvas = document.getElementById("jsCanvas");

let painting = false;

// 페인팅 스톱!
function stopPainting() {
    painting = false;
}

// 마우스가 캔버스 위에서 움직임
function onMouseMove(event) {
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;

    // console.log(x, y);
}

// 마우스가 컨버스 위에서 클릭
function onMouseDown(event) {
    console.log(event);

    painting = true;
}

// 마우스가 컨버스 위에서 클릭 해제 
function onMouseUp(event) {
    stopPainting();
}

// canvas가 존재하는지 확인 & canvas 안 마우스 움직임 감지
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}