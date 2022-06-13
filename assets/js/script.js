//global variables
var searchCocktailTextEl = document.getElementById("search-cocktail");
var submitCocktailButtonEl = document.getElementById("submit-cocktail");

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

//render cocktail function
function renderRecipe(recipe) {
    let string = getRecipeFields(recipe);
  headerInnerHtml = `
<h5>${recipe.strDrink}</h5>

<strong>INGREDIENTS</strong>
<ul style="list-style-type:none;">
  <li>${recipe.strMeasure1} ${recipe.strIngredient1}</li>
  <li>${recipe.strMeasure2} ${recipe.strIngredient2}</li>
  <li>${recipe.strMeasure3} ${recipe.strIngredient3}</li>
  <li>${recipe.strMeasure4} ${recipe.strIngredient4}</li>
  <li>${recipe.strMeasure5} ${recipe.strIngredient5}</li>
  <li>${recipe.strMeasure6} ${recipe.strIngredient6}</li>
  <li>${recipe.strMeasure7} ${recipe.strIngredient7}</li>
  <li>${recipe.strMeasure8} ${recipe.strIngredient8}</li>
  <li>${recipe.strMeasure9} ${recipe.strIngredient9}</li>
  <li>${recipe.strMeasure10} ${recipe.strIngredient10}</li>
  <li>${recipe.strMeasure11} ${recipe.strIngredient11}</li>
  <li>${recipe.strMeasure12} ${recipe.strIngredient12}</li>
  <li>${recipe.strMeasure13} ${recipe.strIngredient13}</li>
  <li>${recipe.strMeasure14} ${recipe.strIngredient14}</li>
  <li>${recipe.strMeasure15} ${recipe.strIngredient15}</li>

</ul>

<strong>INSTRUCTIONS</strong>
<p>${recipe.strInstructions}</p>
`;
}

// function to get fields from the response data
function getRecipeFields(recipe) {
    var measurementStrings = [];
    var ingredients = [];
    var measures = [];
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
