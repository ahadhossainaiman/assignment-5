// search-peart
document.getElementById('btn').addEventListener('click', function() {
    document.getElementById("search-id").style.display = "block";
    displayMeal();  
});


const mealList = document.getElementById('foodIteam');
const showDetails = document.getElementById('showDetails');

// meal-name-part
const displayMeal = () => {
    const meal = document.getElementById('searchMeal').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
.then(res => res.json())
.then(data => {
        let mealInfo = "";
        if(data.meals){
            data.meals.forEach(meal => {
                mealInfo += `
                <div   onclick="foodDetails('${meal.idMeal}')"  class="food-wrapper">
               <img  src="${meal.strMealThumb}" alt="food image">
               <h3>${meal.strMeal}</h3>    
            </div>  
            `;
            });
            mealList.classList.remove('notFound');
        } else{
            mealInfo = "Sorry,didn't find any meal!";
            mealList.classList.add('notFound');
            showDetails.innerHTML = '';
        }
        mealList.innerHTML = mealInfo;
    });
}

// mealDetails-part
const foodDetails = detailsId =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailsId}`)
        .then((res) => res.json())
        .then((data) => {
            let detailsInfo =""
            data.meals.forEach((meal) => {
                detailsInfo = `
                              <div class="foodDetailsContainer">
                               <img  src="${meal.strMealThumb}" alt="food image">
                                 <h2>${meal.strMeal}</h2>
                                  <h3>Ingredient :</h3>
                                <p><span>${meal.strMeasure1}</span> <span>${meal.strIngredient1}</span> </p>
                                <p><span ${meal.strMeasure2}</span> <span>${meal.strIngredient2}</span> </p>
                                <p><span>${meal.strMeasure3}</span> <span>${meal.strIngredient3}</span> </p>
                                <p><span>${meal.strMeasure4}</span> <span>${meal.strIngredient4}</span> </p>
                                <p><span>${meal.strMeasure5}</span> <span>${meal.strIngredient5}</span> </p>
                                <p><span>${meal.strMeasure6}</span> <span>${meal.strIngredient6}</span> </p>
                                <p><span>${meal.strMeasure7}</span> <span>${meal.strIngredient7}</span> </p>
                                <p><span>${meal.strMeasure8}</span> <span>${meal.strIngredient8}</span> </p>
                                <p><span>${meal.strMeasure9}</span> <span>${meal.strIngredient9}</span> </p>
                                <p><span>${meal.strMeasure10}</span> <span>${meal.strIngredient10}</span></p>
                                <p><span>${meal.strMeasure11}</span> <span>${meal.strIngredient11}</span> </p>
                                
                              </div>
                                `;
                         });
                        showDetails.innerHTML = detailsInfo ;
        })
}









