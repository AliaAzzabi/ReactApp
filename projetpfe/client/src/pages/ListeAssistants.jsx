import React, { useState, useEffect, useContext } from 'react';
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
import { getAllAide, deleteAide, updateAide } from '../liaisonfrontback/operation'; // Importez la fonction Axios pour récupérer les utilisateurs
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

function ListeAssistant() {
  const [users, setUsers] = useState([]); // État pour stocker les données des utilisateurs récupérées depuis l'API
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [aides, setaide] = useState([]);
  const [selectedAide, setSelectedAide] = useState(null);

  useEffect(() => {
    getAllAide((res) => {
      if (res.data) {
        setaide(res.data);
      } else {
        console.error("Erreur lors de la récupération des aides :", res.error);
      }
    });
  }, [aides]);
  const handleDeleteAide = (id) => {

    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce Aide ?");
    if (confirmDelete) {
      deleteAide(id, (res) => {
        if (res.data) {
          setaide(aides.filter(aide => aide._id !== id));
          console.log("Aide supprimé avec succès");
        } else {
          console.error("Erreur lors de la suppression du Aide :", res.error);
        }
      });
    }
  };
  if (!aides) {
    return <Navigate to="/login" />;
  }

  const openModal = (id) => {
    console.log("Modal opened with assistant:", id);
    setSelectedAide(selectedAide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAide(null);
  };


  const handleUpdateAide = (e) => {
    e.preventDefault();
    if (selectedAide) {
      const formData = new FormData(e.target);
      const updatedAide = {
        cin: formData.get('cin'),
        sexe: formData.get('sexe'),
        nomPrenom: formData.get('nomPrenom'),
        telephone: formData.get('telephone'),
        role: formData.get('role'),
        email: formData.get('email'),
        medecinlié: formData.get('medecinlié'),
        password: formData.get('password'),
      };
      updateAide(selectedAide._id, updatedAide, (res) => {
        if (res.data) {
          const updatedAide = aides.map(aide => (aide._id === res.data._id ? res.data : aide));
          setDepartements(updatedAide);
          closeModal(); // Fermer le modal après la mise à jour réussie
          console.log("aide modifié avec succès");
        } else {
          console.error("Erreur lors de la modification du aide :", res.error);
        }
      });
    }
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
            <Card className="h-full w-full dark:bg-gray-800">
              <CardHeader floated={false} shadow={false} className=" dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-none">
                <div className=" mb-8 ml-8 flex items-center mr-8 justify-between gap-8">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      Liste des Assistants
                    </Typography>

                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row mt-2">
                    <Link to="/addMedecin" className="btn bg-indigo-500 hover:bg-indigo-600 text-white flex items-center">
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
                      <path strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" id="table-search-users" className="block p-2 ps-10 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 ml-8 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chercher" />
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
                            Nom et prénom

                          </Typography>
                        </th>

                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >
                            Poste

                          </Typography>
                        </th>                                    <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
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

                            Email
                          </Typography>
                        </th>

                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >

                            Médecin lié
                          </Typography>
                        </th>
                        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 dark:border-gray-700">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70 dark:text-white"
                          >


                          </Typography>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {aides.map((aide) => (
                        <tr key={aide._id}>


                          <td className='p-4 border-b border-blue-gray-50'>
                            <div className="flex items-center gap-3">

                              <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                  {aide.image && (
                                    <div className="flex items-center gap-2">
                                      <Avatar
                                        src={`http://localhost:4000/${aide.image.filepath}`}
                                        
                                        size="small" // Vous pouvez ajuster la taille selon vos besoins (small, medium, large)
                                      />
                                      <div>
                                        <span>{aide.user.nomPrenom}</span><br/>
                                        <span>Ajouté le :
                                          {new Date(aide.user.dateAdhesion).toLocaleDateString()}</span>
                                      </div>
                                    </div>
                                  )}
                                </Typography>

                               
                              </div>
                            </div>
                          </td>
                          <td className='p-4 border-b border-blue-gray-50'>
                          <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70 dark:text-white"
                                  name="email"
                                >
                                  {aide.user.role}
                                </Typography>
                          </td>

                           <td className='p-4 border-b border-blue-gray-50'>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >  {aide.user.telephone}
                           
                            </Typography>
                          </td>

                          <td className='p-4 border-b border-blue-gray-50'><Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                             {aide.user.email}
                          </Typography></td>
                          <td className='p-4 border-b border-blue-gray-50'><Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                         {aide.medecin?.user?.nomPrenom}

                          </Typography> </td>
                          <td className='p-4 border-b border-blue-gray-50'>
                            <div className="flex items-center">
                              <Tooltip content="Modifier" className="text-white bg-indigo-500 rounded-md">
                                <IconButton variant="text" className='text-indigo-700' onClick={() => openModal(aide._id)}>
                                  <PencilIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip content="Supprimer" className="text-white bg-red-400 rounded-md">
                                <IconButton variant="text" className='text-red-800' onClick={() => handleDeleteAide(aide._id)}>
                                  <TrashIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </td>
                          {/* Ajoutez d'autres colonnes avec les données de l'utilisateur au besoin */}
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
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
              <div className="dark:bg-gray-900 dark:text-gray-50 text-gray-800 absolute inset-0 bg-black opacity-50"></div>
              <div className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 z-50 bg-white p-6 rounded-lg max-w">
                <div className='  dark:bg-gray-800 dark:text-gray-50 text-gray-800 overflow-hidden'>
                  <h1 className="mb-8  dark:bg-gray-800 dark:text-gray-50 leading-7 text-gray-800 ">Entrer les informations :</h1>
                </div>
                <form>
                  <div className="flex mb-4">
                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Cin
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                        placeholder="Entrez le nom et prénom"
                        value={selectedAssistantId.cin}
                      />
                    </div>
                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">

                        Nom & Prénom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="nomPrenom"
                        className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                        placeholder="Entrez le nom et prénom"
                        value={selectedAssistantId.nomPrenom}

                      />
                    </div>
                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">

                        Adresse
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="adresse"
                        className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                        placeholder="Entrez le nom et prénom"
                        value={selectedAssistantId.adresse}

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
                        name="telephone"
                        className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                        placeholder="Entrez le numéro de téléphone"
                        value={selectedAssistantId.telephone}

                      />
                    </div>
                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                        email
                      </label>
                      <input
                        type="text"
                        id="tel"
                        name="email"
                        className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                        placeholder="Entrez le numéro de téléphone"
                        value={selectedAssistantId.email}

                      />
                    </div>

                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                        date de naissance
                      </label>
                      <Datepicker />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Date d'adhésion
                      </label>
                      <Datepicker />
                    </div>
                    <div className="flex flex-col mr-4">
                      <label htmlFor="name" className="mb-1 text-sm font-medium text-blue-gray-900">

                        education
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="education"
                        className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 px-3 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                        placeholder="Entrez le nom et prénom"
                        value={selectedAssistantId.education}

                      />
                    </div>

                  </div>

                  <div className="flex mb-4">


                    <div className="flex flex-col mr-4">

                      <label htmlFor="job" className="mb-1 text-sm font-medium text-blue-gray-900">
                        Médecin lié
                      </label>
                      <select
                        id="poste"
                        name="poste"
                        className=" dark:bg-gray-800 dark:text-gray-50 text-gray-800 mb-1 py-2 border border-blue-gray-300  focus:outline-none focus:border-blue-500"
                      >
                        <option value="" disabled selected>
                          Sélectionnez
                        </option>
                        <option value="1">dr.ff</option>
                        <option value="2">dr.</option>
                      </select>
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

export default ListeAssistant;