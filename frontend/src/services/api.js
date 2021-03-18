import axios from 'axios';

const api = axios.create({
    //endereço ip
    baseURL: 'https://agorabackend.herokuapp.com/'
});

export default api;