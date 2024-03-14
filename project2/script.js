function changeColor() {
    let col = document.getElementById("container");
    col.style.backgroundColor = bgcolor();
}
function bgcolor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`;
}
// let btnn = document.getElementById("changeColor")
// btnn.addEventListener('Click', bgchange())
// bgchange()
// let button=document.getElementById("changeColor").addEventListener("click",bgchange())
var button = document.getElementById("changeColorButton");
  button.addEventListener("click", changeColor);