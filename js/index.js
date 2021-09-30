import {getRandomMeals} from './apis.js';
import getAllFavMeals from './getAllFavMeals.js';
import searchForMeals from './searchForMeals.js';

const formEl = document.getElementById('form');
const searchInput = document.getElementById('searchInput');
const popupEl = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// get random meals:
getRandomMeals();

// close meal info popup:
closePopup.addEventListener('click', _ => popupEl.classList.remove('show'));

// get all favorite meals:
getAllFavMeals();

// submit form:
formEl.addEventListener('submit', event => {
    event.preventDefault();
    searchForMeals();
    searchInput.value = '';
    searchInput.focus();
});