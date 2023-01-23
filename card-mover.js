//Initialize Variable to check if dragging
let isDragging = false;
//Initialize Variables that keeps track of the start position of the card being dragged
let startX, startY;
//Initialize Variable for z-index: Will keep getting raised -> Not a good solution
let zindex = 0;

/*let headers = document.getElementsByClassName('header');
headers.forEach(header => {
    header.addEventListener('pointerdown', (event) => {
      let selectedCard = event.target.parentNode;
      isDragging = true;
      selectedCard.classList.add('dragging');
      startX = event.clientX - selectedCard.offsetLeft;
      startY = event.clientY - selectedCard.offsetTop;
    });
});*/

let cardContainer = document.getElementById('card-container');

cardContainer.addEventListener('pointerdown', (event) => {
  // if(event.target.classList.contains('header')){
  //   let selectedCard = event.target.parentNode;
  //   isDragging = true;
  //   selectedCard.classList.add('dragging');
  //   startX = event.clientX - selectedCard.offsetLeft;
  //   startY = event.clientY - selectedCard.offsetTop;

  //   //Set its z-index to a higher number to go over other elements
  //   selectedCard.style.zIndex = zindex++;
  // }
  if(event.target.classList.contains('card')){
    let selectedCard = event.target;
    isDragging = true;
    event.target.classList.add('dragging');
    startX = event.clientX - event.target.offsetLeft;
    startY = event.clientY - event.target.offsetTop;

    //Set its z-index to a higher number to go over other elements
    selectedCard.style.zIndex = zindex++;

    //Set the cursor to dragging
    document.body.style.cursor = "move";
  }
});

document.addEventListener('mousemove', event => {
  if (!isDragging) {
    return;
  }
  console.log("drag");

  let selectedCard = document.querySelector('.dragging');

  //Set its position to absolute and remove it from the flex layout
  selectedCard.style.position = "absolute";

  let offsetX = event.clientX - startX;
  let offsetY = event.clientY - startY;
  selectedCard.style.left = offsetX + 'px';
  selectedCard.style.top = offsetY + 'px';
});

document.addEventListener('mouseup', () => {
  if (!isDragging) {
    return;
  }
  isDragging = false;
  let selectedCard = document.querySelector('.dragging');
  selectedCard.classList.remove('dragging');

  //Reset cursor
  document.body.style.cursor = "auto";
});











//SECOND ITERATION

/*

//Selects the card class from the html
const cards = document.querySelectorAll('.card');

//Initialize Variable to check if dragging
let isDragging = false;
//Initialize Variable to check if cursor is touching the card
let isTouching = false;
//
let MovingCard;
//Initialize Variables that keeps track of the start position of the card being dragged
let startX, startY;
//Initialize Variable for z-index: Will keep getting raised -> Not a good solution
let zindex = 0;

//cards.forEach is a loop that runs over all cards
cards.forEach(card => {
  //When pressing mouse button:
  card.addEventListener('mousedown', (event) => {
    //Set dragging var to true, will be used later
    isDragging = true;
    //Add dragging class to modify css
    card.classList.add('dragging');
    //Set the position of the cursor on the card by taking difference of cursor pos and card pos
    startX = event.clientX - card.offsetLeft;
    startY = event.clientY - card.offsetTop;

    //Set cursor to dragging
    document.body.style.cursor = "dragging";

    MovingCard = card;
  });

  //MIGHT NOT BE NECESSARY: CAUSE THE DRAGGING TO STOP PREMATURELY
  
  /*card.addEventListener('mouseover', () => {
    isTouching = true;
    //console.log("on");
  });

  card.addEventListener('mouseout', () => {
    isTouching = false;
    isDragging = false;
    //console.log("out");
  });*/

  /* card.addEventListener('mousemove', event => {
    if (!isDragging || !isTouching) {
      isDragging = false;
      return;
    }
    
    //Set its position to absolute and remove it from the flex layout
    card.style.position = "absolute";

    //Set its z-index to a higher number to go over other elements
    card.style.zIndex = zindex++;

    let offsetX = event.clientX - startX;
    let offsetY = event.clientY - startY;
    card.style.left = offsetX + 'px';
    card.style.top = offsetY + 'px';

    console.log(isDragging + " " + isTouching);

  }); */
  

  /*card.addEventListener('mouseup', () => {
    isDragging = false;
    card.classList.remove('dragging');

    //Set cursor to default
    document.body.style.cursor = "default";
  });
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', () => {
  if (!isDragging || !isTouching) {
    isDragging = false;
    return;
  }
  

  
  //Set its position to absolute and remove it from the flex layout
  MovingCard.style.position = "absolute";

  //Set its z-index to a higher number to go over other elements
  MovingCard.style.zIndex = zindex++;

  let offsetX = event.clientX - startX;
  let offsetY = event.clientY - startY;
  MovingCard.style.left = offsetX + 'px';
  MovingCard.style.top = offsetY + 'px';

  console.log(isDragging + " " + isTouching);
});
//First Iteration
/*
const cards = document.querySelectorAll('.card');

let isDragging = false;

cards.forEach(card => {
  card.addEventListener('mousedown', () => {
    isDragging = true;
    card.classList.add('dragging');
  });

  card.addEventListener('mousemove', event => {
    if (!isDragging) {
      return;
    }
    card.style.left = event.clientX + 'px';
    card.style.top = event.clientY + 'px';
  });

  card.addEventListener('mouseup', () => {
    isDragging = false;
    card.classList.remove('dragging');
  });
});
*/
