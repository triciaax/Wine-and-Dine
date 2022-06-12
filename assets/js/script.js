
// chicken search
var getData = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    return console.log(jsonObject);
  });

// beef search
var getData = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=beef')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    return console.log(jsonObject);
  });


// tofu search
var getData = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=tofu')
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    return console.log(jsonObject);
  });
