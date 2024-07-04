import { useEffect, useState } from 'react';
import * as veggieService from '../services/veggiesServiceSupabase';
import { compareItems } from '../utils/compareItems';
export const useSearch = (array) => {
    const [currentlySelected, setCurrentlySelected] = useState(null);
    const [resultItem, setResultItem] = useState(null);
    const [similarCautionItems, setSimilarCautionItems] = useState([]);

    //getOne request if currentlySelected is not falsey (null) 
    useEffect(() => {
        if (currentlySelected) {
            let oldCount;
            veggieService.getOne(currentlySelected.id)
                .then(res => {
                    const resItem = res[0]; //for Supabase

                    // update the searchCount in DB for the specific item
                    oldCount = resItem.searchCount; //for Supabase 
                    // oldCount = res.searchCount; //for Pocketbase 

                    veggieService.edit(currentlySelected.id, { searchCount: oldCount + 1 })
                        .catch(err => alert(err));

                    // set resultItem to pass on to Results component (Both options available for Pocketbase return and Supabase return)
                    if (Array.isArray(res)) {
                        setResultItem(resItem); //for Pocketbase
                    } else {
                        setResultItem(res); //for Supabase
                    }

                    // Get similar items based on caution if item is Medium & Fruit
                    if (resItem.foodType === 'Fruit' && resItem.recommendation === 'Medium') {
                        setSimilarCautionItems(compareItems(resItem, array, 'Vegetable'));

                        //Get similar items based on caution if item is Medium & Vegetable
                    } else if (resItem.foodType === 'Vegetable' && resItem.recommendation === 'Medium'){
                        setSimilarCautionItems(compareItems(resItem, array, 'Fruit'));
                    }
                })
                .catch(err => alert(err));
        };
    }, [currentlySelected]);

    // create options object to pass to react-select as "options" prop
    const options = [
        ...array.map(i => (
            {
                value: i.veggieName,
                label: i.veggieName,
                id: i.id,
                searchCount: i.searchCount
            }))]
        //sort the options array alphabetically
        .sort((a, b) => a.label.localeCompare(b.label));

    return {
        options,
        setCurrentlySelected,
        currentlySelected,
        resultItem,
        similarCautionItems
    };
}