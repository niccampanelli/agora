import axios from 'axios';

const api = axios.create({
    //endereço ip
    //baseURL: 'https://agorabackend.herokuapp.com/'
    baseURL: 'http://192.168.1.152:3333'
});

export default api;