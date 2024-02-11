import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Usnews from '../components/USnews';
import { emissionsData, waterUsageData,wasteDataByYear } from '../data/USemissionsdata';
import UsWasteData from '../components/USWasteData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
);

const UsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center mb-6">ConocoPhillips USA</h1>
      <div className="flex justify-center gap-10 mb-10">
        <div className="w-1/2">
          <Bar data={emissionsData} />
        </div>
        <div className="w-1/2">
          <Doughnut data={waterUsageData} />
        </div>
        <div className="w-1/2">
          <UsWasteData/>
        </div>
      </div>
      <div className='container'>
      <div className="flex flex-col min-h-screen">
        <h1 className="text-center mb-6">Concophillips USA Sustainbility News Tracker</h1>
        <Usnews />
      </div>
      </div>
    </div>
  );
};

export default UsPage;
