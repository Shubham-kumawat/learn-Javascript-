row = document
        .getElementById("number")
        .addEventListener("input", function () {
          row = this.value;
        });

      function printStars(row) {
        if(row <= 0){
            return "Please enter a positive integer greater than 0."
        }

        let result = ""
        for (let i = 1; i <= row; i++) {
          let str = "";
          for (let j = 1; j <= i; j++) {
            str += "* ";
          }
          console.log(str);
          result += str + "<br>";
        }
        return result
      }

      document.getElementById("submit").addEventListener("click", function () {
        document.getElementById("result").innerHTML =  printStars(row);
      });

      document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("number").value = "";
        document.getElementById("result").innerHTML = "";
      });