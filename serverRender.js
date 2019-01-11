import config from './config';
import axios from 'axios';


axios.get(`${config.serverUrl}/api/users`)
  .then(resp => {
    console.log(resp.data);
  })