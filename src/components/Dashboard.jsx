import React, { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';
import PatientUpdateCard from '../components/PatientUpdateCard';
import SummaryPanel from '../components/SummaryPanel';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTasks([
      { type: 'Medication', details: 'Give insulin', patient: 'John', status: 'Pending' },
      { type: 'Vitals', details: 'Check blood pressure', patient: 'Jane', status: 'Completed' }
    ]);
    setUpdates([
      { patient: 'John', message: 'Blood sugar dropped', time: '9:20 AM' },
      { patient: 'Jane', message: 'Vitals stable', time: '9:10 AM' }
    ]);
    setSummary(['2 tasks completed', '1 update pending review']);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Today's Overview</h2>
      <SummaryPanel summary={summary} />

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Assigned Tasks</h3>
        {tasks.map((task, i) => <TaskCard key={i} task={task} />)}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Patient Updates</h3>
        {updates.map((update, i) => <PatientUpdateCard key={i} update={update} />)}
      </div>
    </div>
  );
};

export default Dashboard;
