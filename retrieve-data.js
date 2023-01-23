//ON LOAD
window.onload = retrieveCardData;

function retrieveCardData() {
  //HANDLE THE CARDS
  let storedCardsData = localStorage.getItem("CardData");
  if (storedCardsData) {
    cardsData = JSON.parse(storedCardsData);
    cardsData.forEach(cardData => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.spellcheck = false;

      card.style.left = cardData.left;
      card.style.top = cardData.top;
      card.style.position = cardData.position;
      card.style.gridRow = cardData.gridRow;
      card.style.gridColumn = cardData.gridColumn;
      /*if(card.style.position == "absolute"){
        card.style.left = cardData.offsetLeft + "px";
        card.style.top = cardData.offsetTop + "px";
        console.log("absolute", card.style.left, cardData.offsetLeft, card.style.top, card.offsetTop);
      }
      else{
        card.style.left = cardData.left + "px";
        card.style.top = cardData.top + "px";
        console.log("flex", card.style.left, card.style.right);
      }

      card.style.margin = cardData.margin + "px";*/
      card.innerHTML = 
      `<div class="header">
          <h3 contenteditable="true">${cardData.title}</h3>
          <button class="color-picker"></button>
      </div>
      <div class="content">
          ${cardData.content}
      </div>
      <button class="delete-button"><ion-icon name="trash-outline"></ion-icon></button>`
      ;
      document.getElementById("card-container").appendChild(card);

      //INITIATE THE COLOR SELECTOR
      let selector = card.querySelector(".color-picker");
      initiatecolor(selector, cardData.color);
      console.log(cardData.color);
    });
  }

  //HANDLE THE ANCHOR
  let AnchorPosition = JSON.parse(localStorage.getItem("AnchorPosition"));
  anchor.style.left = AnchorPosition.left;
  anchor.style.top = AnchorPosition.top;
}