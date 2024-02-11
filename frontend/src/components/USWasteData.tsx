import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { wasteDataByYear } from '../data/USemissionsdata'; 

const UsWasteData: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear()); 

  const filteredData = wasteDataByYear.find((data) => data.year === selectedYear);

  const chartData = {
    labels: ['Hazardous Waste', 'Non-Hazardous Waste', 'Recycled Waste'],
    datasets: [
      {
        label: `Waste Management ${selectedYear}`,
        data: filteredData ? [filteredData.hazardousWaste, filteredData.nonHazardousWaste, filteredData.recycledWaste] : [0, 0, 0],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center mb-6">ConocoPhillips USA Sustainability Metrics</h1>
      <div className="flex justify-center mb-6">
        <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))} className="p-2 border rounded">
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
        </select>
      </div>
      <div className="flex justify-center gap-10 mb-10">
        <div className="aspect-w-16 aspect-h-92">
          <Bar data={chartData} style={{width:500,height:500}} />
        </div>
      </div>
    </div>
  );
};

export default UsWasteData;
