//main function for API calls
async function getRandomCocktail(ingredient) {
    //get list of cocktails from api
    const list = await getCocktailList(ingredient);
    //select random cocktail from list
    const cocktail = selectRandomCocktail(list);
    //get ingredients for selected cocktail
    const ingredients = await getCocktailIngredients(cocktail);
    console.log(cocktail)
    console.log(ingredients)
}

function getCocktailList(ingredient) {
    var list = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data.drinks;
        }
        )
    return list;
}


getRandomCocktail("gin")


function drink1(element) {
    return document.createElement(element);


}


//Fetching API for random testing.
async function drinklist(){
    var drink="https://www.thecocktaildb.com/api/json/v1/1/random.php";

    let data =  await fetch(drink)
      .then(response => response.json());
      var {strDrink, strDrinkThumb, strInstructions} = data.drinks[0];
      document.getElementById("Drinkname").textContent=strDrink;
      document.getElementById("Drinkpictures").innerHTML = '<img src="' + strDrinkThumb + '"alt="Girl in a jacket" width="100" height="100" >';
      document.getElementById("description").textContent='Instruction=' + strInstructions;

      
};

function selectRandomCocktail(list) {
    // select random cocktail from list
    //math.random() returns a random number between 0 and 1
    //math.floor rounds down to the nearest integer
    // multiply by list length to get a random index
    let random = Math.floor(Math.random() * list.length);
    console.log(random)
    return list[random];
}

function getCocktailIngredients(cocktail) {
    var ingredients = fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`)
        .then(response => response.json())
        .then(data => {
            //this only shows the first ingredient
            //you can get more in the same way. the ingredients and instructions are logged in the console.
            console.log(data)
            let ingredients = data.drinks[0].strIngredient1;
            return ingredients;
        }
        )
    return ingredients;
}
  b17e263c2adb5dc7f284d659790dce966c66927
