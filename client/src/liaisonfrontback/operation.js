import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000'
});export const getAllDepartement = (callback) => {
  api.get('/getAllDepartement')
    .then((res) => callback(res))
    .catch((error) => callback({ error }));
}

export const getDepartementById = async (id) => {
  try {
    const response = await api.get(`/getDepartementById/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
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

export const getAllPatients = (callback) => {
  api.get('/getPatient')
    .then((res) => callback(res))
    .catch((error) => callback({ error }));
}

export const gePatientById = async (id) => {
  try {
    const response = await api.get(`/gePatientById/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export const addPatient = (patient, callback) => {
  api.post('/addPatient', patient)
    .then((res) => {
      console.log('Received response:', res);
      callback(res);
    })
    .catch((err) => {
      console.error('Error:', err);
      callback(err);
    });
}

export const updatePatient = (id, updatedData, callback) => {
  api.put(`/updatePatient/${id}`, updatedData)
    .then((message) => callback(message))
    .catch((err) => callback(err));
}

export const deletePatient = (id, callback) => {
  api.delete(`/deletePatient/${id}`)
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


export const authenticateUser = async (credentials) => {
  try {
    const response = await api.post('/authenticate', credentials);

    if (response.data.success) {
      setAuthToken(response.data.token);
      return { success: true, user: response.data.user };
    } else {
      return { success: false, error: response.data.error };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Erreur lors de la connexion' };
  }
};

const setAuthToken = (token) => {
  localStorage.setItem('token', token);
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};