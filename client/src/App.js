import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "../src/chefmedcin/scenes/global/Sidebar"
import Topbar from "../src/chefmedcin/scenes/global/Topbar";
import Dashboard from "../src/chefmedcin/scenes/dashboard";
import Team from "../src/chefmedcin/scenes/team";
import Invoices from "../src/chefmedcin/scenes/invoices";
import Contacts from "../src/chefmedcin/scenes/contacts";
import Bar from "../src/chefmedcin/scenes/bar";
import Form from "../src/chefmedcin/scenes/form";
import Line from "../src/chefmedcin/scenes/line";
import Pie from "../src/chefmedcin/scenes/pie";
import FAQ from "../src/chefmedcin/scenes/faq";
import Geography from "../src/chefmedcin/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./chefmedcin/theme";
import Calendar from "../src/chefmedcin/scenes/calendar/calendar";
import Login from "./login/login";


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
              <Route path="/login" element={<Login />} />
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
