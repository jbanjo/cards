cardContainer = document.getElementById('card-container');
cardContainer.addEventListener('click', event => {
  console.log(event.target.classList);
  if (event.target.parentNode.classList.contains("delete-button")) { //parentNode is needed as the deepest child element is the ionicon, not the button.
    console.log("yep");
    /*if (confirm('Are you sure you want to delete this card?')) {
      event.target.closest('.card').remove();
    }*/
    event.target.closest('.card').remove();
  }
});