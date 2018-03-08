import axios from 'axios';

export default {

    Get: function(){
        // console.log('Get Agenda');
        return axios.get('/api/agenda');
    },

    Post: function( agenda ){
        // console.log('Post Agenda');
        return axios.post('/api/agenda', agenda);
    }
}