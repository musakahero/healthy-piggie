// The function takes the searched item and compares it to all foods (arrayOfItems) by the food type provided (foodTypeToCheck). 
export const compareItems = (resItem, arrayOfItems, foodTypeToCheck) => {

    let similarItems = [];
    let filteredByType = arrayOfItems.filter(i => i.foodType === foodTypeToCheck);

    for (const item of filteredByType) {
        for (const cautionFactor of resItem.caution) {
            if (item.caution !== null && item.caution.includes(cautionFactor)) {
                similarItems.push(item);
            }
        }
    }
    return [...new Set(similarItems)];
}

