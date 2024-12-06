import React from 'react';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa';  // Import icons for project status
import { useState } from 'react'; // To handle tab switching

const AdminReports = () => {
  const [activeTab, setActiveTab] = useState('ongoing'); // State to track active tab

  // Sample project data
  const projects = {
    ongoing: [
      { id: 1, name: 'Project Alpha', progress: 65, deadline: '2024-12-20', status: 'Ongoing' },
      { id: 2, name: 'Project Beta', progress: 45, deadline: '2024-12-30', status: 'Ongoing' },
    ],
    completed: [
      { id: 3, name: 'Project Gamma', progress: 100, deadline: '2024-11-15', status: 'Completed' },
    ],
    pending: [
      { id: 4, name: 'Project Delta', progress: 0, deadline: '2025-01-05', status: 'Pending' },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Project Reports</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('ongoing')}
          className={`px-6 py-2 text-lg font-medium ${activeTab === 'ongoing' ? 'bg-blue-600 text-white' : 'text-blue-600'}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setActiveTab('completed')}
          className={`px-6 py-2 text-lg font-medium ${activeTab === 'completed' ? 'bg-green-600 text-white' : 'text-green-600'}`}
        >
          Completed
        </button>
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-6 py-2 text-lg font-medium ${activeTab === 'pending' ? 'bg-yellow-600 text-white' : 'text-yellow-600'}`}
        >
          Pending
        </button>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects[activeTab].map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <div
                className={`ml-4 px-2 py-1 rounded ${
                  project.status === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : project.status === 'Ongoing'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}
              >
                {project.status}
              </div>
            </div>

            <p className="text-sm text-gray-600">Deadline: {project.deadline}</p>

            {/* Progress Bar */}
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700">Progress</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600">
                      {project.progress}%
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Icons and Additional Information */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-gray-600 space-x-2">
                {project.status === 'Ongoing' ? (
                  <FaHourglassHalf className="text-yellow-500" />
                ) : project.status === 'Completed' ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaTimesCircle className="text-red-500" />
                )}
                <span className="text-sm">{project.status === 'Ongoing' ? 'In Progress' : project.status === 'Completed' ? 'Done' : 'Waiting'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
