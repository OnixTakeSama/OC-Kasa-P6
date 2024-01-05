import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Error404 from './pages/Error404.jsx';
import LodgingPage from './pages/LodgingPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/logement/:id" element={<LodgingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
