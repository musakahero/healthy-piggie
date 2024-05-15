import { useState } from 'react';

export const useSearch = (array, initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue);
    
    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }
    const foundItems = array.filter(i => i.veggieName.includes(inputValue.toLowerCase()));

    // HANDLER NOT IN USE CURRENTLY
    const onSearchHandler = (e) => {
        e.preventDefault();
    };

    const changeInputValue = (newInputValue) => {
        setInputValue(newInputValue);
    }

    return { foundItems, onSearchHandler, onChangeHandler, changeInputValue, inputValue };
}