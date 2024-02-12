import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import sustainabilityAnimation from '../images/EarthCare.json'; 

const LandingPage: React.FC = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold animate-bounce color-darkblue">Welcome to Sustainalytics</h1>
            <div className="flex justify-center items-center">
            <Player
                src={sustainabilityAnimation}
            className="player" style={{ width: 400, height: 400 }} 
             />
            </div>
        </div>
    );
};

export default LandingPage;