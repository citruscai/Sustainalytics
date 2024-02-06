import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Activity = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
};

const ActivityDisplayPage: React.FC = () => {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        setActivity(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch activity', error);
        setError('Failed to fetch activity. Please try again later.');
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  if (loading) return <div className="text-center mt-10"><p>Loading...</p></div>;
  if (error) return <div className="text-center text-red-500 mt-10"><p>Error: {error}</p></div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 animate-bounce">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">Random Activity</h1>
      {activity && (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <p className="text-lg"><strong>Activity:</strong> {activity.activity}</p>
          <p className="text-md text-gray-700"><strong>Type:</strong> {activity.type}</p>
          <p className="text-md text-gray-700"><strong>Participants:</strong> {activity.participants}</p>
          <p className="text-md text-gray-700"><strong>Price:</strong> ${activity.price}</p>
          <p className="text-md text-gray-700"><strong>Link:</strong> <a href={activity.link} className="text-indigo-500 hover:text-indigo-600 transition duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">{activity.link}</a></p>
          <p className="text-md text-gray-700"><strong>Key:</strong> {activity.key}</p>
        </div>
      )}
    </div>
  );
};

export default ActivityDisplayPage;
