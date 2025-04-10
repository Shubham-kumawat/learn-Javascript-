row = document.getElementById("number").addEventListener("input", function () {
  row = this.value;
});

let boxTemp = `<div class= "boxes"><input id = "box" type = "text"></div>`;

function printBoxes(row) {
  if (row <= 0) {
    return "Please enter a positive integer greater than 0.";
  }

  let result = "";
  for (let i = 0; i < row; i++) {
    let str = "";
    for (let j = 0; j < row; j++) {
      str += boxTemp ;
    }

    console.log(str);
    result += `<div style="display: flex;">${str}</div>`;
  }
  return result;
}
function validateInput(input) {
  input.value = input.value.replace(/[^0-9]/g, ""); // Allow only numbers
}

document.getElementById("CreateBox").addEventListener("click", function () {
  document.getElementById("result").innerHTML = printBoxes(row);
});

document.getElementById("CheckMatrix").addEventListener("click", function () {
  document.getElementById("number").value = "";
  document.getElementById("result").innerHTML = "";
});
