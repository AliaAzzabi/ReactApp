
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000'
})
export const checkEmailExistence = (email, callback) => {
  axios.post('/checkAideEmailExistence', { email })
      .then((response) => {
          callback(response.data);
      })
      .catch((error) => {
          console.error('Error checking email existence:', error);
          callback({ exists: false, error: 'Server error' });
      });
};
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
export const addmed = (formData, callback) => {

  api.post('/addmed', formData)
  
    .then((res) => callback(res))
    .catch((err) => callback(err));
}

export const updateAide = (id, updatedData, callback) => {
  api.put(`/updateAide/${id}`, updatedData)
    .then((response) => callback(response.data))
    .catch((err) => callback(err));
}

export const deleteAide = (id, callback) => {
  api.delete(`/deleteAide/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}


export const getMedecins = (callback) => {
  api.get('/getMedecins')
    .then((res) => callback(res))
    .catch((error) => callback({ error }));
}

export const getMedecinById = async (id) => {
  try {
    const response = await api.get(`/getMedecinById/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
}
}
{/**
export const addMedecin = (medecin, callback) => {
  api.post('/addMedecin', medecin)
    .then((res) => {
      console.log('Received response:', res);
      callback(res);
    })
    .catch((err) => {
      console.error('Error:', err);
      callback(err);
    });
}
 */}
/*export const updateAide = (id, updatedData, callback) => {
  api.put(`/updateAide/${id}`, updatedData)
    .then((response) => callback(response.data))
    .catch((err) => callback(err));
}*/

export const UpdateMedecin = (id, updatedData, callback) => {
  api.put(`/updateMedecin/${id}`, updatedData)
    .then((message) => callback(message))
    .catch((err) => callback(err));
}


export const deleteMedecin = (id, callback) => {
  api.delete(`/deleteMedecin/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}


export const getPatient = async (id) => {
  try {
    const response = await api.get(`/getPatient`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export const addPatient = (patient, callback) => {
  api.post('/addPatient', patient)
      .then((res) => {
          console.log('Received response:', res);
          callback(res.data); 
      })
      .catch((err) => {
          console.error('Error:', err.response.data);
          callback(err.response.data); 
      });
};

export const deletePatient = (id, callback) => {
  api.delete(`/deletePatient/${id}`)
    .then((res) => callback(res))
    .catch((err) => callback(err));
}


export const updatePatient = (id, updatedData, callback) => {
  api.put(`/updatePatient/${id}`, updatedData)
    .then((message) => callback(message))
    .catch((err) => callback(err));
}

export const getAllRendezVous = async (userToken) => {
  try {
    const response = await fetch('http://localhost:4000/getAllRendezVous', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Erreur lors de la récupération des rendez-vous");
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous :', error);
    throw error;
  }
};




export const creerRendezVous = async (userToken, date, patientNom) => {
  try {
    
    const time = date.getHours() + ":" + date.getMinutes();
    
    const response = await fetch('http://localhost:4000/creerrendezvous', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({ date, patientNom, time }),
    });
    if (response.ok) {
      return true;
    } else {
      throw new Error("Erreur lors de l'ajout du rendez-vous");
    }
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire :', error);
    throw error;
  }
};



export const updateRendezVous = async (token, rendezVousId, updatedEventData) => {
  const { date, time, patientNom } = updatedEventData;
  
  const response = await fetch(`http://localhost:4000/updateRendezVous/${rendezVousId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ date, time, patientNom })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Erreur lors de la mise à jour du rendez-vous');
  }
  return data;
};





export const deleteRendezVous = async (token, rendezVousId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/deleteRendezVous/${rendezVousId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAidesByMedecinId = async (medecinId) => {
  try {
    const response = await api.get(`/getAidesByMedecinId/${medecinId}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}


export const getAllRendezVousAjourdhui = async () => {
  try {
    const response = await api.get('/getrdvAujourdhui');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des rendez-vous d\'aujourd\'hui :', error);
    throw new Error('Erreur lors de la récupération des rendez-vous d\'aujourd\'hui');
  }
};