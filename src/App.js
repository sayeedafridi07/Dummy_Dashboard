import Auth from "./login/Auth";
import Dashboard from "./dashboard/dashboard";
import PatientManagement from "./patientManagement/PatientManagement";
import Navbar from "./navbar/Navbar";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useLocation } from 'react-router-dom';
import ManageProfile from "./patientManagement/manageProfile/ManageProfile";
import OpportunityCenter from "./dashboard/opportunityCenter/OpportunityCenter";
import Settings from "./settings/Settings";
import Communication from "./communication/Communication";

function App() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogged(true);
    }

    if (user && location.pathname === "/") {
      window.location.href = "/dashboard";
    }
  }, [location]);

  console.log(isLogged);

  return (
    <main className="mx-auto w-screen">
      {isLogged && <Navbar />}
      <div className="flex bg-[var(--grey-3)]"
      >
        {isLogged && <Sidebar />}
        <div className="flex-1">
          <Routes>
            {
              isLogged ? (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/dashboard/opportunity-center" element={<OpportunityCenter />} />
                  <Route path="/patient-management" element={<PatientManagement />} />
                  <Route path="/patient-management/:id" element={<ManageProfile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/communication" element={<Communication />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Auth />} />
                  <Route path="/*" element={<h1>Not Found</h1>} />
                </>
              )
            }
          </Routes>
        </div>
      </div>
    </main>
  );
}

export default App;