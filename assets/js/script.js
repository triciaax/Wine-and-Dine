//global variables
var searchCocktailTextEl = document.getElementById("search-cocktail");
var submitCocktailButtonEl = document.getElementById("submit-cocktail");
var ingredientEl = document.getElementById("ingredients");
var instructionEl = document.getElementById("instructions");

//main function for API calls
async function getRandomCocktail(ingredient) {
  //get list of cocktails from api
  const list = await getCocktailList(ingredient);
  //select random cocktail from list
  const cocktail = selectRandomCocktail(list);
  //get ingredients for selected cocktail
  const recipe = await getCocktailIngredients(cocktail);
  renderRecipe(recipe);
  console.log(cocktail);
  console.log(recipe);
}

function getCocktailList(ingredient) {
  var list = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.drinks;
    });
  return list;
}

function selectRandomCocktail(list) {
  // select random cocktail from list
  //math.random() returns a random number between 0 and 1
  //math.floor rounds down to the nearest integer
  // multiply by list length to get a random index
  let random = Math.floor(Math.random() * list.length);
  console.log(random);
  return list[random];
}

function getCocktailIngredients(cocktail) {
  var recipe = fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
  )
    .then((response) => response.json())
    .then((data) => {
      //this only shows the first ingredient
      //you can get more in the same way. the ingredients and instructions are logged in the console.
      console.log(data);
      let recipe = data.drinks[0];
      return recipe;
    });
  return recipe;
}

//render cocktail recipe function
function renderRecipe(recipe) {
    let measurementStrings = getRecipeFields(recipe);
    var ingredientsHTML = `
    <h5>${recipe.strDrink}</h5>

    <strong>INGREDIENTS</strong>
    <ul style="list-style-type:none;">
    `
    for (var i = 0; i < measurementStrings.length; i++) {
        var innerHTML = `
        <li>${measurementStrings[i]}</li>
        `
        ingredientsHTML += innerHTML;
    }
    ingredientsHTML += '</ul>';
    ingredientEl.innerHTML =ingredientsHTML;


    //render cocktail instructions function
    var instructionsHTML= `
    <strong>INSTRUCTIONS</strong>
    <p>${recipe.strInstructions}</p>`

    instructionEl.innerHTML =instructionsHTML;
}

// function to get fields from the response data
function getRecipeFields(recipe) {
    var measurementStrings = [];
    for (var i = 1; i < 16; i++) {
        let ingredient = recipe[`strIngredient${i}`]
        if (ingredient) {
            var measure = recipe[`strMeasure${i}`]
            if (measure) {
                var builtString = `${measure}${ingredient}`
            } else {
                var builtString = ingredient
            }
            measurementStrings.push(builtString);
        }
    }
    console.log(measurementStrings)
    return measurementStrings;
}

//listener for cocktail button
submitCocktailButtonEl.addEventListener("click", function () {
  var cocktailIngredient = searchCocktailTextEl.value;
  getRandomCocktail(cocktailIngredient);
});

getRandomCocktail("vodka");
