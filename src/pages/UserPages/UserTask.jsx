import React, { useState } from 'react';

const UserTask = () => {
  // Example task data
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project report', completed: false },
    { id: 2, title: 'Attend team meeting', completed: true },
    { id: 3, title: 'Review pull requests', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map(task => (
          <div
            key={task.id}
            className={`p-4 border rounded shadow ${task.completed ? 'bg-green-100' : 'bg-gray-100'}`}
          >
            <div className="flex justify-between items-center">
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
              <button
                onClick={() => handleComplete(task.id)}
                className={`ml-4 py-1 px-2 ${task.completed ? 'bg-gray-300' : 'bg-blue-500'} text-white rounded`}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default UserTask;
