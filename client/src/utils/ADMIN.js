import axios from 'axios';

export default {

    Get: function(){
        // console.log('Get Admin');
        return axios.get('/api/admin');
    },

    Post: function( admin ){
        // console.log('Post Admin');
        return axios.post('/api/admin', admin);
    }
}