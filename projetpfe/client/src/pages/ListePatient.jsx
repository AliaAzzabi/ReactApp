import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { Link } from 'react-router-dom';
import { PencilIcon,CalendarIcon, TrashIcon } from '@heroicons/react/outline';
import { getPatient, deletePatient, updatePatient } from '../liaisonfrontback/operation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

function ListePatient() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    cin: '',
    nomPrenom: '',
    telephone: '',
    dateNaissance: '',
    email: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatient();
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleDeletePatient = (id) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce patient ?");
    if (confirmDelete) {
      deletePatient(id, (res) => {
        if (res.data) {
          setPatients(patients.filter(patient => patient._id !== id));
          console.log("patient supprimé avec succès");
        } else {
          console.error("Erreur lors de la suppression du patient :", res.error);
        }
      });
    }
  };

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setFormData({
      cin: patient.cin,
      nomPrenom: patient.nomPrenom,
      telephone: patient.telephone,
      email: patient.email,
      dateNaissance: patient.dateNaissance ? new Date(patient.dateNaissance) : null,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPatient(null);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateNaissance: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      nomPrenom: formData.nomPrenom,
      telephone: formData.telephone,
      dateNaissance: formData.dateNaissance,
      email: formData.email,
      cin: formData.cin,
    };
    updatePatient(selectedPatient._id, updatedData, (message) => {
      console.log(message);
      setPatients(patients.map(patient =>
        patient._id === selectedPatient._id ? { ...patient, ...updatedData } : patient
      ));
    });
    closeModal();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <WelcomeBanner />
            <Card className="h-full w-full dark:bg-gray-800">
              <CardHeader floated={false} shadow={false} className=" dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-none">
                <div className=" mb-5 ml-10 flex items-center mr-8 justify-between gap-8">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Liste des Patients
                    </Typography>
                  </div>
                </div>
                <div className="  flex items-center mr-8 justify-between gap-8">


                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 ml-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" id="table-search-users" className="block p-2 ps-10 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 ml-8 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chercher" onChange={handleSearch} />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row ">
                    <Link to="/addPatient" className="btn bg-indigo-500 hover:bg-indigo-600 text-white flex items-center">
                      <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="hidden xs:block ml-2">Ajouter un Patient</span>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="overflow-x-auto px-0 dark:bg-gray-800 text-gray-500">
                <div className="overflow-y-auto max-h-[800px]">
                  {/* Table */}
                  <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >
                            CIN
                          </Typography>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >
                            Nom & Prénom
                          </Typography>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >
                            Date de naissance
                          </Typography>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >
                            Téléphone
                          </Typography>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
  <Typography
    variant="small"
    color="blue-gray"
    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
  >
    Date de création
  </Typography>
</th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">

                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients
                        .filter(patient =>
                          patient.nomPrenom.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((patient) => (
                          <tr key={patient._id}>
                            <td className='p-4 border-b border-blue-gray-50'>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {patient.cin}
                              </Typography>
                            </td>
                            <td className='p-4 border-b border-blue-gray-50'>
                              <div className="flex items-center gap-3">
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    {patient.nomPrenom}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70 dark:text-white"
                                  >
                                    {patient.email}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className='p-4 border-b border-blue-gray-50'>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {new Date(patient.dateNaissance).toLocaleDateString()}
                              </Typography>
                            </td>
                            <td className='p-4 border-b border-blue-gray-50'>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {patient.telephone}
                              </Typography>
                            </td>

<td className='p-4 border-b border-blue-gray-50'>
  <Typography
    variant="small"
    color="blue-gray"
    className="font-normal"
  >
    {new Date(patient.createdAt).toLocaleDateString()}
  </Typography>
</td>

                            <td className='p-4 border-b border-blue-gray-50'>
                              <div className="flex items-center">
                                <Tooltip content="Modifier" className="text-white bg-indigo-500 rounded-md">
                                  <IconButton variant="text" className='text-indigo-700' onClick={() => openModal(patient)}>
                                    <PencilIcon className="h-4 w-4" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip content="Supprimer" className="text-white bg-red-400 rounded-md">
                                  <IconButton variant="text" className='text-red-800' onClick={() => handleDeletePatient(patient._id)}>
                                    <TrashIcon className="h-4 w-4" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip content="Rendez-vous" className="text-white bg-green-400 rounded-md">
      <IconButton variant="text" className='text-green-800'>
        <CalendarIcon className="h-4 w-4" />
      </IconButton>
    </Tooltip>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
              <CardFooter className="text-gray-500 flex items-center justify-between  border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className=" font-normal ">
                  Page 1 of 10
                </Typography>
                <div className="flex gap-2 ">
                  <Button variant="outlined" size="sm" className='text-gray-500 dark:bg-gray-800'>
                    Previous
                  </Button>
                  <Button variant="outlined" size="sm" className='text-gray-500 dark:bg-gray-800'>
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          {isModalOpen && (
            <div className="overflow-y-auto  fixed inset-0 z-0 overflow-y-auto flex pb-5 items-center justify-center">
              
              <div className="overflow-y-auto dark:bg-gray-900 dark:text-gray-50 text-gray-800 absolute inset-0 bg-black opacity-50" onClick={closeModal}>
               
              </div>
              <div className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 z-50 bg-white p-6 rounded-lg max-w">
                <div className='  dark:bg-gray-800 dark:text-gray-50 text-gray-800 overflow-hidden'>
                  <h1 className="mb-8  dark:bg-gray-800 dark:text-gray-50 leading-7 text-gray-800 ">Entrer les informations :</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex mb-4">
                    <div className="flex flex-col mr-4">
                      <label htmlFor="nomPrenom" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Nom & Prénom
                      </label>
                      <input
                        type="text"
                        id="nomPrenom"
                        name="nomPrenom"
                        className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Entrez le nom et prénom"
                        value={formData.nomPrenom}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                    </div>
                    <div className="flex flex-col mr-4">
                      <label htmlFor="cin" className="mb-1 text-sm font-medium text-blue-gray-900">
                        CIN
                      </label>
                      <input
                        type="number"
                        id="cin"
                        name="cin"
                        className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Entrez le CIN"
                        value={formData.cin}
                        onChange={handleChange}
                        autoComplete="cin"
                      />
                    </div>

                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex-col mr-4">
                      <label htmlFor="telephone" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Entrez le numéro de téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />

                    </div>
                    <div className="flex flex-col mr-4">
                      <label htmlFor="dateNaissance" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Date de naissance
                      </label>
                      <DatePicker
                        selected={formData.dateNaissance}
                        onChange={handleDateChange}
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                        dateFormatCalendar="MMMM"
                        dateFormat="dd/MM/yyyy"
                        className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex-col mr-4">
                      <label htmlFor="dateNaissance" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Date de naissance
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Entrez le numéro de téléphone"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="tel"
                      />

                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button onClick={closeModal} size="sm" className=' text-gray-700 bg-gray-200 '>
                      Annuler
                    </Button>
                    <Button type="submit" size="sm" color="indigo" className="ml-2">
                      Modifier
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default ListePatient;
