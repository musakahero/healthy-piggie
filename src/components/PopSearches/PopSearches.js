import { Link } from 'react-router-dom';
import styles from './PopSearches.module.css';

export const PopSearches = ({ allVeggies, searchChangeHandler }) => {

    // Sort all food by searchCount descending and get top 5 food searches 
    const top5 = allVeggies.sort((a, b) => b.searchCount - a.searchCount)
        .slice(0, 5);

    return (
        <ul className={styles["top-searches"]}> Most popular searches:
            {top5.map(i =>
                <li key={i.id}>
                    <Link className={styles['search-link']}
                        to={"/#results"}
                        onClick={() => searchChangeHandler(i)}>Can my piggie eat {`${i.veggieName}`}?</Link>
                </li>
            )}
        </ul>
    )
}