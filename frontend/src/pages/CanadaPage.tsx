import React from 'react';
import CanadaNews from '../components/Canadanews';
import { waterUsageData,emissionsData } from '../data/CAemissionsdata';
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
import CanadaWasteData from '../components/CanadaWasteData';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    ArcElement,
    Tooltip,
    Legend
  );

  
const CanadaPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center mb-6">ConocoPhillips Canada</h1>
      <div className="flex justify-center gap-10 mb-10">
        <div className="w-1/2">
          <Bar data={emissionsData} />
        </div>
        <div className="w-1/2">
          <Doughnut data={waterUsageData} />
        </div>
        <div className="w-1/2">
          <CanadaWasteData/>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <CanadaNews />
      </div>
    </div>
  );
}

export default CanadaPage;
