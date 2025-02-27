debugger

let boxes = ["", "", "", "", "", "", "", ""];
let btnX =document.getElementById("one");
let btnO = document.getElementById("two") ;
let inputs =[];


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
      
      if(inputs.length >= 6){
          let removedInput = inputs.shift()
          let removedIndex = removedInput.index
          boxes[removedIndex] = ""
          let drawBox = box[removedIndex].querySelector(".draw");
          drawBox.textContent = "";
        }
        inputs.push({ player: "X", index: index });
        boxes[index] = "X";
        
    
      
      let drawBox = box[index].querySelector(".draw");
      drawBox.textContent = "X";
      console.log(inputs);
     
    }
  
      btnX.disabled = true;
      btnO.disabled = false;
    
   
  });
}

function clickO() {
  document.getElementById("two").addEventListener("click", function () {
    if (index >= 0 && index < 9 && boxes[index] === "") {
      boxes[index] = "O";
       
    
       if(inputs.length >= 6){
          let removedInput = inputs.shift()
          let removedIndex = removedInput.index
          boxes[removedIndex] = ""
          let drawBox = box[removedIndex].querySelector(".draw");
          drawBox.textContent = "";
        }
        inputs.push({ player: "O", index: index });
        boxes[index] = "O";
        
    
      
      let drawBox = box[index].querySelector(".draw");
      drawBox.textContent = "O";
      console.log(inputs);

    }
  
      btnX.disabled = false;
      btnO.disabled = true;


   
  });
}

clickX();
clickO();
