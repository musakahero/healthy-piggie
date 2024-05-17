import { useEffect, useState } from 'react';
import * as veggieService from '../services/veggiesService';

export const useSearch = (array) => {
    const [currentlySelected, setCurrentlySelected] = useState(null);
    const [resultItem, setResultItem] = useState(null);

    //getOne request if currentlySelected is not falsey (null) 
    useEffect(() => {
        if (currentlySelected) {
            let oldCount;
            veggieService.getOne(currentlySelected.id)
                .then(res => {
                    // update the searchCount in DB for the specific item
                    oldCount = res.searchCount;
                    console.log(`oldCount is ${oldCount}`);
                    veggieService.edit(currentlySelected.id, { searchCount: oldCount + 1 })
                        .then(res => console.log(`updated searchCount to ${res.searchCount}`))
                        .catch(err => alert(err));
                    // set resultItem to pass on to Results component
                    setResultItem(res);
                })
                .catch(err => alert(err));
        };
    }, [currentlySelected]);

    // create options object to pass to react-select as "options" prop
    const options = [...array.map(i => (
        {
            value: i.veggieName,
            label: i.veggieName,
            id: i.id,
            searchCount: i.searchCount
        }))];

    return {
        options,
        setCurrentlySelected,
        currentlySelected,
        resultItem
    };
}