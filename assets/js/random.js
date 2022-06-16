//Fetching API for random testing
  

async function drinklist(){
  
    var drink="https://www.thecocktaildb.com/api/json/v1/1/random.php";

    let data1 =  await fetch(drink)
      .then(response => response.json());
      console.log(data1.drinks[0]);
      var {strDrink, strDrinkThumb, strInstructions} = data1.drinks[0];
      var {strIngredient1, strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,
        strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,
        strIngredient13,strIngredient14,strIngredient15}=data1.drinks[0];
      var {strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,
        strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15}=data1.drinks[0];
        console.log(strIngredient2);
      console.log(strIngredient1);
   

      document.getElementById("Drinkname").textContent=strDrink;
      document.getElementById("Drinkpictures").innerHTML = '<img src="' + strDrinkThumb + '"alt="A Drink of Alcohol" width="100" height="100" >';
      document.getElementById("description").textContent='Instruction=' + strInstructions;
      console.log(data1.drinks[0].strIngredient1);
      document.getElementById("ing1").textContent=strIngredient1;
      document.getElementById("ms1").textContent=strMeasure1;
      document.getElementById("ing2").textContent=strIngredient2;
      document.getElementById("ms2").textContent=strMeasure2;
      document.getElementById("ing3").textContent=strIngredient3;
      document.getElementById("ms3").textContent=strMeasure3;
      document.getElementById("ing4").textContent=strIngredient4;
      document.getElementById("ms4").textContent=strMeasure4;
      document.getElementById("ing5").textContent=strIngredient5;
      document.getElementById("ms5").textContent=strMeasure5;
      document.getElementById("ing6").textContent=strIngredient6;
      document.getElementById("ms6").textContent=strMeasure6;
      document.getElementById("ing7").textContent=strIngredient7;
      document.getElementById("ms7").textContent=strMeasure7;
      document.getElementById("ing8").textContent=strIngredient8;
      document.getElementById("ms8").textContent=strMeasure8;
      document.getElementById("ing9").textContent=strIngredient9;
      document.getElementById("ms9").textContent=strMeasure9;
      document.getElementById("ing10").textContent=strIngredient10;
      document.getElementById("ms10").textContent=strMeasure10;
      document.getElementById("ing11").textContent=strIngredient11;
      document.getElementById("ms11").textContent=strMeasure11;
      document.getElementById("ing12").textContent=strIngredient12;
      document.getElementById("ms12").textContent=strMeasure12;
      document.getElementById("ing13").textContent=strIngredient13;
      document.getElementById("ms13").textContent=strMeasure13;
      document.getElementById("ing14").textContent=strIngredient14;
      document.getElementById("ms14").textContent=strMeasure14;
      document.getElementById("ing15").textContent=strIngredient15;
      document.getElementById("ms15").textContent=strMeasure15;



      
  
        


      
      
        
      };
      


      
//};

      


      
