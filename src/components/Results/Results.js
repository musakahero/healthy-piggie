import { Link } from 'react-router-dom'
import styles from './Results.module.css'

export const Results = ({
    resultItem
}) => {

    return (
        <>
            {resultItem.isEdible && resultItem.recommendation === "high" ?
                <div className={styles["container-green"]}>
                    <h3>Can my guinea pig eat <span className={styles.veggieName}>{resultItem.veggieName}</span>?</h3>
                    <p>Yes, guinea pigs can eat <span className={styles.veggieName}>{resultItem.veggieName}</span>.</p>
                    <h3>What should I keep in mind when I give <span className={styles.veggieName}>{resultItem.veggieName}</span> to my guinea pig?</h3>
                    <p>{resultItem.recommendationNotes}</p>
                    <h3 className={styles.howMuch}>How much <span className={styles.veggieName}>{resultItem.veggieName}</span> should I give my guinea pig per day?</h3>
                    <p>{resultItem.serving1}</p>
                    <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source1}`}>Source: Click me!</Link></p>
                    {resultItem.serving2 !== "N/A" &&
                        <><p>{resultItem.serving2}</p>
                            <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source2}`}>Source: Click me!</Link></p>
                        </>}
                    {resultItem.serving3 !== "N/A" &&
                        <>
                            <p>{resultItem.serving3}</p>
                            <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source3}`}>Source: Click me!</Link></p>
                        </>}
                </div>
                : resultItem.isEdible && resultItem.recommendation === "medium" ? <div className={styles["container-yellow"]}>
                    <h3>Can my guinea pig eat <span className={styles.veggieName}>{resultItem.veggieName}</span>?</h3>
                    <p>Yes, guinea pigs can eat <span className={styles.veggieName}>{resultItem.veggieName}</span>.</p>
                    <h3>What should I keep in mind when I give <span className={styles.veggieName}>{resultItem.veggieName}</span> to my guinea pig?</h3>
                    <p>{resultItem.recommendationNotes}</p>
                    <h3 className={styles.howMuch}>How much <span className={styles.veggieName}>{resultItem.veggieName}</span> should I give my guinea pig per day?</h3>
                    <p>{resultItem.serving1}</p>
                    <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source1}`}>Source: Click me!</Link></p>
                    {resultItem.serving2 !== "N/A" &&
                        <><p>{resultItem.serving2}</p>
                            <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source2}`}>Source: Click me!</Link></p>
                        </>}
                    {resultItem.serving3 !== "N/A" &&
                        <>
                            <p>{resultItem.serving3}</p>
                            <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source3}`}>Source: Click me!</Link></p>
                        </>}
                </div>
                    : resultItem.isEdible && resultItem.recommendation === "low" ? <div className={styles["container-red"]}>
                        <h3>Can my guinea pig eat <span className={styles.veggieName}>{resultItem.veggieName}</span>?</h3>
                        <p>Yes, but not recommendable.</p>
                        <h3>What should I keep in mind when I give <span className={styles.veggieName}>{resultItem.veggieName}</span> to my guinea pig?</h3>
                        <p>{resultItem.recommendationNotes}</p>
                        <h3 className={styles.howMuch}>How much <span className={styles.veggieName}>{resultItem.veggieName}</span> should I give my guinea pig per day?</h3>
                        <p>{resultItem.serving1}</p>
                        <p className={styles.source}><Link target={"_blank"} to={`${resultItem.source1}`}>Source: Click me!</Link></p>
                    </div>
                        : <div className={styles["container-no"]}>
                            <h3>Can my guinea pig eat <span className={styles.veggieName}>{resultItem.veggieName}</span>?</h3>
                            <p className={styles.recoNotes}>No. {resultItem.recommendationNotes}</p>
                            <p className={styles.source} style={{gridArea:'sourceSingle'}}><Link target={"_blank"} to={`${resultItem.source1}`}>Source: Click me!</Link></p>
                        </div>
            }
        </>
    )
}

/* 
<>
                    <div className={styles["container-green"]}>
                        <h3>Can my guinea pig eat <span className={styles.veggieName}>{resultItem.veggieName}</span>?</h3>
                        <p>Yes, guinea pigs can eat <span className={styles.veggieName}>{resultItem.veggieName}</span>{resultItem.inModeration ? ' in moderation' : null}.</p>
                        <h3>How much <span className={styles.veggieName}>{resultItem.veggieName}</span> should I give my guinea pig per day?</h3>
                        <p>{resultItem.serving}</p>
                        <h3>What should I keep in mind when I give <span className={styles.veggieName}>{resultItem.veggieName}</span> to my guinea pig?</h3>
                        <p>{resultItem.notes}</p>
                        <h3>What other foods pair well with <span className={styles.veggieName}>{resultItem.veggieName}</span> for a balanced guinea pig diet?</h3>
                        <p>{resultItem.comboIdeas}</p>
                    </div>
                </>
                : <div className={styles["container-green"]}>
                    <h3 style={{ gridArea: 'noAnswer', margin: 'auto' }}>No, guinea pigs cannot eat {resultItem.veggieName} as it can be harmful to them.</h3>
                </div>
*/