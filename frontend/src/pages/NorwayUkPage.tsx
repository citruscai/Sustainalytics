import React from 'react';
import NorwayNews from '../components/NorwayNews';
import { emissionsData,waterUsageData } from '../data/NOUKemissionsdata';
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
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend
  );
  

const NorwayUkPage: React.FC = () => {
  return (
    <div>
    <h1 className="text-center mb-6">ConocoPhillips Norway/UK</h1>
    <div className="flex justify-center gap-10 mb-10">
      <div className="w-1/2">
        <Bar data={emissionsData} />
      </div>
      <div className="w-1/2">
        <Doughnut data={waterUsageData} />
      </div>
    </div>
    <div className="flex flex-col min-h-screen">
      <NorwayNews />
    </div>
  </div>
  );
}

export default NorwayUkPage;
// Path: frontend/src/pages/AustraliaPage.tsx