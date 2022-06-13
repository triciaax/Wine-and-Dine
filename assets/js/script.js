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

//render cocktail function


//listener for cocktail button
submitCocktailButtonEl.addEventListener("click", function(){
    var cocktailIngredient = searchCocktailTextEl.value;
    getRandomCocktail(cocktailIngredient);
})

getRandomCocktail("vodka")