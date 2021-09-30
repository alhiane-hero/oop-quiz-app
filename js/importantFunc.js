import createMealInfoStr from './createMealInfoStr.js';
import {addMealIdsToLs, removeMealIdsFromLs} from './localStorage.js';
import getAllFavMeals from './getAllFavMeals.js';

// dom elements:
const mealsEl = document.getElementById('meals');
const popupEl = document.getElementById('popup');

// when fav heart btn clicked:
function favHeart(favBtn, mealData) {
    if (!favBtn.classList.contains('active')) {
        favBtn.classList.add('active');
        addMealIdsToLs(mealData.idMeal);
    } else {
        favBtn.classList.remove('active');
        removeMealIdsFromLs(mealData.idMeal);
    }
    getAllFavMeals();
}

// when desc btn clicked:
function whenDescBtnClicked(mealData) {
    // clear container:
    mealInfo.innerHTML = '';
    createMealInfoStr(mealData);
    popupEl.classList.add('show');
}

// remove favorite meal:
function removeFavMeal(mealData) {
    removeMealIdsFromLs(mealData.idMeal);
    getAllFavMeals();
    let FavMealImgSrc = mealData.strMealThumb;
    let mealsImgSrc = mealsEl.querySelectorAll('.meal');
    mealsImgSrc.forEach(mealEl => {
        let imgSrc = mealEl.querySelector('.head img').src;
        if (FavMealImgSrc === imgSrc) {
            mealEl.querySelector('.body .fav-icon').classList.remove('active');
        }
    });
}

// error msg func:
function errorMsg(msg) {
    let errorEl = document.createElement('div');
    errorEl.className = `errorEl`;
    let errorMsg = `<p>${msg}<p>`;
    errorEl.innerHTML = errorMsg;
    mealsEl.appendChild(errorEl);
}

export {
    favHeart,
    whenDescBtnClicked,
    removeFavMeal,
    errorMsg
}