// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-light border-end" style={{ width: '200px', minHeight: '100vh' }}>
      <ul className="list-group list-group-flush p-3">
        <li className="list-group-item">Dashboard</li>
        <li className="list-group-item">Orders</li>
        <li className="list-group-item">Products</li>
        <li className="list-group-item">Users</li>
      </ul>
    </div>
  );
};

export default Sidebar;
