import axios from 'axios';

export default {

    getAdmin: function(){
        // console.log('Get Admin');
        return axios.get('/api/admin');
    },

    postAdmin: function( admin ){
        // console.log('Post Admin');
        return axios.post('/api/admin', admin);
    }
}