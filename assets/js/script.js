//global variables
var searchMealTextEl = document.getElementById("search-meal");
var submitMealButtonEl = document.getElementById("submit-meal");
var ingredientEl = document.getElementById("ingredients");
var instructionEl = document.getElementById("instructions");

//main function for API calls
async function getRandomMeal(ingredient) {
  //get list of meals from api
  const list = await getMealList(ingredient);
  //select random meal from list
  const meal = selectRandomMeal(list);
  //get ingredients for selected meal
  const recipe = await getMealIngredients(meals);
  renderRecipe(recipe);
  console.log(meals);
  console.log(recipe);
}

function getMealList(ingredient) {
  var list = fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.meals;
    });
  return list;
}

function selectRandomMeal(list) {
  // select random meal from list
  //math.random() returns a random number between 0 and 1
  //math.floor rounds down to the nearest integer
  // multiply by list length to get a random index
  let random = Math.floor(Math.random() * list.length);
  console.log(random);
  return list[random];
}

function getMealIngredients(cocktail) {
  var recipe = fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`
  )
    .then((response) => response.json())
    .then((data) => {
      //this only shows the first ingredient
      //you can get more in the same way. the ingredients and instructions are logged in the console.
      console.log(data);
      let recipe = data.meals[0];
      return recipe;
    });
  return recipe;
}

//render cocktail name and ingredients function
function renderRecipe(recipe) {
  let measurementStrings = getRecipeFields(recipe);
  var ingredientsHTML = `
    <h5>${recipe.strMeal}</h5>

    <strong>INGREDIENTS</strong>
    <ul style="list-style-type:none;">
    `;
  for (var i = 0; i < measurementStrings.length; i++) {
    var innerHTML = `
        <li>${measurementStrings[i]}</li>
        `;
    ingredientsHTML += innerHTML;
  }
  ingredientsHTML += "</ul>";
  ingredientEl.innerHTML = ingredientsHTML;

  //render meal instructions and image functional
  var instructionsHTML = `
    <strong>INSTRUCTIONS</strong>
    <p>${recipe.strInstructions}</p>
    <img src="${recipe.strMealThumb}" style="width:250px;">`;

  instructionEl.innerHTML = instructionsHTML;
}

//function to get fields from the response data
function getRecipeFields(recipe) {
  var measurementStrings = [];
  for (var i = 1; i < 16; i++) {
    let ingredient = recipe[`strIngredient${i}`];
    if (ingredient) {
      var measure = recipe[`strMeasure${i}`];
      if (measure) {
        var builtString = `${measure}${ingredient}`;
      } else {
        var builtString = ingredient;
      }
      measurementStrings.push(builtString);
    }
  }
  console.log(measurementStrings);
  return measurementStrings;
}

//listener for meal button
submitMealButtonEl.addEventListener("click", function () {
  var mealIngredient = searchMealTextEl.value;
  getRandomMeal(mealIngredient);
});

getRandomMeal("beef");