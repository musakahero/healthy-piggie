import { useEffect, useState } from 'react';
import { Results } from '../Results/Results';
import styles from './Home.module.css';
import * as veggiesService from '../../services/veggiesServiceSupabase';
import { useSearch } from '../../hooks/useSearch';
import { Search } from '../Search/Search';
import { PopSearches } from '../PopSearches/PopSearches';
import { Loading } from '../Loading/Loading';
// import { Loading2 } from '../Loading2/Loading2';

export const Home = (props) => {
    const [allVeggies, setAllVeggies] = useState([]);
    const [showLoading, setShowLoading] = useState(false);

    //Search functionality (useSearch custom hook)
    const { options,
        resultItem,
        setCurrentlySelected,
        currentlySelected } = useSearch(allVeggies);

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
                    <section className={styles.results}>
                        {/* //Show results section only if foundItem is not falsey */}
                        {resultItem && <Results resultItem={resultItem} />}
                    </section>
                    {/* // Most popular searches section */}
                    <section className={styles["pop-questions"]}>
                        <PopSearches allVeggies={allVeggies}
                            setCurrentlySelected={setCurrentlySelected}
                        />
                    </section>
                </>}
        </>
    )
}