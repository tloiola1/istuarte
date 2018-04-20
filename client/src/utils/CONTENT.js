import axios from 'axios';

export default {

    GetContent: function(){
        console.log('Get Cms');
        return axios.get('/api/cms');
    },

    Post: function( content ){
        // console.log('Post Cms');
        return axios.post('/api/cms', content);
    }
}