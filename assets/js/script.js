//global variables
var searchCocktailTextEl = document.getElementById("search-cocktail");
var submitCocktailButtonEl = document.getElementById("submit-cocktail");
var ingredientEl = document.getElementById("ingredients");
var instructionEl = document.getElementById("instructions");

//main function for API calls
 
var myform = document.querySelector("#form1");
var myIngredient = document.querySelector("#Ingredient1");

var formSubmitHandler = function(event) {  
    event.preventDefault();//prevent from autosubmitting
  
    console.log(event);
    var Ingredient = myIngredient.value.trim();

    if (Ingredient) {
      getRandomCocktail(Ingredient);
      myIngredient.value = "";
    } else {
      alert("Please enter a valid ingredient to start");
      console.log("Event call works");
    
    }

    
   
    
};

myform.addEventListener("submit", formSubmitHandler);


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


//getRandomCocktail("gin")

function drink1(element) {
    return document.createElement(element);


}


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
<<<<<<< HEAD
    var ingredients = fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`)
        .then(response => response.json())
        .then(data => {
            //this only shows the first ingredient
            //you can get more in the same way. the ingredients and instructions are logged in the console.
            console.log(data)


            //Code added push return input to index.html for Display
            var {strDrink, strDrinkThumb, strInstructions} = data.drinks[0];
      document.getElementById("Drinkname1").textContent=strDrink;
      document.getElementById("Drinkpictures1").innerHTML = '<img src="' + strDrinkThumb + '"alt="Girl in a jacket" width="100" height="100" >';
      document.getElementById("description1").textContent='Instruction=' + strInstructions;
      console.log("Still work,did not break the function links :-)");


            let ingredients = data.drinks[0].strIngredient1;
            return ingredients;
        }
        )
    return ingredients;
}
  /*b17e263c2adb5dc7f284d659790dce966c66927
*/
=======
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

//render cocktail name and ingredients function
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


    //render cocktail instructions and image function
    var instructionsHTML= `
    <strong>INSTRUCTIONS</strong>
    <p>${recipe.strInstructions}</p>
    <img src="${recipe.strDrinkThumb}" style="width:250px;">`

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
>>>>>>> ecaf99e693e1c3a758081a62688b522fc59ec20a
