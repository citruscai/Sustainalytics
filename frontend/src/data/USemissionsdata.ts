
export const emissionsData = {
    labels: ["CO2 from Operations", "CO2 from Imported Electricity", "Methane", "Nitrous Oxide"],
    datasets: [
      {
        label: 'Emissions (kilotonnes)',
        data: [6129, 711, 1593, 8], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export const waterUsageData = {
    labels: ["Fresh Water Withdrawn", "Non-Fresh Water Withdrawn", "Produced Water Recycle/Reuse"],
    datasets: [
      {
        label: 'Water Usage (million cubic meters)',
        data: [5.4, 26.7, 49.6], 
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  