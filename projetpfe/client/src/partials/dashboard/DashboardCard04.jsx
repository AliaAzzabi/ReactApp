import React, { useState, useEffect } from 'react';
import BarChart from '../../charts/BarChart01';
import axios from 'axios';

function DashboardCard04() {
  const [appointmentsData, setAppointmentsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Remplacez l'URL ci-dessous par l'endpoint de votre API pour récupérer les statistiques de rendez-vous par jour
        const response = await axios.get('http://localhost:4000/api/rendezvous/statistique');
        setAppointmentsData(response.data);
      } catch (error) {
        console.error('Error fetching appointment statistics:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Total des Rendez-vous par Jour</h2>
      </header>
      {appointmentsData && (
        <BarChart
          data={{
            labels: Object.keys(appointmentsData),
            datasets: [
              {
                label: 'Rendez-vous',
                data: Object.values(appointmentsData),
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                hoverBackgroundColor: 'rgba(59, 130, 246, 0.9)',
                barPercentage: 0.66,
                categoryPercentage: 0.66,
              },
            ],
          }}
          width={595}
          height={248}
        />
      )}
    </div>
  );
}

export default DashboardCard04;
