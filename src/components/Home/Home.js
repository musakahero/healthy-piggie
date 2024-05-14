import { Results } from '../Results/Results';
import styles from './Home.module.css';
export const Home = ({props}) => {
    return (
        <>
        {/* Introductory paragraph */}
            <p className={styles.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus voluptates fuga obcaecati voluptatibus itaque omnis, natus eaque? Est laudantium sequi consequuntur fugiat itaque eos dignissimos minus ipsum quis suscipit?</p>

            {/* Search bar */}
            <div className={styles.search}>
                <input className={styles.input} type="text" />
                <select className={styles.weight} name="weight">
                    <option value="0.5">0.5</option>
                    <option value="1.5">1.5</option>
                    <option value="2.5">2.5</option>
                    <option value="3.5">3.5</option>
                    <option value="4.5">4.5</option>
                </select>
                <i className={styles["search-btn"]}>Go</i>
            </div>

            {/* Results section */}
            <section className={styles.results}>
                <Results />
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