// Supabase
import { supabase } from '../config/Supabase';

export const getAll = async () => {
    let { data: veggies, error } = await supabase
  .from('veggies')
  .select('*');
  console.log(`data returns `);
  return veggies;
}

// Pocketbase
// import {url, client} from '../config/Pocketbase';

// Get all veggie items from DB
// export const getAll = async () => {
    // const records = await client.collection('veggies').getFullList();
//     return records;
// };

// Get one veggie item from DB
export const getOne = async (recordId) => {
    // const record1 = await client.collection('veggies').getOne(recordId);
    // return record1;
};

// Update record
export const edit = async (recordId, data) => {
    // const record = await client.collection('veggies').update(recordId, data);
    // return record;
}

//Create record
export const create = async (data) => {
        // const record = await client.collection('veggies').create(data, { requestKey: null });
        // return record;
}

// const baseUrl = 'http://127.0.0.1:8090/api/collections/veggies/records';
// const baseUrl = 'https://healthy-piggie.pockethost.io/api/collections/veggies/records';

// Get all veggie items from DB
// export const getAll = async () => {
//     const result = await request.get(`${baseUrl}?perPage=100`);
//     return result.items;
// };

//Get one veggie item from DB
// export const getOne = async (recordId) => {
//     const result = await request.get(`${baseUrl}/${recordId}`);
//     return result;
// }

// update search counter
// export const edit = async (recordId, data) => {
//     const result = await request.patch(`${url}/${recordId}`, data);
//     return result;
// };

// export const create = async (data) => {
//     const result = await request.post(url, data);
//     return result;
// };

// export const deleteItem = async (recordId) => {
//     const result = await request.del(`${baseUrl}/${recordId}`, {});
//     return result;
// };

