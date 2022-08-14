
var value = -1;
var decrement = 1;
const button = document.querySelectorAll("button");

function decreaseAnimation() {
  var interval = setInterval(() => {
    value += decrement;
    console.log(value);
    if (value===0){
        button.item(0).style.backgroundColor="red";
        button.item(3).style.backgroundColor="white";
        button.item(1).style.backgroundColor="white";
        button.item(2).style.backgroundColor="white";
       }
       if (value===1){
        button.item(1).style.backgroundColor="red";
        button.item(0).style.backgroundColor="white";
        button.item(2).style.backgroundColor="white";
        button.item(3).style.backgroundColor="white";
       }
       if (value===2){
        button.item(2).style.backgroundColor="red";
        button.item(0).style.backgroundColor="white";
        button.item(1).style.backgroundColor="white";
        button.item(3).style.backgroundColor="white";
       }
       if (value===3){
        button.item(3).style.backgroundColor="red";
        button.item(0).style.backgroundColor="white";
        button.item(1).style.backgroundColor="white";
        button.item(2).style.backgroundColor="white";
       }
    if (value == 3) {
      value = -1;
    }
  }, 1000);
}

decreaseAnimation();





/*
    
    const button = document.querySelectorAll("button");

 for(i=0; i<=3; i++){
   if (i===0){
    button.item(0).style.backgroundColor="red";
    button.item(3).style.backgroundColor="white";
    button.item(1).style.backgroundColor="white";
    button.item(2).style.backgroundColor="white";
   }
   if (i===1){
    button.item(1).style.backgroundColor="red";
    button.item(0).style.backgroundColor="white";
    button.item(2).style.backgroundColor="white";
    button.item(3).style.backgroundColor="white";
   }
   if (i===2){
    button.item(2).style.backgroundColor="red";
    button.item(0).style.backgroundColor="white";
    button.item(1).style.backgroundColor="white";
    button.item(3).style.backgroundColor="white";
   }
   if (i===3){
    button.item(3).style.backgroundColor="red";
    button.item(0).style.backgroundColor="white";
    button.item(1).style.backgroundColor="white";
    button.item(2).style.backgroundColor="white";
   }
}
;




    */

  
    /*function myFunction(item, index) {
      console.log(index); 
      
        var color = '#' + Math.random().toString(16).substr(2, 6);
      //var color = '#FF0000';
      console.log(color);
      
        document.getElementById("button"+index).style.backgroundColor = color;
        document.getElementById("button"+index).innerHTML = color;
    }
  }*/
  
  