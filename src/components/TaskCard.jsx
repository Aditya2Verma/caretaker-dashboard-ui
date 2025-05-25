import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-4 border-l-4 border-blue-500">
      <h3 className="font-semibold text-lg">{task.type}</h3>
      <p className="text-sm text-gray-700">{task.details}</p>
      <p className="text-xs text-gray-500 mt-2">Patient: {task.patient}</p>
      <p className="text-xs text-gray-400">Status: {task.status}</p>
    </div>
  );
};

export default TaskCard;
