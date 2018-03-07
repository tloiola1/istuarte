import axios from 'axios';

export default {

    getAgenda: function(){
        // console.log('Get Agenda');
        return axios.get('/api/agenda');
    },

    postAgenda: function( agenda ){
        // console.log('Post Agenda');
        return axios.post('/api/agenda', agenda);
    }
}