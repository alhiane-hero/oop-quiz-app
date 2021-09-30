// add mealId's to localStorage:
function addMealIdsToLs(mealId) {
    const mealIds = getMealIdsFromLs();
    localStorage.setItem('mealId', JSON.stringify([...mealIds, mealId]));
}

// remove mealId's from localStorage:
function removeMealIdsFromLs(mealId) {
    const mealIds = getMealIdsFromLs();
    localStorage.setItem('mealId', JSON.stringify(mealIds.filter(id => id !== mealId)));
}

// get mealId's from localStorage:
function getMealIdsFromLs() {
    const mealIds = JSON.parse(localStorage.getItem('mealId'));
    return localStorage.getItem('mealId') !== null ? mealIds : [];
}

export {
    addMealIdsToLs,
    removeMealIdsFromLs,
    getMealIdsFromLs
}