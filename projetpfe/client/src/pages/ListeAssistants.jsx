import React, { useState, useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

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
 
const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Nom et prénom", "Poste", "Date d'adhésion", "Téléphone", "Médecin lié",""];
 
const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Infermière",
        org: "Organization",
       
        date: "23/04/18",
        telephone: "0123456789",
        medecinLie: "Dr. Smith",
      },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Réceptionniste",
    org: "Developer",
    date: "23/04/18",
    telephone: "0123456789",
        medecinLie: "Dr. Smith",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    date: "19/09/17",
    telephone: "0123456789",
        medecinLie: "Dr. Smith",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    date: "24/12/08",
    telephone: "0123456789",
        medecinLie: "Dr. Smith",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    date: "04/10/21",
    telephone: "0123456789",
        medecinLie: "Dr. Smith",
  },
];

function ListeAssistant() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedAssistant, setSelectedAssistant] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer l'ouverture et la fermeture du modal
    
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
      }

    const openModal = (selectedAssistant) => {
      console.log("Modal opened with assistant:", selectedAssistant);
      setIsModalOpen(true);
  };
  const closeModal = () => {
      // Logique pour fermer le modal
      setIsModalOpen(false);
  };

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
                    

                        {/* Cards */}

                        <Card className="h-full w-full dark:bg-gray-800">
                            <CardHeader floated={false} shadow={false} className=" dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-none">
                                <div className=" mb-8 ml-8 flex items-center mr-8 justify-between gap-8">
                                <div>
                                        <Typography variant="h5" color="blue-gray">
                                             Liste des assistants
                                        </Typography>
                                       
                                    </div>
                                    <div className="flex flex-col gap-2 sm:flex-row mt-2">
                                        <Link to="/addAssistant" className="btn bg-indigo-500 hover:bg-indigo-600 text-white flex items-center">
                                            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                            </svg>
                                            <span className="hidden xs:block ml-2">Ajouter un assistant</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 ml-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="table-search-users" className="block p-2 ps-10 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 ml-8 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chercher"/>
                                </div>
                            </CardHeader>
                            <CardBody className="overflow-x-auto px-0 dark:bg-gray-800 text-gray-500">
  <div className="overflow-y-auto max-h-[800px]">
    <table className="mt-4 w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th
              key={head}
              className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
              >
                {head}
               
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map(
          ({ img, name, email, job, org, date, telephone, medecinLie }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <Avatar src={img} alt={name} size="sm" />
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70 dark:text-white"
                      >
                        {email}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className={classes}>
                  <div className="flex flex-col">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal opacity-70 dark:text-white"
                    >
                      {org}
                    </Typography>
                  </div>
                </td>
                
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {telephone}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {medecinLie}
                  </Typography>
                </td>
                <td className={classes}>
    <div className="flex items-center">
        <Tooltip content="Modifier" className="text-white bg-indigo-500 rounded-md">
            <IconButton variant="text" className='text-indigo-700' onClick={() => openModal({ img, name, email, job, org, date, telephone, medecinLie })}>
                <PencilIcon className="h-4 w-4" />
            </IconButton>
        </Tooltip>
        <Tooltip content="Supprimer" className="text-white bg-red-400 rounded-md">
            <IconButton variant="text" className='text-red-800'>
                <TrashIcon className="h-4 w-4" />
            </IconButton>
        </Tooltip>
    </div>
</td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
    
  </div>
</CardBody>
                            <CardFooter className="text-gray-500 flex items-center justify-between border-t border-blue-gray-50 p-4">
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
                    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
                        <div className="dark:bg-gray-900 dark:text-gray-50 text-gray-800 absolute inset-0 bg-black opacity-50"></div>
                        <div className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 z-50 bg-white p-6 rounded-lg max-w">
                        <div className=' dark:bg-gray-800 dark:text-gray-50 text-gray-800  overflow-hidden'>
        <h1 className="mb-8 dark:bg-gray-800 dark:text-gray-50   leading-7 text-gray-800 ">Entrer les informations :</h1>
    </div>
                            <form>
    <div className="flex mb-4">
        <div className="flex flex-col mr-4">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                Prénom
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                placeholder="Entrez le nom et prénom"
            />
        </div>
        <div className="flex flex-col mr-4">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                Nom
            </label>
            <input
                type="text"
                id="name"
                name="name"
                className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                placeholder="Entrez le nom et prénom"
            />
        </div>
        </div>
        <div className="flex mb-4">
       
        
        <div className="flex flex-col mr-4">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                Téléphone
            </label>
            <input
                type="tel"
                id="tel"
                name="tel"
                className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                placeholder="Entrez le numéro de téléphone"
            />
        </div>
        <div className="flex flex-col mr-4">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                date de naissance
            </label>
           <Datepicker/>
        </div>
    </div>
    <div className="flex mb-4">
      
        <div className="flex flex-col mr-4">
            <label htmlFor="medecin" className="mb-1 text-sm font-medium text-blue-gray-900">
                Médecin lié
            </label>
            <select
                id="medecin"
                name="medecin"
                className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 mb-1 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
            >
                <option value="" disabled selected>
                    Sélectionnez le médecin
                </option>
                <option value="1">Dr. Smith</option>
                <option value="2">Dr. Johnson</option>
                {/* Ajoutez d'autres options selon vos besoins */}
            </select>
        </div>
        <div className="flex flex-col mr-4">
          
          <label htmlFor="job" className="mb-1 text-sm font-medium text-blue-gray-900">
              Poste
          </label>
          <select
              id="poste"
              name="poste"
              className=" dark:bg-gray-800 dark:text-gray-50 text-gray-800 mb-1 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
          >
              <option value="" disabled selected>
                  Sélectionnez la poste
              </option>
              <option value="1">Infermière</option>
              <option value="2">Secrétaire</option>
          </select>
      </div>
    </div>

    <div className="flex justify-end mt-4">
        <Button onClick={closeModal} size="sm"  className=' text-gray-700 bg-gray-200 '>
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

export default ListeAssistant;
