import { Link } from 'react-router-dom'
import styles from './Results.module.css'
import { ReactComponent as Warning } from './Attention-icon-site-new.svg';
export const Results = ({
    resultItem
}) => {
    const {
        isEdible,
        recommendation,
        recommendationNotes,
        veggieName,
        caution,
        serving1,
        source1,
        serving2,
        source2,
        searchCount } = resultItem;

    console.log(serving2);

    return (
        <>
            {/* // High reco */}
            <div className={
                isEdible && recommendation === 'High' ? styles['container-green']
                    : isEdible && recommendation === 'Medium' ? styles['container-yellow']
                        : styles['container-no']}>
                <div className={`${styles["column-card"]} ${styles["isEdible"]}`}>
                    <p>
                        {isEdible && (recommendation === 'High' || 'Medium') ? "Yes, guinea pigs can eat "
                            : !isEdible && "No, guinea pigs can't eat "}
                        {<span className={styles.veggieName}>{veggieName}{isEdible && recommendation === 'Medium' && ", but with caution"}</span>}.
                    </p>
                </div>
                {/* if Edible & Medium reco show warning column card */}
                {isEdible && recommendation === "Medium" &&
                    <div className={`${styles["column-card"]} ${styles["caution-badge"]}`}>
                        <p className={styles['caution-text']}><Warning className={styles['caution-icon']}/>{caution}</p>
                    </div>
                }

                {/* if Edible show this column card */}
                {isEdible && <div className={styles["column-card"]}>
                    <h3>What should I keep in mind when I give <span className={styles.veggieName}>{veggieName}</span> to my guinea pig?</h3>
                    <p>{recommendationNotes}</p>
                </div>}

                <div className={styles["column-card"]}>
                    {/* if Edible show the h3 */}
                    {isEdible && <h3 className={styles.howMuch}>How much <span className={styles.veggieName}>{veggieName}</span> should I give my guinea pig per day?</h3>}
                    <p>{serving1}</p>
                    <p className={styles.source}><Link target={"_blank"} to={`${source1}`}>Source</Link></p>
                    {isEdible && (serving2 !== null && serving2 !== "N/A") ?
                        <>
                            <p>{serving2}</p>
                            <p className={styles.source}><Link target={"_blank"} to={`${source2}`}>Source</Link></p>
                        </> : null}
                </div>
            </div>




            {/* not reco
            <div className={styles["container-no"]}>
                <div className={`${styles["column-card"]} ${styles["isEdible"]}`}>
                    <p>No, guinea pigs can't eat <span className={styles.veggieName}>{resultItem.veggieName}</span></p>

                </div>
                <div className={`${styles["column-card"]}`}>
                    {resultItem.recommendationNotes}
                    <p className={styles.source}
                    >
                        <Link target={"_blank"} to={`${resultItem.source1}`}>Source: Click me!</Link></p>
                </div>
            </div> */}

        </>
    )
}