import {removeFavMeal, whenDescBtnClicked} from './importantFunc.js';

// dom elements:
const favMealsEl = document.getElementById('favMeals');

// create favorite meal structure:
function createFavMeal(mealData) {
    let favMealEl = document.createElement('div');
    favMealEl.className = 'fav-meal';
    let favMealStr = `<div class="abslt">
        <img src=${mealData.strMealThumb} alt=${mealData.strMeal}>
        <button class="remove-fav-btn">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <p class="meal-name">Piri-piri chicken and slaw</p>`;
    favMealEl.innerHTML = favMealStr;

    let rmvFavBtn = favMealEl.querySelector('.abslt .remove-fav-btn');
    rmvFavBtn.addEventListener('click', _ => removeFavMeal(mealData));

    let favImg = favMealEl.querySelector('.abslt img');
    favImg.addEventListener('click', _ => whenDescBtnClicked(mealData)); 

    favMealsEl.appendChild(favMealEl);
}

export default createFavMeal;