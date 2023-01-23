const gridButton = document.getElementById("grid-button");
const cards = document.querySelectorAll(".card");

gridButton.addEventListener("click", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.style.position = 'relative';
        card.style.left = 0;
        card.style.top = 0;
        //card.style.margin = 10 + "px";
        card.style.gridRow = '1 / 3';
        card.style.gridColumn = '1 / 2';
    });
});