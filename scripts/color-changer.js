const selectors = document.querySelectorAll('.color-picker');

//List of predetermined colors that the color picker will cycle through 

//INDEX 0 MEANS FIRST COLOR: BLUE (0), GREEN (1), PINK (2), GRAY (3)
let colorlist = ["rgba(229, 242, 250, 0.902)", "rgba(212, 253, 222, 0.902)", "rgba(252, 236, 236, 0.902)","rgba(245, 245, 245, 0.902)"];
let emphasislist = ["rgb(218, 247, 252)","rgb(164, 248, 197)","rgb(252, 218, 218)","rgb(230, 229, 229)"];
let textcolorlist = ["black", "black", "black", "black"];

//Global Variables needed for script
//NOT ACTUALLY NEEDED: let hovering = false; //Shouldn't be global, preferrably be an attribute.

selectors.forEach(selector => {
  initiatecolor(selector);
});


function initiatecolor(selector, index= 0 ) {
  //Set the base style when site is first loaded: (INDEX IS 0/BLUE AT BEGINNING)
  
  //Format the needed elements
  selector.parentElement.parentElement.style.backgroundColor = colorlist[index];
  selector.parentElement.style.backgroundColor = emphasislist[index];
  selector.style.backgroundColor = colorlist[index];

  //Create a seperate index attribute for every seperate selector
  selector.setAttribute('data-index', index);

  //ON CLICK: change color
  selector.addEventListener("click", function(event){
    let index = event.target.getAttribute('data-index');
    let nextcolor;
    if(index < colorlist.length-1){ //If index is still in acceptable range
        nextcolor = parseInt(index)+1; //The next colour will just be the next color
    }
    else{
      nextcolor = 0; //Next colour will be the first colour
    }
    //Format the needed elements
    this.parentElement.parentElement.style.backgroundColor = colorlist[nextcolor]; //Background of card
    this.parentElement.style.backgroundColor = emphasislist[nextcolor]; //Background of header
    this.style.backgroundColor = colorlist[nextcolor]; //Background of selector

    this.parentElement.parentElement.style.color = textcolorlist[index]; //Font color of card

    //Update the new index to go to the next color
    index = nextcolor;

    //Put the variable index back into attribute storage
    selector.setAttribute('data-index', index);
});

  
  //ON HOVER: show next color

  //When mouse goes over the selector: show next color
  selector.addEventListener("mouseover", function(event){
    index = parseInt(event.target.getAttribute('data-index'));
    if(index === colorlist.length - 1){
      this.style.backgroundColor = colorlist[0];
    }else{
      this.style.backgroundColor = colorlist[index+1];
    }
    /*if(index >= colorlist.length){
      this.style.backgroundColor = colorlist[index + 1];
    }
    else{
      this.style.backgroundColor = colorlist[0]
    }*/
  });

  //When mouse goes off the selector: show current color
  selector.addEventListener("mouseout", function(event){
    index = parseInt(event.target.getAttribute('data-index'));
    this.style.backgroundColor = colorlist[index];
  });
}


//First Iteration
/*
  document.getElementById("button").addEventListener("click", function(){
    this.parentElement.parentElement.style.backgroundColor = "green";
  });*/