import axios from 'axios';

const api = axios.create({
    //endereço ip 
    //end do heroku
   // baseURL: 'https://agorabackend.herokuapp.com/'
    baseURL: 'http://192.168.1.152:5000/'
});

export default api;