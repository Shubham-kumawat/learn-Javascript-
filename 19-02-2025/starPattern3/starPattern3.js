 
 let row = document.getElementById("number").addEventListener("input", function () {
  row = parseInt(this.value);
});

function printStars(row) {
//  debugger;
  if (row <= 0) {
    return "Please enter a positive integer greater than 0.";
  }

  let result = "";
  for (let i=1; i <= row; i++) {
      let str = "";

    for (let k = row - i; k > 0; k--) {
      str += " " ;
      }
      
      for (let j = 1; j <= i; j++) {
        if(j==i ||i==row||j==1){
              str += "* ";
        }else{
          str += "  ";
        }
        
      }
      
      
      result += str + "\n";
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
