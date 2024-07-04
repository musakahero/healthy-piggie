export const compareItems = (resItem, arrayOfItems, foodTypeToCheckAgainst) => {

    let similarItems = [];
    let filteredByType = arrayOfItems.filter(i => i.foodType === foodTypeToCheckAgainst);

    for (const item of filteredByType) {
        for (const cautionFactor of resItem.caution) {
            if (item.caution !== null && item.caution.includes(cautionFactor)) {
                similarItems.push(item);
            }
        }
    }
    let uniqueItems = similarItems.filter((value, index, array) => array.indexOf(value) === index);

    return uniqueItems;

}

