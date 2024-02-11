import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import Map from '../components/Map';

const locations = [
    {
      lat: 61.8071431764385,
      lng: -150.16892929440104,
      name: "ConocoPhillips Alaska",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems3.
      Engaging with local stakeholders, including Indigenous peoples, to understand their values and interests, and contributing to economic and social opportunities.
      Implementing innovative technologies that reduce the environmental footprint of its activities, such as extended reach drilling.`
    },
    {
      lat: 51.04768608573762,
      lng: -114.0694294571235,
      name: "ConocoPhillips Canada",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems3.
      Engaging with local stakeholders, including Indigenous peoples, to understand their values and interests, and contributing to economic and social opportunities4.
      Implementing a Reconciliation Action Plan to promote respect, relationships, and opportunities for Aboriginal and Torres Strait Islander peoples.`
    },
    {
      lat: 32.00633382268683,
      lng: -102.07963776868668,
      name: "ConocoPhillips Midland",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems.
      Engaging with local stakeholders, including communities, landowners, and regulators, to understand their values and interests, and contributing to economic and social opportunities4.
      Supporting safer communities in the Permian Basin through education, road safety, healthcare, housing and workforce development initiatives.`
    },
    {
      lat: 29.789574159754785,
      lng: -95.6170531152436,
      name: "ConocoPhillips Houston",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems3.
      Engaging with local stakeholders, including communities, landowners, and regulators, to understand their values and interests, and contributing to economic and social opportunities4.
      Supporting safer communities in the Houston area through education, road safety, healthcare, housing and workforce development initiatives4.
      Preserving more than 500 existing trees and the surrounding landscape at the former ConocoPhillips campus in Houston’s Energy Corridor, which is being redeveloped into a mixed-use district5.`
    },
    {
      lat: 4.672354673317317,
      lng: -74.05202514980657,
      name: "ConocoPhillips Colombia",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems3.
      Engaging with local stakeholders, including communities, landowners, and regulators, to understand their values and interests, and contributing to economic and social opportunities.
      Implementing a Reconciliation Action Plan to promote respect, relationships, and opportunities for Indigenous peoples.`
    },
    {
      lat: 28.3113,
      lng: 19.9354,
      name: "ConocoPhillips Libya",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems.
      Engaging with local stakeholders, including communities, landowners, and regulators, to understand their values and interests, and contributing to economic and social opportunities.
      Implementing a Reconciliation Action Plan to promote respect, relationships, and opportunities for Indigenous peoples.`
    },
    {
      lat: 61.83193829513069,
      lng: 6.215427286651343,
      name: "ConocoPhillips Norway",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems3.
      Engaging with local stakeholders, including communities, landowners, and regulators, to understand their values and interests, and contributing to economic and social opportunities4.
      Implementing a Reconciliation Action Plan to promote respect, relationships, and opportunities for Indigenous peoples.`
    },
    {
      lat: 25.2854,
      lng: 51.5310,
      name: "ConocoPhillips Qatar",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies2.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems3.
      Engaging with local stakeholders, including communities, landowners, and regulators, to understand their values and interests, and contributing to economic and social opportunities4.
      Implementing a Reconciliation Action Plan to promote respect, relationships, and opportunities for Indigenous peoples.`
    },
    {
      lat: 39.8674,
      lng: 116.4883,
      name: "ConocoPhillips China",
      data: `Conservation: ConocoPhillips China has supported various projects to protect the environment and biodiversity, such as vegetation restoration, public eco-education, crane and wetland conservation.
      Education: ConocoPhillips China has invested in education for underprivileged children, youth innovation in oil and gas, and scholarships for students in energy-related fields.
      Health: ConocoPhillips China has partnered with local not-for-profit organizations to provide medical care and surgery for children with congenital heart disease.
      Disaster Relief: ConocoPhillips China has donated funds and supplies to support the relief and recovery efforts of natural disasters, such as earthquakes, floods, and landslides.`
    },
    {
      lat: 3.1568,
      lng: 101.7132,
      name: "ConocoPhillips Malaysia",
      data: `Community: enhancing the quality of life and promoting education in the rural areas of Sabah and Sarawak through partnerships with MACEE and MyKasih Foundation2.
      Health, Safety and Environment: managing water use and waste disposal, minimizing impacts on biodiversity and ecosystems, and implementing innovative technologies that reduce the environmental footprint of its activities.
      People: progressing the journey toward a diverse, equitable and inclusive work environment for a healthier and productive workforce.`
    },
    {
      lat: -27.4705,
      lng: 153.0260,
      name: "ConocoPhillips Australia",
      data: `Reducing greenhouse gas emissions and flaring from its operations, and supporting the development of low-carbon technologies.
      Managing water use and waste disposal, and minimizing impacts on biodiversity and ecosystems.
      Engaging with local stakeholders, including Indigenous peoples, to understand their values and interests, and contributing to economic and social opportunities.
      Implementing a Reconciliation Action Plan to promote respect, relationships, and opportunities for Aboriginal and Torres Strait Islander people.`
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
  