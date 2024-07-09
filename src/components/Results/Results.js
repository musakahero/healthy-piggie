import { Link } from 'react-router-dom'
import styles from './Results.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const Results = ({
    resultItem,
    similarCautionItems,
    setCurrentlySelected,
    resultsRef
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
        foodType } = resultItem;

    const cautionTypes = {
        'High sugar content': 'Overconsumption can lead to obesity and diabetes.',
        'High water content': 'Overconsumption can cause diarrhea.',
        'High oxalic acid content': 'Overconsumption can lead to mouth sores and diarrhea.',
        'High calcium content': 'Overconsumption can cause a urinary infection & kidney stones to your guinea pig.'
    }

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
                    <div className={`${styles["caution-badge"]}`}>
                        {
                            caution.map((c, index) =>
                                <div key={index} className={styles['caution-item']}>
                                    {c} {
                                        <FontAwesomeIcon
                                            icon={faInfoCircle}
                                            className={styles['info-icon']} />}
                                    <div className={styles['tooltipText']}>{cautionTypes[c]}</div>
                                </div>)}
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
                {/* if Medium and foodType=Fruit show pairing reco */}
                {recommendation === "Medium" && (foodType === "Fruit" || foodType === "Vegetable") &&
                    <div className={styles["column-card"]}>
                        {foodType === "Fruit" && <p>Does not pair well with other fruits.</p>}
                        <div>
                            <p>Does not pair well with {
                                // Map items to Link components
                                similarCautionItems.map(
                                    (i, index) => {
                                        // Add punctuation accordingly
                                        if (similarCautionItems.length - 1 !== index) {
                                            return <Link
                                                key={i.id}
                                                className={styles["search-link"]}
                                                onClick={() => {
                                                    resultsRef.current.scrollIntoView()
                                                    setCurrentlySelected(
                                                        {
                                                            value: i.veggieName,
                                                            label: i.veggieName,
                                                            id: i.id,
                                                            searchCount: i.searchCount
                                                        });
                                                }}
                                            > {i.veggieName},</Link>
                                        } else {
                                            return <Link
                                                key={i.id}
                                                className={styles["search-link"]}
                                                onClick={() => {
                                                    resultsRef.current.scrollIntoView();
                                                    setCurrentlySelected(
                                                        {
                                                            value: i.veggieName,
                                                            label: i.veggieName,
                                                            id: i.id,
                                                            searchCount: i.searchCount
                                                        });
                                                }}
                                            > {i.veggieName}.</Link>
                                        }
                                    })}
                            </p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}