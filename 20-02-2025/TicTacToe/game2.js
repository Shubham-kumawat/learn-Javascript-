let boxes = ["", "", "", "", "", "", "", ""];
let btnX =document.getElementById("one");
let btnO = document.getElementById("two") ;
let inputField = document.getElementById("inputButton")
let box = document.querySelectorAll(".box");
let userInput ;

function inputHandler(){
let input =   prompt("enter the number");
 userInput =parseInt(input);

  if(input !== null){
    let selectBox = box[userInput];
    selectBox.style.backgroundColor ="red";
  }else{
    let confirmText =  confirm("are you sure you dont't want to enter a number?");
    console.log(confirmText);
    if(confirmText === false){
      inputHandler();
    } else{
      return 
    }
  }

}

inputField.addEventListener("click", inputHandler);





 

 btnX.disabled = false ;
 btnO.disabled = true ; 
function clickX() {
  let output = "";
  document.getElementById("one").addEventListener("click", function () {
    if (userInput >= 0 && userInput < 9 && boxes[userInput] === "") {
      boxes[userInput] = "X";
      let drawBox = box[userInput].querySelector(".draw");
      drawBox.textContent = "X";
     
    }
  
      btnX.disabled = true;
      btnO.disabled = false;
    
   
  });
}

function clickO() {
  document.getElementById("two").addEventListener("click", function () {
    if (userInput >= 0 && userInput < 9 && boxes[userInput] === "") {
      boxes[userInput] = "O";
       let drawBox = box[userInput].querySelector(".draw");
      drawBox.textContent = "O";
      
    }
  
      btnX.disabled = false;
      btnO.disabled = true;


   
  });
}

clickX();
clickO();
