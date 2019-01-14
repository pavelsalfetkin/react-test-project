import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';


const serverRender = () =>
  axios.get(`${config.serverUrl}/api/users`)
    .then(resp => {
      // console.log(resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data}/>),
        initialData: resp.data
      }
    })

export default serverRender;