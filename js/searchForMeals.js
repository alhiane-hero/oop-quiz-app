import {getMealsBySearch} from './apis.js';
import createRandomMeal from './createRandomMeal.js';
import {errorMsg} from './importantFunc.js';

// dom elements:
const mealsEl = document.getElementById('meals');

// search for meals:
async function searchForMeals() {
    // clear container:
    mealsEl.innerHTML = '';
    let term = searchInput.value;
    const meals = await getMealsBySearch(term);
    if (meals) {
        meals.forEach(meal => createRandomMeal(meal));
    } else {
        errorMsg('Ther Is Not Meal With That Name!');
    }
}

export default searchForMeals;