import { useEffect, useRef, useState } from 'react';
import { Results } from '../Results/Results';
import styles from './Home.module.css';
import * as veggiesService from '../../services/veggiesServiceSupabase';
import { useSearch } from '../../hooks/useSearch';
import { Search } from '../Search/Search';
import { PopSearches } from '../PopSearches/PopSearches';
import { Loading } from '../Loading/Loading';

export const Home = () => {
    // Fetch all veggies on component mount (getAll)
    useEffect(() => {
        //show loading spinner while retrieving food
        setShowLoading(true);
        veggiesService.getAll()
            .then(result => {
                setAllVeggies(result);
            })
            .then(() => setShowLoading(false))
            .catch(error => alert(new Error("Unable to reach our piggie base, please retry later!").message));
    }, []);

    //States & refs
    const [allVeggies, setAllVeggies] = useState([]); //Store all food from getAll
    const [showLoading, setShowLoading] = useState(false); //State of loading spinner  
    const resultsRef = useRef(null); //Keep reference of .results section HTML element

    //Search functionality (useSearch custom hook)
    const { options,
        resultItem,
        setCurrentlySelected,
        currentlySelected,
        similarCautionItems } = useSearch(allVeggies);

    //This handler offers a second method of searching through engaging with links/buttions of specific food
    const searchChangeHandler = (item) => {
        // It scrolls to the .results section start
        resultsRef.current.scrollIntoView();
        // Switch the searched item in the search bar and pass an object to currentlySelected state hook with the item details
        setCurrentlySelected({
            value: item.veggieName,
            label: item.veggieName,
            id: item.id,
            searchCount: item.searchCount
        });
    }

    return (
        <>
            {/* If showLoading state is true render loading spinner */}
            {showLoading ? <div className={styles["spinner-container"]}><Loading /></div>
                : <>
                    {/* Search component */}
                    <Search
                        setCurrentlySelected={setCurrentlySelected}
                        options={options}
                        currentlySelected={currentlySelected} />

                    {/* Results section */}
                    <section className={styles.results} ref={resultsRef}>
                        {/* Show results section only if foundItem is not falsey */}
                        {resultItem && <Results
                            resultItem={resultItem}
                            similarCautionItems={similarCautionItems}
                            searchChangeHandler={searchChangeHandler}
                            resultsRef={resultsRef} />}
                    </section>

                    {/* Most popular searches (PopSearches) section */}
                    <section className={styles["pop-searches"]}>
                        <PopSearches
                            allVeggies={allVeggies}
                            searchChangeHandler={searchChangeHandler}
                            resultsRef={resultsRef}
                        />
                    </section>
                </>}
        </>
    )
}