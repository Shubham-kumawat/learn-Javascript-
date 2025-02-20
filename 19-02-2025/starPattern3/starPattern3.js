 let row = document.getElementById("number").addEventListener("input", function () {
  row = parseInt(this.value);
});

function printStars(row) {
  if (row <= 0) {
    return "Please enter a positive integer greater than 0.";
  }

  let result = "";
  for (let i=1; i <= row; i++) {
      let str = "";

    for (let k = row - 1; k>0; k--) {
      str += "&nbsp;&nbsp;" ;
      }
      
      for (let j = 1; j <= i; j++) {
        str += "* ";
      }
      
      
      result += str + "<br>";
      console.log(str);
    
  }
  
      return result;
  
  
}


document.getElementById("submit").addEventListener("click", function () {
  document.getElementById("result").innerHTML =  printStars(row);
});

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("number").value = "";
  document.getElementById("result").innerHTML = "";
});
