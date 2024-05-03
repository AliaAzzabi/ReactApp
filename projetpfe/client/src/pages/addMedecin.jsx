import React, { useState, useContext, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import { addMedecin } from '../liaisonfrontback/operation'; 
import { getAllspecialities, getAllDepartement } from '../liaisonfrontback/operation';
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

function AddMedecin() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const [departements, setDepartements] = useState([]);
    const [specialites, setSpecialites] = useState([]);
    useEffect(() => {
        getAllspecialities((res) => {
            if (res.data) {
                setSpecialites(res.data);
            } else {
                console.error("Erreur lors de la récupération des spécialités :", res.error);
            }
        });
    }, []); 
    useEffect(() => {
        getAllDepartement((res) => {
            if (res.data) {
                setDepartements(res.data);
            } else {
                console.error("Erreur lors de la récupération des départements :", res.error);
            }
        });
    }, []);

    const handleDepartementChange = (e) => {
        const selectedDepartementId = e.target.value;
        setMedecin({
            ...medecin,
            departement: selectedDepartementId, 
        });
    };
    const handleSpecialiteChange = (e) => {
        const selectedSpecialiteId = e.target.value;
        setMedecin({
            ...medecin,
            specialite: selectedSpecialiteId, 
        });
    };
    const [medecin, setMedecin] = useState({
        cin: '',
        nomPrenom: '',
        telephone: '',
        email: '',
        password: '',
        sexe: '',
       
        dateAdhesion: '',
        dateNaissance: '',
        role:'médecin',
        image: null,
        adresse: '',
        departement: null,
        specialite: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMedecin({
            ...medecin,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setMedecin({
            ...medecin,
            image: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', medecin.image);

        Object.keys(medecin).forEach((key) => {
            if (key !== 'image' && Array.isArray(medecin[key])) {
                medecin[key].forEach((item) => {
                    formData.append(key, item);
                });
            } else {
                formData.append(key, medecin[key]);
            }
        });

        addMedecin(formData, (response) => {
            if (response && !response.error) {
                alert('Le médecin a été ajouté avec succès');
                setMedecin({
                    cin: '',
                    nomPrenom: '',
                    telephone: '',
                    email: '',
                    password: '',
                    sexe: '',
                   
                    dateAdhesion: '',
                    dateNaissance: '',
                    image: null,
                    adresse: '',
                    role:'medecin',
                    
                   
                });
            } else {
                console.error("Erreur lors de l'ajout du médecin :", response && response.error);
                alert('Une erreur s\'est produite lors de l\'ajout du médecin');
            }
        });
    };

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto ">
                        <WelcomeBanner />
                        <div className="sm:col-span-2 rounded-lg py-3 h dark:bg-gray-800 text-gray-500">
                            <Card className="pt-8 pl-8 pb-7 pr-8 rounded-lg dark:bg-gray-800 text-gray-500">
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-12">
                                        <div className="overflow-hidden">
                                            <h1 className="text-xl text-center leading-7 text-gray-600">Ajouter un médecin</h1>
                                        </div>
                                        <div className="border-b border-gray-500/10 pb-12">
                                            <h2 className="text-base font-semibold leading-7 dark:text-gray-50 text-gray-800">Informations personnelles</h2>
                                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="cin" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">CIN *</label>
                                                    <div className="mt-2">
                                                        <input type="text" name="cin" id="cin" value={medecin.cin} onChange={handleInputChange} autoComplete="given-name" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="nomPrenom" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Nom & Prénom *</label>
                                                    <div className="mt-2">
                                                        <input type="text" name="nomPrenom" id="nomPrenom" value={medecin.nomPrenom} onChange={handleInputChange} autoComplete="given-name" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Numéro de téléphone *</label>
                                                    <div className="mt-2">
                                                        <input type="tel" placeholder="+216 25 222 555" maxLength="8" name="telephone" id="telephone" value={medecin.telephone} onChange={handleInputChange} autoComplete="tel" className="dark:bg-gray-800 text-gray-900 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Email *</label>
                                                    <div className="mt-2">
                                                        <input id="email" name="email" type="email" value={medecin.email} onChange={handleInputChange} autoComplete="email" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Mot de passe *</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            value={medecin.password}
                                                            onChange={handleInputChange}
                                                            autoComplete="current-password"
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <legend className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Sexe *</legend>
                                                    <div className="mt-4 flex gap-x-4">
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="male"
                                                                name="sexe"
                                                                value="male"
                                                                checked={medecin.sexe === 'male'}
                                                                onChange={handleInputChange}
                                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-600"
                                                                required
                                                            />
                                                            <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-600 dark:text-gray-50">Homme</label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="femme"
                                                                name="sexe"
                                                                value="femme"
                                                                checked={medecin.sexe === 'femme'}
                                                                onChange={handleInputChange}
                                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-600"
                                                                required
                                                            />
                                                            <label htmlFor="femme" className="block text-sm font-medium leading-6 text-gray-600 dark:text-gray-50">Femme</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Rôle *</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="role"
                                                            name="role"
                                                            type="text"
                                                            value={medecin.role}
                                                            onChange={handleInputChange}
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="dateAdhesion" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Date d'adhésion *</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="dateAdhesion"
                                                            name="dateAdhesion"
                                                            type="date"
                                                            value={medecin.dateAdhesion}
                                                            onChange={handleInputChange}
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="dateNaissance" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Date de naissance *</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="dateNaissance"
                                                            name="dateNaissance"
                                                            type="date"
                                                            value={medecin.dateNaissance}
                                                            onChange={handleInputChange}
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="adresse" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Adresse *</label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="adresse"
                                                            name="adresse"
                                                            type="text"
                                                            value={medecin.adresse}
                                                            placeholder='Adresse ...'
                                                            onChange={handleInputChange}
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="departement" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Département *</label>
                                                    <div className="mt-2">
                                                        {/* Insérez votre liste d'options pour le département ici */}
                                                        <select
                                                            id="departement"
                                                            name="departement"
                                                            value={medecin.departement}
                                                            onChange={handleDepartementChange}
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        >
                                                             <option value="">Département ..</option>
                                                            {departements.map((depart) => (
                                                                <option key={depart._id} value={depart._id}>{depart.localisation}</option>
                                                            ))}
                                                           
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="specialite" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Spécialité *</label>
                                                    <div className="mt-2">
                                                        {/* Insérez votre liste d'options pour la spécialité ici */}
                                                        <select
                                                            id="specialite"
                                                            name="specialite"
                                                            value={medecin.specialite}
                                                            onChange={handleSpecialiteChange}
                                                            className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        >
                                                            <option value="">Spécialité ...</option>
                                                            {specialites.map((specialite) => (
                                                                <option key={specialite._id} value={specialite._id}>{specialite.nom}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="sm:col-span-3">
                                                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Image de profil</label>
                                                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <svg
                                                                className="mx-auto h-12 w-12 text-gray-400"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 48 48"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M8 14v20c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4H12c-2.2 0-4 1.8-4 4zm26 6l-9 11-6-7-4 4V20h14l4-6h6v16zm-9-4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
                                                                />
                                                            </svg>
                                                            <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                                                <label
                                                                    htmlFor="file-upload"
                                                                    className="relative cursor-pointer bg-white rounded-md font-medium dark:bg-gray-800 dark:text-gray-300 text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                >
                                                                    <span>Modifier</span>
                                                                    <input
                                                                        id="file-upload"
                                                                        name="file-upload"
                                                                        type="file"
                                                                        className="sr-only"
                                                                        onChange={handleImageChange}
                                                                    />
                                                                </label>
                                                                <p className="pl-1">votre fichier</p>
                                                            </div>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF jusqu'à 10Mo</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <div>
                                            <div>
                                                <button
                                                    type="submit"
                                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Ajouter le médecin
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AddMedecin;