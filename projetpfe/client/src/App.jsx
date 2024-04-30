import React, { useEffect,useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import DashboardMedecin from './pages/medecin/DashboardMedecin';
import DashboardAide from './pages/aide/DashboardAid';

import Medecin from './pages/medecin/medecin';
import ListePatient from './pages/ListePatient';
import Salle from './pages/salle';
import ListeAssistant from './pages/ListeAssistants';
import AddPatient from './pages/AddPatient';
import Calendar from './pages/Calendar';
 import AddAssistant from './pages/addAssistant';
 import AddMedecin from './pages/addMedecin';
 import ListeMedecin from './pages/ListeMedecin';
 import Profile from './pages/Profile';
 import Login from './pages/login';


function App() {


  return (
    <>


      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/dash-Medecin" element={<DashboardMedecin />} />
        <Route exact path="/dash-Aide" element={<DashboardAide />} />

        <Route exact path="/medecin" element={<Medecin />} />
        <Route exact path="/listePatient" element={<ListePatient />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/salle-d'attente" element={<Salle />} />
        <Route exact path="/listeAssistant" element={<ListeAssistant />} />
        <Route exact path="/addAssistant" element={<AddAssistant />} />

        <Route exact path="/listeMedecin" element={<ListeMedecin />} />
        <Route exact path="/addMedecin" element={<AddMedecin />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/addPatient" element={<AddPatient />} />
        <Route exact path="/calender" element={<Calendar />} />
        <Route exact path="/login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
