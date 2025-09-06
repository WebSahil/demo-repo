// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HospitalPage from "./pages/hospital";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/home";
import HospitalData from "./pages/hospitalData";
import DoctorsData from "./pages/doctorsData";
import MedicalCost from "./pages/medicalCost";
import Layout from "./components/layout"
import BlogPage from "./pages/blogpage";
import ConsultOnline from "./pages/consult";
import Testimonial from "./pages/Testimonial";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/hospital" element={<HospitalPage />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hospitaldata" element={<HospitalData />} />
          <Route path="/doctorsdata" element={<DoctorsData />} />
          <Route path="/medicalCost" element={<MedicalCost />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/consult-online" element={<ConsultOnline />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
