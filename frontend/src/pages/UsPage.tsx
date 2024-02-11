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
import { emissionsData, waterUsageData } from '../data/USemissionsdata';

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
      </div>
      <div className="flex flex-col min-h-screen">
        <Usnews />
      </div>
    </div>
  );
};

export default UsPage;
