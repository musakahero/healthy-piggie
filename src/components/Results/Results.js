import styles from './Results.module.css'

export const Results = ({foundVeggie}) => {

    // const sampleVeggie = {
    //     veggieName: 'tomato',
    //     isEdible: true,
    //     inModeration: true,
    //     serving: "(See the table provided)",
    //     notes: "Remove the seeds and avoid feeding them the leaves or stems, as they can be harmful. Introduce tomatoes gradually to avoid digestive issues.",
    //     comboIdeas: "Other suitable foods include leafy greens like lettuce, kale, and spinach, as well as small amounts of bell peppers and carrots."
    // }6

    return (
        <div className={styles["container"]}>
            {foundVeggie.isEdible ?
                <>
                    <h3>Can my guinea pig eat {foundVeggie.veggieName}?</h3>
                    <p>Yes, guinea pigs can eat {foundVeggie.veggieName}{foundVeggie.inModeration ? ' in moderation' : null}.</p>
                    <h3>How much {foundVeggie.veggieName} should I give my guinea pig per day?</h3>
                    <p>{foundVeggie.serving}</p>
                    <h3>What should I keep in mind when I give {foundVeggie.veggieName} to my guinea pig?</h3>
                    <p>{foundVeggie.notes}</p>
                    <h3>What other foods pair well with {foundVeggie.veggieName} for a balanced guinea pig diet?</h3>
                    <p>{foundVeggie.comboIdeas}</p>
                </>
                : <h3 style={ {gridArea:'noAnswer', margin: 'auto'}}>No, guinea pigs cannot eat {foundVeggie.veggieName} as it can be harmful to them.</h3>
            }

        </div>
    )
}