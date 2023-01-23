let isScrolling = false;
//let startX, startY;
let anchor = document.querySelector('#anchor');
let viewframe = document.querySelector('#viewframe');
console.log("init");

document.addEventListener('mousedown', (event) => {
  console.log("mouse");
  if (event.target.classList.contains('card')){
    console.log("nope");
    return;
  }
  isScrolling = true;

  viewframe.style.cursor = "grabbing";
  viewframe.style.cursor = "-moz-grabbing";
  viewframe.style.cursor = "-webkit-grabbing";

  startX = event.clientX - anchor.offsetLeft;
  startY = event.clientY - anchor.offsetTop;
});

document.addEventListener('mousemove', event => {
  if (!isScrolling) {
    return;
  }
  //document.body.style.cursor = "grabbing";
  let offsetX = event.clientX - startX;
  let offsetY = event.clientY - startY;
  anchor.style.position = "absolute";
  anchor.style.left = offsetX + 'px';
  anchor.style.top = offsetY + 'px';
});

document.addEventListener('mouseup', () => {
  isScrolling = false;
  viewframe.style.cursor = "grab";
});