// fetch data from api

import config from './config';
import axios from 'axios';

//'http://.../api'
axios.get('http://localhost:8080/api/contests')
// axios.get(`${config.serverUrl}/api/contests`)
  .then(resp => {
    console.log(resp.data);
  })
