import {getMealIdsFromLs} from './localStorage.js';
import createFavMeal from './createFavMeal.js';
import {getMealsById} from './apis.js';

// dom elements:
const favMealsEl = document.getElementById('favMeals');

// get all favorite meals:
async function getAllFavMeals() {
    const mealsIds = getMealIdsFromLs();
    // clean container:
    favMealsEl.innerHTML = '';
    for(let i = 0; i < mealsIds.length; i++) {
        const meal = await getMealsById(mealsIds[i]);
        createFavMeal(meal);
    }
}

export default getAllFavMeals;