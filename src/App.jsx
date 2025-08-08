// src/App.jsx
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import HospitalPage from './pages/hospital';
import ContactUs from './pages/ContactUs'; // New Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/hospital" replace />} />
        <Route path="/hospital" element={<HospitalPage />} />
        <Route path="/contact" element={<ContactUs />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
