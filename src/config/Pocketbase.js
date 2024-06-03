import PocketBase from 'pocketbase';

// pockethost.io url
// export const url = 'https://healthy-piggie.pockethost.io/';

// localhost url
const url = 'http://127.0.0.1:8090/';


export const client = new PocketBase(url);