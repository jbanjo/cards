let createCardButton = document.getElementById("create-button");
createCardButton.addEventListener("click", createNewCard);

function createNewCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.spellcheck = false;
    newCard.innerHTML = `
      <div class="header">
        <h3 contenteditable="true">New Card</h3>
        <button class="color-picker"></button>
      </div>
      <div class="content">
        <p contenteditable="true">Type here...</p>
      </div>
      <button class="delete-button"><ion-icon name="trash-outline"></ion-icon></button>
    `;
    cardContainer.appendChild(newCard);

    //INITIATE THE COLOR SELECTOR
    let selector = newCard.querySelector(".color-picker");
    initiatecolor(selector);
  }