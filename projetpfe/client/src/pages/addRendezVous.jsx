import React, { useState, useContext, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../context/AuthContext';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getAllRendezVous, deleteRendezVous, updateRendezVous, creerRendezVous, sendEmail } from '../liaisonfrontback/operation';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";

function AddRendezVousForm() {
  const { user } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const localizer = momentLocalizer(moment);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [patientNom, setPatientNom] = useState('');
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useLocation();

  if (!user || (user.role !== "médecin" && user.role !== "aide")) {
    return <Navigate to="/login" />;
  }  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setPatientNom(event.title.trim()); // Pré-remplir le nom du patient avec celui de l'événement sélectionné
    setSelectedDate(event.start); // Pré-remplir la date du rendez-vous avec celle de l'événement sélectionné
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchRendezVousData = async () => {
    try {
      const data = await getAllRendezVous(user.token);
      setEvents(
        data.map((rendezvous) => ({
          id: rendezvous._id,
          start: new Date(rendezvous.date),
          end: new Date(rendezvous.date),
          title: rendezvous.patient ? ' ' + rendezvous.patient.nomPrenom : 'Rendez-vous',
        }))
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des rendez-vous :", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedEventData = {
        patientNom,
        date: selectedDate,
        time: selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      await updateRendezVous(user.token, selectedEvent.id, updatedEventData);

       // Vérifier si selectedEvent et selectedEvent.patient ne sont pas indéfinis avant d'accéder à la propriété 'email'
    if (selectedEvent && selectedEvent.patient && selectedEvent.patient.email) {
      const subject = 'Modification de votre rendez-vous';
      const message = `Votre rendez-vous a été rapporté pour ${selectedDate}.`;
      await sendEmail(selectedEvent.patient.email, subject, message);
    } else {
      console.error("Impossible d'envoyer l'e-mail de notification car les informations du patient sont manquantes.");
    }

      alert('Rendez-vous mis à jour avec succès !');
      setShowModal(false);
      fetchRendezVousData(); 
    } catch (error) {
      alert("Erreur lors de la mise à jour du rendez-vous : " + error.message);
    }
  };

  const handleCancelAppointment = async () => {
    try {
      await deleteRendezVous(user.token, selectedEvent.id);

      const subject = 'Annulation de votre rendez-vous';
        const message = 'Votre rendez-vous a été annulé.';
        await sendEmail(selectedEvent.patient.email, subject, message);

      alert('Rendez-vous annulé avec succès !');
      fetchRendezVousData();
      setShowModal(false); // Rafraîchir les rendez-vous après la suppression
    } catch (error) {
      alert("Erreur lors de l'annulation du rendez-vous");
    }
  };

  const handleChange = (e) => {
    setPatientNom(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await creerRendezVous(user.token, selectedDate, patientNom);
      alert('Rendez-vous ajouté avec succès !');
      setSelectedDate(new Date());
      setPatientNom('');
      setEvents([...events, { start: selectedDate, end: selectedDate, title: 'Rendez-vous' }]);
      setShowFormModal(false);
    } catch (error) {
      alert("Erreur lors de l'ajout du rendez-vous");
    }
  };

  useEffect(() => {
    fetchRendezVousData();
  }, [user.token]);

  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <WelcomeBanner />
          <div className="dark:bg-gray-50 shadow-md p-8 pb-8 h-screen rounded-lg py-3 bg-gray-50 dark:bg-gray-800 text-gray-500 overflow-y-auto">
            <div className="flex flex-col gap-2 sm:flex-row  ">
              <button onClick={openFormModal} className="btn bg-indigo-500 m-8 hover:bg-indigo-600 text-white flex items-center">
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Ajouter un Rendez-Vous</span>
              </button>
            </div>
            {showFormModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className="relative bg-white rounded-lg max-w-md w-full">
                  <button onClick={closeFormModal} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Rendez-vous</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientNom">
                          Nom du patient
                        </label>
                        <input
                          id="patientNom"
                          type="text"
                          name="patientNom"
                          value={patientNom}
                          onChange={handleChange}
                          className="w-full bg-gray-100 rounded-md border-transparent focus:border-gray-500 focus:bg-gray-50 focus:ring-0"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nouvelleDate">
                          Nouvelle date du rendez-vous
                        </label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          timeCaption="Heure"
                          dateFormat="yyyy-MM-dd HH:mm"
                          className="w-full bg-gray-100 rounded-md border-transparent focus:border-gray-500 focus:bg-gray-50 focus:ring-0"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Ajouter
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultDate={new Date()}
              onSelectSlot={(slotInfo) => handleDateChange(slotInfo.start)}
              onSelectEvent={(event) => handleEventClick(event)}
              selectable
              formats={{
                eventTimeRangeFormat: ({ start }) => moment(start).format('HH:mm'),
              }}
              messages={{
                next: "Suivant",
                previous: "Précédent",
                today: "Aujourd'hui",
                month: "Mois",
                week: "Semaine",
                day: "Jour",
              }}
              min={new Date().setHours(7, 0)}
              max={new Date().setHours(17, 0)} className='dark:bg-gray-50 pt-6 rounded-lg pb-6 p-9'
            />

            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                <div className="relative bg-white rounded-lg max-w-md w-full">
                  <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Modifier le Rendez-vous</h2>
                    <form onSubmit={handleUpdate} >
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientNom">
                          Nom du patient
                        </label>
                        <input
                          id="patientNom"
                          type="text"
                          name="patientNom"
                          value={patientNom}
                          onChange={handleChange}
                          className="w-full bg-gray-100 rounded-md border-transparent focus:border-gray-500 focus:bg-gray-50 focus:ring-0"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nouvelleDate">
                          Nouvelle date du rendez-vous
                        </label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          timeCaption="Heure"
                          dateFormat="yyyy-MM-dd HH:mm"
                          className="w-full bg-gray-100 rounded-md border-transparent focus:border-gray-500 focus:bg-gray-50 focus:ring-0"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Modifier
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCancelAppointment}>
                          Annuler rendez-vous
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  </div>
);
}

export default AddRendezVousForm;