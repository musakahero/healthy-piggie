import { useSearch } from '../../hooks/useSearch';
import styles from './Search.module.css';

export const Search = ({ onSearchHandler, onChangeHandler, changeInputValue, inputValue, foundItems }) => {

    // autocomplete
    const optionClickHandler = (e) => {
        const newInput = e.target.innerText;
        changeInputValue(newInput);
    }

    return (
        // {/* Search bar */ }
        <div className={styles.search}>
            <form onSubmit={onSearchHandler} className={styles['search-form']}>
                <label htmlFor="search" className={styles["input-label"]} >Can my guinea pig eat...</label>
                <div className={styles["input-container"]}>
                    <input
                        className={styles.input}
                        type="text"
                        name="search"
                        onChange={onChangeHandler}
                        value={inputValue}
                        placeholder='Enter food name' /> ?

                    {/* Auto-complete container (show if input length != 0) */}
                    {inputValue.length !== 0
                        && foundItems.length !== 0
                        && inputValue !== foundItems[0].veggieName ?
                        <ul className={styles['auto-container']}>
                            {foundItems.map(i => <li key={i.id} onClick={optionClickHandler}>{i.veggieName}</li>)}
                        </ul> : null
                    }

                </div>
                {/* <label htmlFor="weight" >My guinea pig weighs between...</label>
                    <select className={styles.weight} name="weight">
                        <option value="0.5">0.5 kg - 1.5 kg</option>
                        <option value="1.5">1.5 kg - 1.5 kg</option>
                        <option value="2.5">2.5 kg - 1.5 kg</option>
                        <option value="3.5">3.5 kg - 1.5 kg</option>
                        <option value="4.5">4.5 kg - 1.5 kg</option>
                    </select> */}
                {/* <button type="submit" className={styles["search-btn"]}>Go</button> */}
            </form>
        </div >
    )
}