import * as request from './requester';

const baseUrl = 'http://127.0.0.1:8090/api/collections/veggies/records';
let key = process.env.REACT_APP_KEY;

// Get all veggie items from DB
export const getAll = async () => {
    const result = await request.get(`${baseUrl}?perPage=100`);
    return result.items;
};

//Get one veggie item from DB
export const getOne = async (recordId) => {
    const result = await request.get(`${baseUrl}/${recordId}`);
    return result;
}

// update search counter
export const edit = async (recordId, data) => {
    const result = await request.patch(`${baseUrl}/${recordId}`, data, key);
    // console.log('key is ', key);
    return result;
};

export const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
};

// export const create = async (data) => {
//     const result = await request.post(baseUrl, data);
//     return result;
// };

export const deleteItem = async (recordId) => {
    const result = await request.del(`${baseUrl}/${recordId}`, {});
    return result;
};

