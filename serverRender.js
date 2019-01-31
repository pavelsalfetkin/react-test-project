import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from './config';
import axios from 'axios';
import App from './src/components/App';

// формирует ссылки для получения данных из API
const getApiUrl = (id) => {
  if (id) {
    return `${config.serverUrl}/api/users/${id}`;
  }
  return `${config.serverUrl}/api/users`;
}

// формирует структуру данных
const getApiData = (id, respData) => {
  if (id) {
    return { [id]: respData };
  }
  return respData;
}

const serverRender = (id) =>
  axios.get(getApiUrl(id))
    .then(resp => {
      // console.log("------------------------------------");
      // console.log("getApiUrl(id) - ", getApiUrl(id));
      // console.log("resp.data - ", resp.data);
      const apiData = getApiData(id, resp.data);
      // console.log("apiData - ", apiData);
      return {
        indexContent: ReactDOMServer.renderToString(<App indexData={apiData}/>),
        indexData: apiData
      }
    })

export default serverRender;