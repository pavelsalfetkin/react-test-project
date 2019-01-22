import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import axios from 'axios';
import App from './src/components/App';


const serverRender = () =>
  axios.get(`${config.serverUrl}/api/users`)
    .then(resp => {
      // console.log(resp.data);
      return {
        indexContent: ReactDOMServer.renderToString(<App indexData={resp.data}/>),
        indexData: resp.data
      }
    })

export default serverRender;