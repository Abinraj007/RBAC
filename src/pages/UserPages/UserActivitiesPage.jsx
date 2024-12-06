import React, { useState } from 'react';

const UserActivitiesPage = () => {
  // Sample activities data
  const [activities, setActivities] = useState([
    { id: 1, title: 'Complete project report', completed: true },
    { id: 2, title: 'Attend team meeting', completed: true },
    { id: 3, title: 'Review pull requests', completed: true },
    { id: 4, title: 'Update project documentation', completed: true },
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Completed Activities</h2>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`p-4 border rounded shadow ${activity.completed ? 'bg-green-100' : 'bg-gray-100'}`}
          >
            <div className="flex justify-between items-center">
              <span className={activity.completed ? 'line-through text-gray-500' : ''}>
                {activity.title}
              </span>
              <span
                className={`ml-4 py-1 px-2 ${activity.completed ? 'bg-green-300 text-green-700' : 'bg-gray-200'}`}
              >
                {activity.completed ? 'Completed' : 'In Progress'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivitiesPage;
