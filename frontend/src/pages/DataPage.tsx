import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';


Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["USA", "Canada", "Norway/UK", "Australia"],
  datasets: [
    {
      label: "Total greenhouse gases (kilotonnes)",
      data: [8441, 3605, 1138, 2134],
      backgroundColor: [
        'rgb(115, 191, 184)',
        'rgb(61, 165, 217)',
        'rgb(35, 100, 170)',
        'rgb(254, 198, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true, 
    },
    title: {
      display: true,
      text: 'Total greenhouse gas emissions by country',
      font: {
        size: 18,
      },
    },
  },
};

const DataPage: React.FC = () => {
  return (
    <div style={{ height: 400, width: 400 }}>
      <h2>Pie Chart: Greenhouse Gas Emissions</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default DataPage;
