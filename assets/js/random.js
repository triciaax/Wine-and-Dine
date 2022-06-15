//Fetching API for random testing.
async function drinklist(){
    var drink="https://www.thecocktaildb.com/api/json/v1/1/random.php";

    let data1 =  await fetch(drink)
      .then(response => response.json());
      var {strDrink, strDrinkThumb, strInstructions} = data1.drinks[0];
      document.getElementById("Drinkname").textContent=strDrink;
      document.getElementById("Drinkpictures").innerHTML = '<img src="' + strDrinkThumb + '"alt="Girl in a jacket" width="100" height="100" >';
      document.getElementById("description").textContent='Instruction=' + strInstructions;

      
};