//master function to select random cocktail based on ingredient
//function is async and await to get resolve the promises in console
async function getRandomCocktail(ingredient) {
    var list = await getCocktailList(ingredient)
    console.log(list)
}

//function to get a list of cocktails based on ingredient selected. 
//The API url will be dynamic based on ingredient
function getCocktailList(ingredient) {
    var cocktailList = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => {
            return data.drinks;
        })
    return cocktailList;
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
