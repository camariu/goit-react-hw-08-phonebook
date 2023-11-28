import axios from 'axios';

const BASE_URL = 'https://651d5cba44e393af2d59a0dd.mockapi.io/';

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = resource => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: id => api.get(`/${resource}/${id}`),
    create: newContact => api.post(`/${resource}`, newContact),
    update: (id, data) => api.put(`/${resource}/${id}`, data),
    delete: id => api.delete(`/${resource}/${id}`),
  };
};

const phoneApi = resourceApi('contacts');

export { phoneApi };
