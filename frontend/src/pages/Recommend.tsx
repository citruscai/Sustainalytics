import React, { useState } from "react";
import { backendurl } from "../utils/authentication";

function Recommend() {
  const [inputs, setInputs] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
    
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${backendurl}/recommend/predict`;
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      if (response.ok) {
    
        if (Array.isArray(data.crop_recommendation)) {
          setRecommendations(data.crop_recommendation);
        } else {
          console.error('Received data is not an array:', data.crop_recommendation);
         
          setRecommendations([]);
        }
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="N"
            className="block text-sm font-medium text-gray-700"
          >
            Nitrogen
          </label>
          <input
            type="number"
            name="N"
            value={inputs.N}
            onChange={handleChange}
            placeholder="Nitrogen"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="P"
            className="block text-sm font-medium text-gray-700"
          >
            Phosphorus
          </label>
          <input
            type="number"
            name="P"
            value={inputs.P}
            onChange={handleChange}
            placeholder="Phosphorus"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="K"
            className="block text-sm font-medium text-gray-700"
          >
            Potassium
          </label>
          <input
            type="number"
            name="K"
            value={inputs.K}
            onChange={handleChange}
            placeholder="Potassium"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="temperature"
            className="block text-sm font-medium text-gray-700"
          >
            Temperature (°C)
          </label>
          <input
            type="number"
            name="temperature"
            value={inputs.temperature}
            onChange={handleChange}
            placeholder="Temperature"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="humidity"
            className="block text-sm font-medium text-gray-700"
          >
            Humidity (%)
          </label>
          <input
            type="number"
            name="humidity"
            value={inputs.humidity}
            onChange={handleChange}
            placeholder="Humidity"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="ph"
            className="block text-sm font-medium text-gray-700"
          >
            Soil pH
          </label>
          <input
            type="number"
            name="ph"
            value={inputs.ph}
            onChange={handleChange}
            placeholder="pH"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="rainfall"
            className="block text-sm font-medium text-gray-700"
          >
            Rainfall
          </label>
          <input
            type="number"
            name="rainfall"
            value={inputs.rainfall}
            onChange={handleChange}
            placeholder="rainfall"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Get Recommendation
        </button>
      </form>
      {Array.isArray(recommendations) && recommendations.length > 0 && (
  <div className="mt-6 text-center">
    <p className="text-lg font-medium text-gray-900">Recommended Crops:</p>
    <ul>
      {recommendations.map((recommendation, index) => (
        <li key={index} className="text-lg text-gray-700">
          {recommendation}
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
}

export default Recommend;
