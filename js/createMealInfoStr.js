// dom elements:
const mealInfo = document.getElementById('mealInfo');

// get all ingredients:
function getAllIngrdts(mealData) {
    let ingrdts = [];
    for (let i = 1; i <= 20; i++) {
        if (mealData[`strIngredient${i}`]) {
            ingrdts.push(`${mealData[`strIngredient${i}`]} / ${mealData[`strMeasure${i}`]}`);
        } else break;
    }
    return ingrdts;
}

// create meal info structure:
function createMealInfoStr(mealData) {
    let ingrdts = getAllIngrdts(mealData);
    let emptyDiv = document.createElement('div');
    let infoStr = ` <h2 class="meal-name">Tuna and Egg Briks</h2>
    <div class="img">
        <img src=${mealData.strMealThumb} alt=${mealData.strMeal}>
    </div>
    <p class="desc">${mealData.strInstructions}</p>
    <ul class="ingrdts">
        <h3>Ingredients / Measures</h3>
        <div class="ingrdts-list">
            ${ingrdts.map(ingrdt => `<li>- ${ingrdt}</li>`).join('')}
        </div>
    </ul>`;
    emptyDiv.innerHTML = infoStr;
    mealInfo.appendChild(emptyDiv);
}

export default createMealInfoStr;