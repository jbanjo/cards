let saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveChanges);

function saveChanges() {
    //RETRIEVE ALL THE NECESSARY DATA FROM OBJECTS
    let cards = document.querySelectorAll('.card'); //The cards

    //Position of every card:
    let CardData = []; // Declare Empty Array. Will contain: Arrays with two values in them, left and top, accessed via .left/.top 
    cards.forEach(card => {
      let Data = {
        left: card.style.left,
        top: card.style.top,
        position: card.style.position,
        margin: card.style.margin,
        gridRow: card.style.gridRow,
        gridColumn: card.style.gridColumn,
        content: card.querySelector(".content").innerHTML,
        title: card.querySelector("h3").innerHTML,
        color: card.querySelector(".color-picker").getAttribute('data-index')
      };
      CardData.push(Data);
    });
    
    CardData.forEach(card => {
        console.log(card.color);
    })
    localStorage.setItem("CardData", JSON.stringify(CardData));

    let AnchorPosition = {
      left: anchor.style.left,
      top: anchor.style.top
    };
    localStorage.setItem("AnchorPosition", JSON.stringify(AnchorPosition));

    //Color Index of every card:
    // let CardColors = [];
    // cards.forEach(card => {
    //   let ColorData = card.querySelector(".color-picker").getAttribute('data-index'); 
    //   CardColors.push(ColorData);
    // });

    // console.log(CardColors);

    //localStorage.setItem("CardColor", JSON.stringify(cardsData));

    //Content of every card:



    //localStorage.setItem("CardContent", JSON.stringify(cardsData));
  }