import React, { useState } from 'react';
import axios from 'axios';

const LookUp: React.FC = () => {
    const [food, setFood] = useState<string>('');
    const [foodData, setFoodData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchFoodData = async () => {
        const options = {
            method: 'GET',
            url: 'https://recipe32.p.rapidapi.com/search',
            params: {q: food},
            headers: {
              'X-RapidAPI-Key': '2a74062f3cmsh3a5187c270e88d2p1c461cjsne42e916569c4',
              'X-RapidAPI-Host': 'recipe32.p.rapidapi.com'
            }
          };

        try {
            const response = await axios.request(options);
            setFoodData(response.data);
            setError(null);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch data');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFood(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchFoodData();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={food}
                        onChange={handleInputChange}
                        placeholder="Enter food type"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Search
                    </button>
                </div>
            </form>
            {foodData && <div className="text-sm text-gray-700">{JSON.stringify(foodData, null, 2)}</div>}
            {error && <div className="text-red-500">{error}</div>}
        </div>
    );
};

export default LookUp;
