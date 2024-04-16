import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "../src/chefmedcin/scenes/global/Sidebar"
import Topbar from "../src/chefmedcin/scenes/global/Topbar";
import Dashboard from "../src/chefmedcin/scenes/dashboard";
import DoctorList from "./chefmedcin/scenes/medecin";
import AssitantList from "./chefmedcin/scenes/aide";
import DepartList from "./chefmedcin/scenes/departement";
import Adddepart from "./chefmedcin/scenes/departement/adddepartement";
import AddAide from "./chefmedcin/scenes/aide/addaide";
import AddDoctor from "./chefmedcin/scenes/medecin/adddoctor";
import Addsp from "./chefmedcin/scenes/spécialité/addspecialite";
import SpecialiteList from "./chefmedcin/scenes/spécialité";
import ModifMed from "./chefmedcin/scenes/medecin/modifmedcin";
import ModifAide from "./chefmedcin/scenes/aide/modifaide";
import ModifDepart from "./chefmedcin/scenes/departement/modifDepart";
import ModifSpecialiti from "./chefmedcin/scenes/spécialité/modifSp";
import PatientList from "./chefmedcin/scenes/patient";
import AddPatient from "./chefmedcin/scenes/patient/addpatient";

import PayementList from "./chefmedcin/scenes/payement";
import AddPayement from "./chefmedcin/scenes/payement/addpayement";

import Facture from "./chefmedcin/scenes/payement/facture";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./chefmedcin/theme";




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  // Exclure le Sidebar et Topbar sur les pages de connexion et d'inscription
  const excludeSidebarTopbarPaths = ["/login"];
  const shouldDisplaySidebarTopbar = !excludeSidebarTopbarPaths.includes(location.pathname);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          {/* Afficher le Sidebar et Topbar en fonction de la condition */}
          {shouldDisplaySidebarTopbar && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {shouldDisplaySidebarTopbar && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/doctorList" element={<DoctorList/>}/>
              <Route path="/adddoctor" element={<AddDoctor/>}/>
              <Route path="/assitantList" element={<AssitantList/>}/>
              <Route path="/addAssistant" element={<AddAide/>}/>
              <Route path="/departList" element={<DepartList/>}/>
              <Route path="/adddepart" element={<Adddepart/>}/>
              <Route path="/specialityList" element={<SpecialiteList/>}/>
              <Route path="/addSpeciality" element={<Addsp/>}/>
              <Route path="/modifMedecin" element={<ModifMed/>}/>
              <Route path="/modifAide" element={<ModifAide/>}/>
              <Route path="/modifDepart" element={<ModifDepart/>}/>
              <Route path="/modifSpecialiti" element={<ModifSpecialiti/>}/>
            
              <Route path="/patientList" element={<PatientList/>}/>
              <Route path="/addPatient" element={<AddPatient/>}/>
           
              <Route path="/facture" element={<Facture/>}/>

              <Route path="/payementList" element={<PayementList/>}/>
              <Route path="/addPayement" element={<AddPayement/>}/>
             
              
              
                          
           
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
