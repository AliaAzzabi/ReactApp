import React, { useState,useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import { Link } from 'react-router-dom';
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



function Profile() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user } = useContext(AuthContext);

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

                        <div className="sm:flex sm:justify-between sm:items-center mb-8">


                        </div>

                        {/* profile */}
                        <div className="grid grid-cols-3">
                            {/* Profile Section */}
                            <div className=" dark:bg-gray-800 text-gray-500 sm:col-span-1 bg-white shadow-xl rounded-lg py-3 h-96 mr-8">
                                <div className="photo-wrapper p-2">
                                    <img className="w-32 h-32 rounded-full mx-auto" src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"  alt="John Doe" />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-center text-xl dark:text-gray-50 text-gray-800 font-medium leading-8">John Doe</h3>
                                    <div className="text-center text-gray-400 text-xs font-semibold">
                                        <p>Radiologue</p>
                                    </div>
                                    {/* Table with profile details */}
                                    <table className="text-xs my-3">
                                        <tbody>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                                <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Téléphone</td>
                                                <td className="px-2 py-2">+977 9955221114</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                <td className="px-2 py-2">john@example.com</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                   
                                </div>
                            </div>

                            {/** formulaire */}

                            <div className=" sm:col-span-2 bg-white shadow-xl rounded-lg py-3 h-96 mr-8 dark:bg-gray-800 text-gray-500">
                                <Card className="pt-8 pl-8 pb-8 pr-8 rounded-lg dark:bg-gray-800 text-gray-500">                                    {/* Form content */}
                                    <form>
                                        <div className="space-y-12 ">


                                            <div className="border-b border-gray-500/10 pb-12">
                                                <h2 className="text-base font-semibold leading-7 dark:text-gray-50 text-gray-800">Information personnelle</h2>

                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Prénom</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Nom</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Email</label>
                                                        <div className="mt-2">
                                                            <input id="email" name="email" type="email" autoComplete="email" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="dateNaissance" className=" block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Date de naissance</label>
                                                        <div className="mt-2">
                                                            <Datepicker
                                                                id="date-of-birth"
                                                                name="date-of-birth"
                                                               
                                                            />                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="specialty" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Spécialités</label>
                                                        <div className="mt-2">
                                                            <select id="specialty" name="specialty" autoComplete="specialty" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                                <option value="1">Médecine générale</option>
                                                                <option value="2">Cardiologie</option>
                                                                <option value="3">Dermatologie</option>
                                                                <option value="4">Gynécologie</option>
                                                                <option value="5">Pédiatrie</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className=" sm:col-span-2">
                                                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Numéro de téléphone</label>
                                                        <div className="mt-2">
                                                            <input type="tel" placeholder=" +216 25 222 555" maxLength="8" name="phone" id="phone" autoComplete="tel" className=" dark:bg-gray-800 text-gray-900 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2 ">
                                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">City</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="city" id="city" autoComplete="address-level2" className="dark:bg-gray-800 text-gray-900 block w-full rounded-md border-0 py-1.5 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Nouveau mot de passe</label>
                                                <div className="mt-2">
                                                    <input type="password"  id="new-password" name="new-password" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                            {/* Confirm Password */}
                                            <div className="sm:col-span-3">
                                                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">Confirmer le mot de passe</label>
                                                <div className="mt-2">
                                                    <input type="password" id="confirm-password" name="confirm-password" className="dark:bg-gray-800 dark:text-gray-300 text-gray-600 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                </div>
                                            </div>

                                                </div>
                                            </div>

                                            <div className="border-b border-gray-500/10 pb-12">
                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                                    <div className="col-span-full">
                                                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">photo</label>
                                                        <div className="mt-2 flex justify-center rounded-lg dark:bg-gray-700 border border-dashed border-gray-500/25 px-6 py-10">
                                                            <div className="text-center">
                                                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                                                </svg>
                                                                <div className="mt-4 flex text-sm leading-6 text-gray-500">
                                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                                        <span>Upload a file</span>
                                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                                    </label>
                                                                    <p className="pl-1">or drag and drop</p>
                                                                </div>
                                                                <p className="text-xs leading-5 text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                              
                                        </div>


                                        <div className="mt-6 flex items-center justify-end gap-x-6">
                                            <button type="button" className="text-sm font-semibold leading-6 dark:text-gray-50 text-gray-900">Annuler</button>
                                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enregistrer</button>
                                        </div>
                                    </form>
                                </Card>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Profile;
