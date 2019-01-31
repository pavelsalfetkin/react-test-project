import axios from 'axios';

// логика работы с API для компонентов
const apiDataId = (id) => {
  return axios.get(`/api/users/${id}`)
    .then(resp => resp.data);
};

const apiDataList = () => {
  return axios.get(`/api/users`)
    .then(resp => {
      // console.log(resp.data);
      return resp.data
    });
};

export { apiDataId, apiDataList };