import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://colors-shop-7ab31-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;