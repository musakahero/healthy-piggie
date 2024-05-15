import { useEffect, useState } from 'react';
import { Results } from '../Results/Results';
import styles from './Home.module.css';
import * as veggiesService from '../../services/veggiesService';
import { useSearch } from '../../hooks/useSearch';
import { Search } from '../Search/Search';
export const Home = ({ props }) => {

    const [allVeggies, setAllVeggies] = useState([]);

    // Fetch all veggies
    useEffect(() => {
        veggiesService.getAll()
            .then(result => {
                setAllVeggies(result);
            })
            .catch(err => alert(err));
    }, []);

    // Search functionality
    const { foundItems, onSearchHandler, onChangeHandler, changeInputValue, inputValue } = useSearch(allVeggies, '');

    return (
        <>
            {/* Introductory paragraph */}
            <p className={styles.intro}>You're about to feed your piggie with a special treat? Check here if it's a good idea!</p>
            <Search
                allVeggies={allVeggies}
                onSearchHandler={onSearchHandler}
                onChangeHandler={onChangeHandler}
                changeInputValue={changeInputValue}
                inputValue={inputValue}
                foundItems={foundItems} />
            {/* Results section */}
            <section className={styles.results}>
                {foundItems.length === 1 ? <Results foundVeggie={foundItems[0]} /> : null}
            </section>
            {/* Most popular searches section */}
            <section className={styles["pop-questions"]}>
                <h2>Most popular searches:</h2>
                <ul>
                    <li>Can my piggie eat cucumber?</li>
                    <li>Can my piggie eat onions?</li>
                    <li>Can my piggie eat nuts?</li>
                </ul>
            </section>
        </>
    )
}