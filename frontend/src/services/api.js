import axios from 'axios';

const api = axios.create({
    //endereço ip 
    baseURL: 'http://192.168.0.6:3333/'
});

export default api;