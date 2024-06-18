/*How it works: 
1. Export "Sheet for Upload" worksheet to .csv file
2. Convert CSV file to JSON via https://csvjson.com/csv2json online tool
3. Paste JSON data into src/bulkCollection.json file (overwrite data)
4. Press "click to bulk upload" button on the web UI
*/

// import * as veggieService from "../services/veggiesService";

// export const BulkCreate = (props) => {

//     const onClickHandler = () => {
//         let entries = require('../bulkCollection.json');


//         entries.forEach(e => {
//             // setTimeout(() => {
//                 // Validate every prop of every object
//                 for (const prop in e) {
//                     // Check if props contain empty strings and fix them to "N/A"
//                     if (e[prop].length < 1) {
//                         e[prop] = "N/A";
//                     }
//                     // Trim the value to avoid whitespaces and convert "Yes" to True and "No" to False 
//                     if (e[prop].trim() === "Yes") {
//                         e[prop] = "TRUE";
//                     } else if (e[prop].trim() === "No") {
//                         e[prop] = "FALSE";
//                     };
//                 };
//                 // Send POST request
//                 veggieService.create(e)
//                     .then(res => console.log(res))
//                     .catch(err => console.log(err.message))
//             // }, 1000)
//         });
//     }

//     return (
//         <button type='button' onClick={onClickHandler}>Click to bulk upload</button>
//     )
// }

/*How to format xlsx file before exporting:
-Check the titles of the columns to match the props standard
-Duplicate all multi-named veggies into their own separate entries
*/