import React from 'react';
import UnicornAnimation from '../images/UnicornAnimation.gif';


const LandingPage: React.FC = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold">Welcome</h1>
            <div className="flex justify-center items-center">
            <img src={UnicornAnimation} alt="loading..." width={500}height={500}/>
            </div>
           
        </div>
    );
};

export default LandingPage;
