let button = document.querySelector("button");
button.addEventListener("click", displaystats);



let result = document.createElement("div");
result.id = "result";
result.style.backgroundColor = "LightGrey";
document.getElementById("h0").appendChild(result);



function displaystats() {

     let h2 = document.getElementById("h2");
     //Getting values in array 
     let city = h2.options[h2.selectedIndex].value;
     let population = 0, Litracyrate = 0, Language = "";

     switch (city) {

          case "Banglore":
               population = 5648110;
               Litracyrate = 89;
               Language = "Kannada";
               break;

          case "Coimbatore":
               population = 8110;
               Litracyrate = 99;
               Language = "Tamil";
               break;
          case "Erode":
               population = 54687616498;
               Litracyrate = 9;
               Language = "ERODE LANG";
               break;
          case "Mysore":
               population = 56445451110;
               Litracyrate = 80;
               Language = "Kannada MYSORE";
               break;
          case "Delhi":
               population = 86568;
               Litracyrate = 87;
               Language = "HINDI KARAN";
               break;
          case "":
               population = 0;
               Litracyrate = 0;
               Language = "YOU ASSHOLE SELECT APPROPRIATE VALUE";
               break;
     }



     let text = `The Indian City of ${city} population of ${population} with the litracy rate ${Litracyrate}% and they are speaking language is ${Language}`


     document.getElementById("result").innerHTML = text;


     console.log(text);
} 
