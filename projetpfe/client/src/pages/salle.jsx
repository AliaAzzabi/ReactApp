import React, { useState,useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

const TABLE_HEAD = ["", "Nom et prénom", "Horaire", "Status", "Action"];

const TABLE_ROWS = [
  {
    name: "Neil Sims",
    job: "React Developer",
    status: "En attente",
  },
  {
    name: "Bonnie Green",
    job: "Designer",
    status: "En attente",
  },
  {
    name: "Jese Leos",
    job: "Vue JS Developer",
    status: "En attente",
  },
  {
    name: "Thomas Lean",
    job: "UI/UX Engineer",
    status: "Confirmer",
  },
  {
    name: "Leslie Livingston",
    job: "SEO Specialist",
    status: "Annuler",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "En attente":
      return "bg-yellow-500";
    case "Confirmer":
      return "bg-green-500";
    case "Annuler":
      return "bg-red-500";
    default:
      return "";
  }
}

function StatusModal({ isOpen, onClose, onUpdateStatus }) {
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleStatusUpdate = () => {
    onUpdateStatus(selectedStatus);
    onClose();
  };

  return isOpen ? (
    <div className="overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md dark:bg-gray-800 shadow-md">
        <h2 className="text-lg font-bold mb-4 dark:text-gray-50">Changer le statut :</h2>
        <div className="flex space-x-4  dark:text-gray-50">
          {['En attente', 'Confirmer', 'Annuler'].map((status, index) => (
            <div key={index} className={`flex items-center cursor-pointer ${getStatusColor(status)} h-8  rounded p-2`} onClick={() => setSelectedStatus(status)}>
              <div className=" rounded-full " />
              <span>{status}</span>
            </div>
          ))}
        </div>
        <br></br>
        <div className="mt-4 flex justify-end">
          <button className="px-1 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600" onClick={handleStatusUpdate}>Mettre à jour</button>
          <button className="px-1 py-1 ml-2 border border-gray-300 rounded-md hover:bg-gray-100" onClick={onClose}>Annuler</button>
        </div>
      </div>
    </div>
  ) : null;
}

function Salle() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);
  const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
      }
  const openModal = (index) => {
    setSelectedPatientIndex(index);
    setIsModalOpen(true);
  };

  const updateStatus = (newStatus) => {
    const updatedTableRows = [...TABLE_ROWS];
    updatedTableRows[selectedPatientIndex].status = newStatus;
    setTableRows(updatedTableRows);
    setIsModalOpen(false);
  };

  const deletePatient = (index) => {
    const updatedTableRows = [...TABLE_ROWS];
    updatedTableRows.splice(index, 1);
    setTableRows(updatedTableRows);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            {/* Ajouter le bouton pour ajouter un patient */}
            <div className="flex justify-between mb-4">
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Ajouter un patient à la liste </span>
              </button>
              <button className="btn bg-red-500 hover:bg-red-600 text-white" onClick={() => deletePatient(selectedPatientIndex)}>
  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 24 24">
    <path d="M8 3h8a2 2 0 0 1 2 2v1h3a1 1 0 0 1 0 2h-.1l-1.574 13.144A3 3 0 0 1 17.433 22H6.567a3 3 0 0 1-2.993-2.856L2.1 8H2a1 1 0 0 1 0-2h3V5a2 2 0 0 1 2-2zM4.52 8l.927 11.848A1 1 0 0 0 6.429 20h11.142a1 1 0 0 0 .981-1.152L19.48 8H4.52z"/>
  </svg>
  <span className="hidden xs:block ml-2">Supprimer le patient sélectionné</span>
</button>

            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th key={index} scope="col" className="px-6 py-3 pb-5 pt-5">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input id={`checkbox-table-search-${rowIndex}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                          <label htmlFor={`checkbox-table-search-${rowIndex}`} className="sr-only">checkbox</label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.job}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex items-center ${getStatusColor(row.status)} rounded-full h-2 w-2 mr-2`} />
                          <span className="ml-1">{row.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-1 py-1 bg-indigo-200 dark:text-white text-gray-500 rounded-md dark:bg-gray-500 hover:bg-indigo-100" onClick={() => openModal(rowIndex)}>Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <StatusModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUpdateStatus={updateStatus} />
    </div>
  );
}

export default Salle;
