// fetch data from api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

// function that returns a promise
const serverRender = () =>
  //'http://.../api'
  axios.get('http://localhost:8080/api/contests')
  // axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      // console.log(resp.data);
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    })

export default serverRender;
