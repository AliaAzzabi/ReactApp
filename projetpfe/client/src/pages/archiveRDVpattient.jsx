import React, { useState, useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getRendezVousByPatientId } from '../liaisonfrontback/operation'; // Importez la fonction pour récupérer les rendez-vous par ID de patient ici
import { AuthContext } from '../context/AuthContext';

function ArchiveRDV() {
  const { patientId } = useParams();
  const [rendezVous, setRendezVous] = useState([]);
  const { user } = useContext(AuthContext);
  if (!user || (user.role !== "médecin" && user.role !== "aide")) {
    return <Navigate to="/login" />;
  }
  useEffect(() => {
    const fetchRendezVous = async () => {
      try {
        const rendezVousData = await getRendezVousByPatientId(patientId);
        // Assurez-vous que rendezVousData est bien un tableau avant de le mettre à jour
        if (Array.isArray(rendezVousData)) {
          setRendezVous(rendezVousData);
        } else {
          console.error('La fonction getRendezVousByPatientId ne retourne pas un tableau de rendez-vous.');
        }
      } catch (error) {
        console.error('Error fetching rendez-vous:', error);
      }
    };
  
    fetchRendezVous();
  }, [patientId]);
  

  return (
    <div>
      <h1>Archives de rendez-vous du patient</h1>
      <ul>
      {rendezVous.map((rdv, index) => (
        <div key={index}>
          <li key={rdv._id}>
            <p>Date: {rdv.date}</p>
            <p>Heure: {rdv.heure}</p>
            {/* Ajoutez d'autres détails du rendez-vous si nécessaire */}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ArchiveRDV;
