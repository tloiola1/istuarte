import axios from 'axios';

export default {

    getUser: function(){
        // console.log('Get User');
        return axios.get('/api/user');
    },

    postUser: function( user ){
        // console.log('Post User');
        return axios.post('/api/user', user);
    }
}