import React from 'react';
import { Link } from 'react-router-dom';

const photoCards = [
  {
    id: 1,
    title: "ConocoPhillips USA",
    imageSrc: "https://www.shutterstock.com/image-photo/houston-texas-usa-september-22-600nw-1196644195.jpg",
    altText: "ConocoPhillips USA",
    linkTo: "/USPage",
  },
  {
    id: 2,
    title: "ConocoPhillips Canada",
    imageSrc: "https://static.conocophillips.com/files/pages/square-sml-conoco2office385.jpg",
    altText: "ConocoPhillips Canada",
    linkTo: "/CanadaPage",
  },
  {
    id: 3,
    title: "ConocoPhillips Australia",
    imageSrc: "https://static.conocophillips.com/files/resources/medium-aerial-1.jpg",
    altText: "ConocoPhillips Australia",
    linkTo: "/AustraliaPage",
  },
  {
    id: 4, 
    title: "ConocoPhillips UK/Norway",
    imageSrc: "data:image/jpeg;base64,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",
    altText: "ConocoPhillips UK/Norway",
    linkTo: "/NorwayUkPage",
  },
];

const CountryPage: React.FC = () => {
  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 color-darkblue">Track COP sustainability metrics and news by each operation location</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {photoCards.map((card) => (
          <Link to={card.linkTo} key={card.id} className="block">
            <div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <img src={card.imageSrc} alt={card.altText} className="w-full h-auto" />
              <div className="p-4">
                <h5 className="text-lg font-bold">{card.title}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
