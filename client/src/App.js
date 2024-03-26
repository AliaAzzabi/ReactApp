import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./login/login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Etat de connexion

  // Fonction de connexion réussie
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoggedIn && <Sidebar isSidebar={isSidebar} />} {/* Afficher la barre latérale uniquement si l'utilisateur est connecté */}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {!isLoggedIn && <Route path="/login" element={<Login onLogin={handleLogin} />} />} {/* Afficher la page de connexion uniquement si l'utilisateur n'est pas connecté */}
              {isLoggedIn && <Route path="/" element={<Dashboard />} />} {/* Afficher le tableau de bord si l'utilisateur est connecté */}
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
