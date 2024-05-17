import styles from './Results.module.css'

export const Results = ({
    resultItem
}) => {

    return (
        <div className={styles["container"]}>
            {resultItem.isEdible ?
                <>
                    <h3>Can my guinea pig eat {resultItem.veggieName}?</h3>
                    <p>Yes, guinea pigs can eat {resultItem.veggieName}{resultItem.inModeration ? ' in moderation' : null}.</p>
                    <h3>How much {resultItem.veggieName} should I give my guinea pig per day?</h3>
                    <p>{resultItem.serving}</p>
                    <h3>What should I keep in mind when I give {resultItem.veggieName} to my guinea pig?</h3>
                    <p>{resultItem.notes}</p>
                    <h3>What other foods pair well with {resultItem.veggieName} for a balanced guinea pig diet?</h3>
                    <p>{resultItem.comboIdeas}</p>
                </>
                : <h3 style={{ gridArea: 'noAnswer', margin: 'auto' }}>No, guinea pigs cannot eat {resultItem.veggieName} as it can be harmful to them.</h3>
            }
        </div>
    )
}