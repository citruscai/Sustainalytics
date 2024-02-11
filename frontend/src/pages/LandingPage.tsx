import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import sustainabilityAnimation from '../images/EarthCare.json'; 

const LandingPage: React.FC = () => {
    return (
        <div className="text-center mt-12" style={{ backgroundColor: '#f9f3d8' }}>
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Inter' }}>Welcome!</h1>
            <div className="flex justify-center items-center">
            <Player
                src={sustainabilityAnimation}
            className="player" style={{ width: 500, height: 500 }} 
             />
            </div>
        </div>
    );
};

export default LandingPage;
