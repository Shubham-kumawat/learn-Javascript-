let boxes = ["", "", "", "", "", "", "", ""];
let btnX =document.getElementById("one");
let btnO = document.getElementById("two") ;


let currentPlayer = "X";

let index = document.getElementById("boxNumber").addEventListener("input", function () {
    index = this.value;
  });
  let box = document.querySelectorAll(".box");

 btnX.disabled = false ;
 btnO.disabled = true ; 
function clickX() {
  let output = "";
  document.getElementById("one").addEventListener("click", function () {
    if (index >= 0 && index < 9 && boxes[index] === "") {
      boxes[index] = "X";
      let drawBox = box[index].querySelector(".draw");
      drawBox.textContent = "X";
     
    }
  
      btnX.disabled = true;
      btnO.disabled = false;
    
   
  });
}

function clickO() {
  document.getElementById("two").addEventListener("click", function () {
    if (index >= 0 && index < 9 && boxes[index] === "") {
      boxes[index] = "O";
       let drawBox = box[index].querySelector(".draw");
      drawBox.textContent = "O";
      
    }
  
      btnX.disabled = false;
      btnO.disabled = true;


   
  });
}

clickX();
clickO();
