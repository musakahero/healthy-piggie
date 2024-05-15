import * as request from './requester';

const baseUrl = 'http://127.0.0.1:8090/api/collections/veggies/records';

// Get all veggie items from DB
export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result.items;
};


