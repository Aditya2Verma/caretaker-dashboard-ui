import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-lg">Caretaker Dashboard</h1>
        <div>User Profile</div>
      </div>
    </nav>
  );
};

export default Navbar;
