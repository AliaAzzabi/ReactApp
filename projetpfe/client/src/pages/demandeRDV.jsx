import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { getAllDemandeRendezVous } from '../liaisonfrontback/operation';

function DemandeRDV() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

  if (!user || (user.role !== "aide")) {
    return <Navigate to="/login" />;
  }

  const fetchDemandeRendezVousData = async () => {
    try {
      const data = await getAllDemandeRendezVous(user.token);
      setEvents(
        data.map((rendezvous) => ({
          id: rendezvous._id,
          nomPrenom: rendezvous.patient ? rendezvous.patient.nomPrenom : 'N/A',
          email: rendezvous.patient ? rendezvous.patient.email : 'N/A',
          telephone: rendezvous.patient ? rendezvous.patient.telephone : 'N/A',
          medecin: rendezvous.medecin ? rendezvous.medecin.nomPrenom : 'N/A',
          date: new Date(rendezvous.date).toLocaleString(),
          status: rendezvous.status // Include status
        }))
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des rendez-vous :", error);
    }
  };

  useEffect(() => {
    fetchDemandeRendezVousData();
  }, [user.token]);

  const handleStatusUpdate = async (id, status) => {
    try {
      console.log(`Updating status for ${id} to ${status}`); // Debugging line
      await axios.put(
        `http://localhost:4000/demande-rendezvous/${id}/status`, // Ensure this matches the backend route
        { status },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      fetchDemandeRendezVousData();
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du statut à ${status} :`, error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">Nom Prénom</th>
                    <th scope="col" className="px-6 py-3">Email</th>
                    <th scope="col" className="px-6 py-3">Téléphone</th>
                    <th scope="col" className="px-6 py-3">Médecin</th>
                    <th scope="col" className="px-6 py-3">Date et heure du rendez-vous</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4 whitespace-nowrap">{event.nomPrenom}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{event.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{event.telephone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{event.medecin}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{event.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {event.status === 'Accepté' ? (
                          <span className='bg-green-200 p-2'>Demande acceptée</span>
                        ) : event.status === 'Refusé' ? (
                          <span className='bg-red-200 p-2'>Demande refusée</span>
                        ) : (
                          <>
                            <button 
                              onClick={() => handleStatusUpdate(event.id, 'Accepté')}
                              className="px-3 py-1 bg-green-400 text-white hover:bg-green-600 mr-2"
                            >
                              Accepter
                            </button>
                            <button 
                              onClick={() => handleStatusUpdate(event.id, 'Refusé')}
                              className="px-3 py-1 bg-red-500 text-white hover:bg-red-600"
                            >
                              Refuser
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default DemandeRDV;
