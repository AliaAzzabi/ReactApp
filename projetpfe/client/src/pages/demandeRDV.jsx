import React, { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';

function DemandeRDV() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user } = useContext(AuthContext);


    if (!user || (user.role !== "aide")) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                        <WelcomeBanner />
      
                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        
                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">
                                            Nom Prénom
                                        </th>
                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">
                                            email
                                        </th>
                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">
                                            telephone
                                        </th>
                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">
                                            telephone
                                        </th>
                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">
                                            Medecin
                                        </th>
                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">
                                           Date et heure du rendez-vous
                                        </th>


                                        <th scope="col" className="px-6 py-3 pb-5 pt-5">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        
                                        <td className="px-6 py-4 whitespace-nowrap"></td>

                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                                                                <td className="px-6 py-4 whitespace-nowrap"></td>

                                        <td className="px-6 py-4 whitespace-nowrap">
            <button className="px-3 py-1 bg-green-400 text-white  hover:bg-green-600 mr-2">Accepter</button>
            <button className="px-3 py-1 bg-orange-500 text-white  hover:bg-orange-600">Refuser</button>
        </td>

                                    </tr>
                                </tbody>

                            </table>

                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default DemandeRDV;
