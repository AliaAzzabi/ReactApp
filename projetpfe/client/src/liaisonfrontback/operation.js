import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000'
})
export const getAllspecialities = (callback) => {
  api.get('/getAllspecialities')
    .then((res) => callback(res))
    .catch((error) => callback({ error }));
}

export const getSpecialtyById = async (id) => {
  try {
    const response = await api.get(`/getSpecialtyById/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export const addspecialite = (depart, callback) => {
  api.post('/addspecialite', depart)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}

export const updateSpecialite = (id, updatedData, callback) => {
  api.put(`/updateSpecialite/${id}`, updatedData)
    .then((message) => callback(message))
    .catch((err) => callback(err));
}

export const deleteSpecialite = (id, callback) => {
  api.delete(`/deleteSpecialite/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}

export const getDepartementById = async (id) => {
    try {
      const response = await api.get(`/getDepartementById/${id}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
  export const getAllDepartement = (callback) => {
    api.get('/getAllDepartement')
      .then((res) => callback(res))
      .catch((error) => callback({ error }));
  }
  export const addDepartement = (depart, callback) => {
    api.post('/addDepartement', depart)
      .then((res) => callback(res))
      .catch((err) => callback(err));
  }
  
  export const updateDepartement = (id, updatedData, callback) => {
    api.put(`/updateDepartement/${id}`, updatedData)
      .then((message) => callback(message))
      .catch((err) => callback(err));
  }
  
  export const deleteDepartement = (id, callback) => {
    api.delete(`/deleteDepartement/${id}`)
      .then((res) => callback(res))
      .catch((err) => callback(err));
  }

  
export const getAllAide = (callback) => {
  api.get('/getAide')
    .then((res) => callback(res))
    .catch((error) => callback({ error }));
}

export const getAideById = async (id) => {
  try {
    const response = await api.get(`/getAideById/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
}
}

export const addaides = (aide, callback) => {
  api.post('/addaides', aide)
    .then((res) => {
      console.log('Received response:', res);
      callback(res);
    })
    .catch((err) => {
      console.error('Error:', err);
      callback(err);
    });
}

export const updateAide = (id, updatedData, callback) => {
  api.put(`/updateAide/${id}`, updatedData)
    .then((message) => callback(message))
    .catch((err) => callback(err));
}

export const deleteAide = (id, callback) => {
  api.delete(`/deleteAide/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}
