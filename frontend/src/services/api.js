import axios from 'axios';

const api = axios.create({
    //endereço ip 
    //end do heroku
    baseURL: 'https://agorabackend.herokuapp.com/'
});

export default api;