import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/Home/index.jsx';
import About from './pages/about.jsx';
import Error from './pages/error.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
