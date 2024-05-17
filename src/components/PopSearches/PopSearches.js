import { Link } from 'react-router-dom';
import styles from './PopSearches.module.css';

export const PopSearches = ({ allVeggies, setCurrentlySelected }) => {
    const top5 = allVeggies.sort((a, b) => b.searchCount - a.searchCount);
    return (
        <ul className={styles["top-searches"]}> Most popular searches:
            {top5.map(i =>
                <li key={i.id}>
                    <Link className={styles['search-link']} onClick={() => {
                        setCurrentlySelected(
                            {
                                value: i.veggieName,
                                label: i.veggieName,
                                id: i.id,
                                searchCount: i.searchCount
                            });

                    }}>Can my piggie eat {i.veggieName}?</Link>
                </li>
            )}
        </ul>
    )
}