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