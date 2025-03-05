// let n = document.getElementById("number").addEventListener("input", function () {
//   n = this.value;
// });

// function printStars(n) {
//   if (n <= 0) {
//     return "Please enter a positive integer greater than 0.";
//   }

//   let result = "";
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= n; j++) {
//       // if(i == 1 || i == Math.ceil(n / 2) || i == n || (i > 1 && j == 1) || (i == n - 1 && j == n)){
//         if(i==1 || i==3 || i==n||(i ==2 && j == 1) || (i == n-1 && j == n)){
//       str += "* ";
//       }else{
//          str += "  ";
//       }
//     }
//     console.log(str);
//     result += str + "<br>";
//   }
//   return result;
// }

// document.getElementById("submit").addEventListener("click", function () {
//   document.getElementById("result").innerHTML = printStars(n);
// });

// document.getElementById("clear").addEventListener("click", function () {
//   document.getElementById("number").value = "";
//   document.getElementById("result").innerHTML = "";
// });


