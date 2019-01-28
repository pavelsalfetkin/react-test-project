import axios from 'axios';

// логика работы с API для компонентов
const apiDataId = (id) => {
  return axios.get(`/api/users/${id}`)
    .then(resp => resp.data);
};

export { apiDataId };