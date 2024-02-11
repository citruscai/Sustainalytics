
export const emissionsData = {
    labels: ["CO2 from Operations", "CO2 from Imported Electricity", "Methane", "Nitrous Oxide"],
    datasets: [
      {
        label: 'Emissions (kilotonnes)',
        data: [3217, 336, 46, 7], 
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
        data: [2.1, 0.1, 24.4], 
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

  export const wasteDataByYear = [
    { year: 2020, hazardousWaste: 14800, nonHazardousWaste: 63600, recycledWaste: 100 },
    { year: 2021, hazardousWaste: 16900, nonHazardousWaste: 60200, recycledWaste: 100 },
    { year: 2022, hazardousWaste:69791, nonHazardousWaste: 121544, recycledWaste: 5311 },
  ];
  
  