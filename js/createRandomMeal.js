import {favHeart, whenDescBtnClicked} from './importantFunc.js';

// dom elements:
const mealsEl = document.getElementById('meals');

// create random meals structure:
function createRandomMeal(mealData, random = false) {
    let mealEl = document.createElement('div');
    mealEl.classList.add('meal');
    let mealStr = `<div class="head">
        ${random === true ? '<h3>Recipe Of The Day</h3>' : ''}
        <img src=${mealData.strMealThumb} alt=${mealData.strMeal}>
        <div class='desc-btn'>
            <button>Meal Desc</button>
        </div>
    </div>
    <div class="body">
        <p class="meal-name">${mealData.strMeal}</p>
        <span class="fav-icon">
            <i class="fas fa-heart"></i>
        </span>
    </div>`;
    mealEl.innerHTML = mealStr;

    const favBtn = mealEl.querySelector('.body .fav-icon');
    favBtn.addEventListener('click', _ => favHeart(favBtn, mealData));

    const descBtn = mealEl.querySelector('.head .desc-btn button');
    descBtn.addEventListener('click', _ => whenDescBtnClicked(mealData));

    mealsEl.appendChild(mealEl);
}

export default createRandomMeal;