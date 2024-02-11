
export const emissionsData = {
    labels: ["CO2 from Operations", "CO2 from Imported Electricity", "Methane", "Nitrous Oxide"],
    datasets: [
      {
        label: 'Emissions (kilotonnes)',
        data: [1094, 14, 27, 4], 
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
    labels: ["Fresh Water Withdrawn", "Non-Fresh Water Withdrawn", "Produced Water Recycle/Reuse","Hydrocarbons in Overboard Discharges (tonnes)"],
    datasets: [
      {
        label: 'Water Usage (million cubic meters)',
        data: [1.6, 25.9, 0,129], 
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
    { year: 2020, hazardousWaste: 13200, nonHazardousWaste: 1100, recycledWaste: 8300  },
    { year: 2021, hazardousWaste: 5800, nonHazardousWaste: 1400, recycledWaste: 7400 },
    { year: 2022, hazardousWaste:8540, nonHazardousWaste:3115, recycledWaste: 7169},
  ];
  