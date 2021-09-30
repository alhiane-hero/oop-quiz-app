import createRandomMeal from './createRandomMeal.js';

// api url's:
const randomMealsUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
const mealsByIdUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
const searchMeatsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

// get random meals:
async function getRandomMeals() {
    const resp = await fetch(randomMealsUrl);
    const respData = await resp.json();
    createRandomMeal(respData.meals[0], true);
}   

// get meals by id:
async function getMealsById(id) {
    const resp = await fetch(`${mealsByIdUrl}${id}`);
    const respData = await resp.json();
    return respData.meals[0];
}

// get meals by search for it:
async function getMealsBySearch(term) {
    const resp = await fetch(`${searchMeatsUrl}${term}`);
    const respData = await resp.json();
    return respData.meals;
}

export {
    getRandomMeals,
    getMealsById,
    getMealsBySearch
}