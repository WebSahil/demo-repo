// src/App.jsx
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import HospitalPage from './pages/hospital';
import ContactUs from './pages/ContactUs'; // New Page
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
