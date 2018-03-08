import axios from 'axios';

export default {

    Get: function(){
        // console.log('Get User');
        return axios.get('/api/user');
    },

    Post: function( user ){
        // console.log('Post User');
        return axios.post('/api/user', user);
    }
}