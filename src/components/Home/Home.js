import { useEffect, useRef, useState } from 'react';
import { Results } from '../Results/Results';
import styles from './Home.module.css';
import * as veggiesService from '../../services/veggiesServiceSupabase';
import { useSearch } from '../../hooks/useSearch';
import { Search } from '../Search/Search';
import { PopSearches } from '../PopSearches/PopSearches';
import { Loading } from '../Loading/Loading';

export const Home = (props) => {
    const [allVeggies, setAllVeggies] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const resultsRef = useRef(null);

    //Search functionality (useSearch custom hook)
    const { options,
        resultItem,
        setCurrentlySelected,
        currentlySelected,
        similarCautionItems } = useSearch(allVeggies);

    // Fetch all veggies
    useEffect(() => {
        setShowLoading(true);
        veggiesService.getAll()
            .then(result => {
                setAllVeggies(result);
            })
            .then(() => setShowLoading(false))
            .catch(err => alert(new Error("Unable to reach our piggie base, please retry later!").message));
    }, []);


    return (
        <>
            {showLoading ? <div className={styles["spinner-container"]}><Loading /></div>
                : <>
                    {/* //Search component */}
                    <Search
                        setCurrentlySelected={setCurrentlySelected}
                        options={options}
                        currentlySelected={currentlySelected} />

                    {/* //Results section */}
                    <section className={styles.results} ref={resultsRef}>
                        {/* //Show results section only if foundItem is not falsey */}
                        {resultItem && <Results 
                        resultItem={resultItem} 
                        similarCautionItems={similarCautionItems}
                        setCurrentlySelected={setCurrentlySelected}
                        resultsRef = {resultsRef} />}
                    </section>
                    {/* // Most popular searches section */}
                    <section className={styles["pop-questions"]}>
                        <PopSearches allVeggies={allVeggies}
                            setCurrentlySelected={setCurrentlySelected}
                            resultsRef = {resultsRef}
                        />
                    </section>
                </>}
        </>
    )
}