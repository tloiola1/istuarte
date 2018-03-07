import axios from 'axios';

export default {

    getCms: function(){
        // console.log('Get Cms');
        return axios.get('/api/cms');
    },

    postCms: function( cms ){
        // console.log('Post Cms');
        return axios.post('/api/cms', cms);
    }
}