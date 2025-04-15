// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Footer from './components/Footer';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />
      <div className="d-flex flex-grow-1">
        <Sidebar />
        <Orders />
      </div>
      <Footer />
    </div>
  );
}

export default App;
