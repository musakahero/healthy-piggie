import * as veggieService from "../services/veggiesService";

export const BulkCreate = (props) => {
    
    const onClickHandler = () => {
        let entries = require('../bulkCollection.json');
        // let testEntry = [entries[1]];
        // console.log(`testEntry is `);
        // console.log(testEntry);


        entries.forEach(e => {
            veggieService.create(e)
            .then(res => console.log(res))
            .catch(err => alert(err))
        });
        // entries.forEach(e => {
        //     console.log(e);
        // })
    } 
    return (
        <button type='button' onClick={onClickHandler}>Click to bulk upload</button>
    )
}