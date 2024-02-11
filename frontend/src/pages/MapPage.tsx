import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import Map from '../components/Map';

const locations = [
    {
      lat: 61.8071431764385,
      lng: -150.16892929440104,
      name: "ConocoPhillips Alaska",
      data: "ConocoPhillips is Alaska’s largest crude oil producer and largest owner of exploration leases, with approximately 1.2 million net undeveloped acres at year-end 2022."
    },
    {
      lat: 51.04768608573762,
      lng: -114.0694294571235,
      name: "ConocoPhillips Canada",
      data: "Sustainability initiatives in Canada include..."
    },
    {
      lat: 32.00633382268683,
      lng: -102.07963776868668,
      name: "ConocoPhillips Midland",
      data: "Sustainability initiatives in Midland include..."
    },
    {
      lat: 29.789574159754785,
      lng: -95.6170531152436,
      name: "ConocoPhillips Houston",
      data: "Sustainability initiatives in Houston include..."
    },
    {
      lat: 4.672354673317317,
      lng: -74.05202514980657,
      name: "ConocoPhillips Colombia",
      data: "Sustainability initiatives in Colombia include..."
    },
    {
      lat: 28.3113,
      lng: 19.9354,
      name: "ConocoPhillips Libya",
      data: "Sustainability initiatives in Libya include..."
    },
    {
      lat: 61.83193829513069,
      lng: 6.215427286651343,
      name: "ConocoPhillips Norway",
      data: "Sustainability initiatives in Norway include..."
    },
    {
      lat: 25.2854,
      lng: 51.5310,
      name: "ConocoPhillips Qatar",
      data: "Sustainability initiatives in Qatar include..."
    },
    {
      lat: 39.8674,
      lng: 116.4883,
      name: "ConocoPhillips China",
      data: "Sustainability initiatives in China include..."
    },
    {
      lat: 3.1568,
      lng: 101.7132,
      name: "ConocoPhillips Malaysia",
      data: "Sustainability initiatives in Malaysia include..."
    },
    {
      lat: -27.4705,
      lng: 153.0260,
      name: "ConocoPhillips Australia",
      data: "Sustainability initiatives in Australia include..."
    }
  ];
  const MapPage: React.FC = () => {
    return (
      <div>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Sustainbility within ConocoPhillip's locations</h1>
        <Map locations={locations} />
      </div>
    );
  };
  
  export default MapPage;
  