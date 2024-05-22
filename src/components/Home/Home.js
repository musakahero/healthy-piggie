import { useEffect, useState } from 'react';
import { Results } from '../Results/Results';
import styles from './Home.module.css';
import * as veggiesService from '../../services/veggiesService';
import { useSearch } from '../../hooks/useSearch';
import { Search } from '../Search/Search';
import { PopSearches } from '../PopSearches/PopSearches';

export const Home = (props) => {
    const [allVeggies, setAllVeggies] = useState([]);

    //Search functionality (useSearch custom hook)
    const { options,
        resultItem,
        setCurrentlySelected,
        currentlySelected } = useSearch(allVeggies);

    // Fetch all veggies
    useEffect(() => {
        veggiesService.getAll()
            .then(result => {
                setAllVeggies(result);
                console.log(result);

            })
            .catch(err => alert(new Error("Unable to reach our piggie base, please retry later!").message));
    }, []);


    return (
        <>
            {/* Introductory paragraph */}
            <p className={styles.intro}>You're about to feed your piggie with a special treat? Check here if it's a good idea!</p>

            {/* Search component */}
            <Search
                setCurrentlySelected={setCurrentlySelected}
                options={options}
                currentlySelected={currentlySelected} />


            {/* Results section */}
            <section className={styles.results}>
                {/* Show results section only if foundItem is not falsey */}
                {resultItem && <Results resultItem={resultItem} />}
            </section>
            {/* Most popular searches section */}
            <section className={styles["pop-questions"]}>
                <PopSearches allVeggies={allVeggies}
                    setCurrentlySelected={setCurrentlySelected}
                />
            </section>
        </>
    )
}