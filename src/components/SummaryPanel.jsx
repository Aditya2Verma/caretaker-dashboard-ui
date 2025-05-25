import React from 'react';

const SummaryPanel = ({ summary }) => {
  return (
    <div className="bg-green-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Daily Summary</h2>
      <ul className="list-disc ml-5 text-sm">
        {summary.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryPanel;
