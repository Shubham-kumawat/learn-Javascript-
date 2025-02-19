let boxes = ["", "", "", "", "", "", "", ""];



let currentPlayer = "X";

let index = document
  .getElementById("boxNumber")
  .addEventListener("input", function () {
    index = this.value;
  });

function clickX() {
  let output = "";
  document.getElementById("one").addEventListener("click", function () {
    if (index >= 0 && index < 9 && boxes[index] === "") {
      boxes[index] = "X";
      document.getElementsByClassName("box")[index].textContent = "X";
    }
   
  });
}

function clickO() {
  document.getElementById("two").addEventListener("click", function () {
    if (index >= 0 && index < 9 && boxes[index] === "") {
      boxes[index] = "O";
      document.getElementsByClassName("box")[index].textContent = "O";
    }
   
  });
}

clickX();
clickO();
