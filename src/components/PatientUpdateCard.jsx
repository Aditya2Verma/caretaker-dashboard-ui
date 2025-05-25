import React from 'react';

const PatientUpdateCard = ({ update }) => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-3">
      <p className="font-medium text-gray-800">{update.patient}</p>
      <p className="text-sm text-gray-600">{update.message}</p>
      <span className="text-xs text-gray-400">{update.time}</span>
    </div>
  );
};

export default PatientUpdateCard;
