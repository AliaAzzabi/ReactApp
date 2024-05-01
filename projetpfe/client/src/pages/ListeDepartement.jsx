import React, { useState, useEffect, useContext } from 'react';
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { getAllDepartement, deleteDepartement, } from '../liaisonfrontback/operation';
import moment from 'moment';
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
    Avatar,
} from "@material-tailwind/react";

function ListeDepartement() {
  
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(AuthContext);

    const [departements, setDepartements] = useState([]);

    useEffect(() => {
        getAllDepartement((res) => {
            if (res.data) {
                setDepartements(res.data);
            } else {
                console.error("Erreur lors de la récupération des départements :", res.error);
            }
        });
    }, []);
    const handleDeleteDepartement = (id) => {

        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce département ?");
        if (confirmDelete) {
            deleteDepartement(id, (res) => {
                if (res.data) {
                    setDepartements(departements.filter(departement => departement._id !== id));
                    console.log("Département supprimé avec succès");
                } else {
                    console.error("Erreur lors de la suppression du département :", res.error);
                }
            });
        }
    };
  

    const openModal = (selectedAssistant) => {
        console.log("Modal opened with assistant:", selectedAssistant);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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

                        {/* Cards */}
                        <Card className="h-full w-full dark:bg-gray-800">
                            <CardHeader floated={false} shadow={false} className=" dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-none">
                                <div className="mb-8 ml-8 flex items-center mr-8 justify-between gap-8">
                                    <div>
                                        <Typography variant="h5" color="blue-gray">
                                            Liste des spécialité
                                        </Typography>
                                    </div>
                                    <div className="flex flex-col gap-2 sm:flex-row mt-2">
                                        <Link to="/addSpecialte" className="btn bg-indigo-500 hover:bg-indigo-600 text-white flex items-center">
                                            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                                            </svg>
                                            <span className="hidden xs:block ml-2">Ajouter une spécialité</span>
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
                                    <table className="mt-4 w-full min-w-max table-auto text-left">
                                        <thead>
                                            <tr className="bg-gray-50 dark:bg-gray-700">
                                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom du département</th>
                                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nombre d'employés</th>
                                               <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Localisation</th>
                                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Responsable</th>
                                            
                                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            {departements.map((departement) => (
                                                <tr key={departement._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <td className="px-6 py-4 whitespace-nowrap">{departement.nom}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{departement.nombreEmployes}</td>
                                                  
                                                    <td className="px-6 py-4 whitespace-nowrap">{departement.localisation}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{departement.responsable}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center space-x-4">
                                                            <Tooltip content="Modifier" className="text-indigo-500 dark:text-indigo-400">
                                                                <IconButton variant="text" className='text-indigo-700' >
                                                                    <PencilIcon className="h-4 w-4" />
                                                                </IconButton>
                                                            </Tooltip>
                                                            <Tooltip content="Supprimer" className="text-red-500 dark:text-red-400">
                                                                <IconButton variant="text" className='text-red-700' onClick={() => handleDeleteDepartement(departement._id)} >
                                                                    <TrashIcon className="h-4 w-4" />
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
                                <div className='  dark:bg-gray-800 dark:text-gray-50 text-gray-800 overflow-hidden'>
                                    <h1 className="mb-8  dark:bg-gray-800 dark:text-gray-50 leading-7 text-gray-800 ">Entrer les informations :</h1>
                                </div>
                                <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
                                    <div class="relative z-0 w-full mb-10 group">
                                        <input type="text" name="nom" value={selectedDepartement.nom} onChange={handleChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="nom" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-10 group">
                                        <label for="nombreEmployes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre d'employés</label>
                                        <input type="text" name="nombreEmployes" value={selectedDepartement.nombreEmployes} onChange={handleChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    </div>
                                    {/* Ajoutez d'autres champs ici avec la même logique */}
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

export default ListeDepartement;
