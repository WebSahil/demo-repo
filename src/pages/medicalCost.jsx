import { useState, useEffect } from "react";
import natarajan from "../assets/natarajan.webp";
import pradeep from "../assets/pradeep.webp";
import suraj from "../assets/surag.webp";
import blkmax from "../assets/blkmax.jpg";
import fortis from "../assets/fortis.webp";

("use client");

// Helper component for icons
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

// This is a new component to add animations on scroll
const AnimatedSection = ({ children }) => {

  return <div className="fade-in-up">{children}</div>;
};

function MedicalCost() {

  const testimonials = [
    {
      title: "Liver Transplant in India",
      thumbnail: "https://img.youtube.com/vi/yAE4koYwrc0/hqdefault.jpg",
      url: "https://youtu.be/yAE4koYwrc0?si=NjSz3MnZiX_vdHy3",
      description: "Life-saving liver transplant performed by expert Indian surgeons."
    },
    {
      title: "Bone Marrow Transplant in India",
      thumbnail: "https://img.youtube.com/vi/EupN-19V9dM/hqdefault.jpg",
      url: "https://youtu.be/EupN-19V9dM?si=rF6-DEyege46XnPO",
      description: "Advanced bone marrow transplant with high success rate in India."
    },
    {
      title: "MAKO Robotic Hip Replacement",
      thumbnail: "https://img.youtube.com/vi/RQ0u9P6D7uE/hqdefault.jpg",
      url: "https://youtu.be/RQ0u9P6D7uE?si=xm6zU-rAMwnbZDcx",
      description: "Robotic technology ensures faster recovery and precise hip surgery."
    },
    {
      title: "Kidney Transplant Surgery",
      thumbnail: "https://img.youtube.com/vi/9GPZAAV1yqs/hqdefault.jpg",
      url: "https://youtu.be/9GPZAAV1yqs?si=KgpMvE45JjNHH0cH",
      description: "Expert kidney transplant procedure with excellent patient outcomes."
    },
    {
      title: "MAKO Robotic Hip Replacement",
      thumbnail: "https://img.youtube.com/vi/Ytds2BxKtZk/hqdefault.jpg",
      url: "https://youtu.be/Ytds2BxKtZk?si=f17DHbGXzBZmi73w",
      description: "Innovative robotic hip replacement by top orthopedic surgeons."
    },
    {
      title: "Kidney Transplant Surgery",
      thumbnail: "https://img.youtube.com/vi/wcgGoushG0w/hqdefault.jpg",
      url: "https://youtu.be/wcgGoushG0w?si=oTb7bkFyUAugL22l",
      description: "Renowned hospitals offer safe and affordable kidney transplants."
    },
    {
      title: "MAKO Robotic Hip Replacement",
      thumbnail: "https://img.youtube.com/vi/jo143IXVTYo/hqdefault.jpg",
      url: "https://youtu.be/jo143IXVTYo?si=o5hrZGio0aKzNxEE",
      description: "Experience pain-free recovery with robotic-assisted hip surgery."
    },
    {
      title: "Kidney Transplant Surgery",
      thumbnail: "https://img.youtube.com/vi/uwY0Qp2R8mw/hqdefault.jpg",
      url: "https://youtu.be/uwY0Qp2R8mw?si=HJDf5zre6nBTzM_4",
      description: "Trusted kidney transplant specialists with global patient success."
    }
  ];

  const mostAsked = [
    "Gender Change Surgery",
    "Vaginal Tightening",
    "Tummy Tuck",
    "Thigh Lift Surgery",
    "Mommy makeover",
    "Rhinoplasty",
    "Otoplasty",
    "Liposuction",
    "Labiaplasty (Labia Rejuvenation)",
    "Hymenoplasty",
    "Hair transplant",
    "Gynecomastia",
    "Abdominoplasty",
    "Face Lift",
    "Cleft Lip Surgery",
    "Breast Reduction",
    "Breast Reconstruction",
    "Breast implant",
    "Brazilian Butt Lift",
    "Blepharoplasty",
  ];

  const otherProcedures = [
    "Fillers",
    "Calf Implant",
    "Brow Lift",
    "Neck lift",
    "Pectoral Implant Surgery",
    "Beard Transplant",
    "Arm Lift",
  ];

  const treatmentData = [
    { name: "Abdominoplasty", min: "Rs.124320", max: "Rs.165760" },
    { name: "Brazilian Butt Lift", min: "Rs.177600", max: "Rs.236800" },
    { name: "Breast Lift Surgery", min: "Rs.102120", max: "Rs.136160" },
    { name: "Facelift", min: "Rs.111000", max: "Rs.148000" },
    { name: "Gynecomastia Treatment", min: "Rs.111000", max: "Rs.148000" },
    { name: "Hair Transplantation", min: "Rs.88800", max: "Rs.118400" },
    { name: "Liposuction Surgery", min: "Rs.97680", max: "Rs.130240" },
    { name: "Mommy Makeover", min: "Rs.186480", max: "Rs.248640" },
    { name: "Penile Lengthening Surgery", min: "Rs.186480", max: "Rs.248640" },
    { name: "Rhinoplasty", min: "Rs.142080", max: "Rs.189440" },
    { name: "Tummy Tuck", min: "Rs.111000", max: "Rs.148000" },
    {
      name: "Blepharoplasty Eye Lid Surgery",
      min: "Rs.66600",
      max: "Rs.88800",
    },
    { name: "Breast Implants", min: "Rs.97680", max: "Rs.130240" },
    { name: "Breast Reduction", min: "Rs.111000", max: "Rs.148000" },
    { name: "Brow Lift Surgery", min: "Rs.97680", max: "Rs.130240" },
    { name: "Cleft Lip Surgery", min: "Rs.97680", max: "Rs.130240" },
    { name: "Thigh Lift Surgery", min: "Rs.111000", max: "Rs.148000" },
    { name: "Chin Implant Surgery", min: "Rs.71040", max: "Rs.94720" },
    { name: "Laser Hair Removal", min: "Rs.2664", max: "Rs.3552" },
    { name: "Laser Skin Resurfacing", min: "Rs.66600", max: "Rs.88800" },
    { name: "Lip Augmentation", min: "Rs.66600", max: "Rs.88800" },
    { name: "Melasma Treatment", min: "Rs.115440", max: "Rs.153920" },
    { name: "Microdermabrasion", min: "Rs.1687", max: "Rs.2250" },
    { name: "Mole Removal", min: "Rs.5772", max: "Rs.7696" },
    { name: "Scalp Micropigmentation", min: "Rs.75480", max: "Rs.100640" },
    { name: "Tattoo Removal by Laser", min: "Rs.3996", max: "Rs.5328" },
    { name: "Anti-Wrinkle Treatment", min: "Rs.68820", max: "Rs.91760" },
    {
      name: "Anti-Wrinkle Treatment (by Laser)",
      min: "Rs.68154",
      max: "Rs.90872",
    },
    { name: "Arm Lift", min: "Rs.105450", max: "Rs.140600" },
    { name: "Body Contouring", min: "Rs.888000", max: "Rs.1184000" },
    { name: "Browplasty - Forehead Lift", min: "Rs.97680", max: "Rs.130240" },
    { name: "Calf Implant", min: "Rs.128760", max: "Rs.171680" },
    { name: "Cheek Augmentation", min: "Rs.97680", max: "Rs.130240" },
    {
      name: "Cryolipolysis - Non-Surgical Fat Reduction",
      min: "Rs.71040",
      max: "Rs.94720",
    },
    { name: "Fat Injection Procedure", min: "Rs.133200", max: "Rs.177600" },
    {
      name: "Fat Transfer and Liposculpture",
      min: "Rs.133200",
      max: "Rs.177600",
    },
    { name: "Injectable Filler", min: "Rs.22200", max: "Rs.29600" },
    { name: "Laser Thread Vein Removal", min: "Rs.86580", max: "Rs.115440" },
    { name: "Lower Body Lift Surgery", min: "Rs.111000", max: "Rs.148000" },
    {
      name: "Mon Pubis Liposuction - Pubic Fat liposuction",
      min: "Rs.88800",
      max: "Rs.118400",
    },
    { name: "Nipple Correction Surgery", min: "Rs.41070", max: "Rs.54760" },
    { name: "Non-surgical Skin Tightening", min: "Rs.66600", max: "Rs.88800" },
    { name: "Pectoral Implant Surgery", min: "Rs.128760", max: "Rs.171680" },
    {
      name: "Vaginoplasty - Vaginal Tightening",
      min: "Rs.62160",
      max: "Rs.82880",
    },
    { name: "Nose Reshaping", min: "Rs.79920", max: "Rs.106560" },
  ];

  const doctors = [
    {
      name: "Dr. Natrajan V",
      title: "Director - Plastic Surgery",
      hospital: "Fortis Memorial, Gurgaon",
      img: natarajan,
    },
    {
      name: "Dr. Pradeep Kumar",
      title: "Sr. Consultant - Aesthetics",
      hospital: "BLK-Max Hospital, Delhi",
      img: pradeep,
    },
    {
      name: "Dr. Suraj Kumar",
      title: "Head of Department",
      hospital: "Artemis Hospital, Gurgaon",
      img: suraj,
    },
    {
      name: "Dr. Priya Sharma",
      title: "Consultant - Dermatology",
      hospital: "Fortis Memorial, Gurgaon",
      img: "https://placehold.co/112x112/d9efff/2b3d67?text=Dr.+P",
    },
  ];

  const hospitals = [
    {
      name: "Fortis Hospital, New Delhi",
      rating: "4.5 (50 Ratings)",
      img: fortis,
    },
    {
      name: "BLK-Max Super Speciality",
      rating: "4.8 (120 Ratings)",
      img: blkmax,
    },
    {
      name: "Artemis Hospital, Gurgaon",
      rating: "4.6 (95 Ratings)",
      img: fortis,
    },
  ];

  const services = [
    {
      name: "Book Appointment",
      icon: "M6.75 3v2.25m10.5-2.25v2.25m-10.5 0L12 18.75l5.25-13.5",
    },
    {
      name: "Video Consult",
      icon: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z",
    },
    {
      name: "Cost Estimate",
      icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V6.375m18 15v-1.5a.75.75 0 00-.75-.75h-.75m.75 2.25h.75a.75.75 0 00.75-.75v-1.5m0 0h-9.375m0 0a1.125 1.125 0 01-1.125-1.125v-9.375m0 0a1.125 1.125 0 00-1.125-1.125H6.375m15 1.5v-1.5A.75.75 0 0020.25 6h-.75m0 0H3.75",
    },
    {
      name: "24/7 Support",
      icon: "M12 18v-5.25m0 5.25a7.5 7.5 0 000-15 7.5 7.5 0 000 15zm0 0H12M12 12.75h.008v.008H12v-.008z",
    },
  ];

  const [showMoreMostAsked, setShowMoreMostAsked] = useState(false);
  const [showMoreOther, setShowMoreOther] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTreatments = treatmentData.filter((treatment) =>
    treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    `}</style>
      <div className="flex justify-center w-full bg-gray-50 font-sans">
        <div className="flex flex-col md:flex-row w-full max-w-screen-xl">

          <div className="w-full md:w-8/12 flex flex-col p-4 md:p-6 lg:p-8 scroll-smooth space-y-10">

            <AnimatedSection>
              <header className="text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-[#2b3d67] tracking-tight">
                  Cosmetic Treatment Cost in India
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                  Your transparent guide to costs, top-tier surgeons, and
                  accredited hospitals for cosmetic procedures.
                </p>
              </header>
            </AnimatedSection>

            {/* Procedures Section */}
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-3">
                <div className="border p-5 rounded-xl shadow-lg bg-white">
                  <h2 className="text-xl font-bold text-[#2b3d67] mb-4">
                    Most Asked Procedures
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {(showMoreMostAsked
                      ? mostAsked
                      : mostAsked.slice(0, 8)
                    ).map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#eef3ff] text-[#2b3d67] text-sm font-semibold py-2 px-4 rounded-full cursor-pointer transition-all hover:bg-[#2b3d67] hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowMoreMostAsked(!showMoreMostAsked)}
                    className="text-[#17b2aa] font-bold mt-4 text-sm hover:underline"
                  >
                    {showMoreMostAsked
                      ? "Show Less"
                      : `${mostAsked.length - 8} More`}
                  </button>

                </div>
                <div className="border p-5 rounded-xl shadow-lg bg-white">
                  <h2 className="text-xl font-bold text-[#2b3d67] mb-4">
                    Other Procedures
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {(showMoreOther
                      ? otherProcedures
                      : otherProcedures.slice(0, 8)
                    ).map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#eef3ff] text-[#2b3d67] text-sm font-semibold py-2 px-4 rounded-full cursor-pointer transition-all hover:bg-[#2b3d67] hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowMoreOther(!showMoreOther)}
                    className="text-[#17b2aa] font-bold mt-4 text-sm hover:underline"
                  >
                    {showMoreOther ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </AnimatedSection>


            <section className="p-5 bg-blue-100 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-[#2b3d67] mb-4">
                Cost of Cosmetic Treatment in India: Detailed Overview
              </h2>


              <p className="text-gray-700 leading-relaxed mb-4">
                Cosmetic surgery in India is gaining massive popularity due to its
                affordability and high-quality standards. Patients can choose from a wide
                range of procedures including surgical and non-surgical options tailored to
                their needs. With internationally trained doctors and modern infrastructure,
                India has become a leading medical tourism hub for cosmetic treatments.
              </p>

              {/* Heading 1 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Average Cost Range of Popular Treatments
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Different cosmetic treatments come with different price tags. On average,
                Indian cosmetic surgery costs are 60–70% lower than in Western countries.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Facial Procedures (Rhinoplasty, facelift, eyelid surgery): ₹1.5–3.5 Lakh</li>
                <li>Body Contouring (Liposuction, tummy tuck, body lift): ₹1.2–2.8 Lakh</li>
                <li>Breast Procedures (Augmentation, lift, reduction): ₹1.0–2.5 Lakh</li>
                <li>Non-Surgical (Botox, fillers, PRP, laser): ₹10,000–50,000 per session</li>
              </ul>

              {/* Heading 2 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Why India is a Preferred Destination
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                India attracts thousands of international patients every year. The reasons
                include affordability, skilled doctors, and world-class healthcare systems.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>✔ Affordable pricing compared to the USA/UK</li>
                <li>✔ Globally certified and highly experienced surgeons</li>
                <li>✔ International standards of hospitals and technology</li>
                <li>✔ Customized recovery plans and patient-friendly packages</li>
              </ul>

              {/* Heading 3 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Factors Affecting the Cost of Cosmetic Surgery
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                The cost may vary based on several aspects, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>🏥 Location of hospital (metro vs smaller cities)</li>
                <li>👨‍⚕️ Surgeon’s experience and expertise</li>
                <li>⚙️ Technology used (robotic-assisted, laser, etc.)</li>
                <li>🛌 Post-surgery care and hospitalization days</li>
              </ul>

              {/* Heading 4 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Hidden Costs You Should Know
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While base surgery charges are often highlighted, patients should also be
                aware of additional costs such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Pre-surgery medical tests and consultations</li>
                <li>Anesthesia and operation theatre charges</li>
                <li>Post-operative medicines and dressing</li>
                <li>Follow-up visits and aftercare sessions</li>
              </ul>

              {/* Heading 5 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Medical Tourism & International Patients
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                India has become a global hub for medical tourism. Cities like Delhi,
                Mumbai, Bangalore, and Chennai are equipped with hospitals catering to
                foreign patients with dedicated staff, translators, and international
                patient lounges.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                International patients often choose India because of the cost advantage. A
                cosmetic procedure that costs $12,000 in the USA may only cost around
                $3,000–$4,000 in India, including hospital stay and follow-up care.
              </p>

              {/* Heading 6 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Comparing India with Western Countries
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here’s a quick comparison of cosmetic surgery costs in India vs USA/UK:
              </p>
              <table className="table-auto border-collapse border border-gray-300 mb-4 w-full text-sm">
                <thead>
                  <tr className="bg-[#d9efff]">
                    <th className="border border-gray-300 p-2">Procedure</th>
                    <th className="border border-gray-300 p-2">India (INR)</th>
                    <th className="border border-gray-300 p-2">USA (USD)</th>
                    <th className="border border-gray-300 p-2">UK (£)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">Rhinoplasty</td>
                    <td className="border border-gray-300 p-2">₹1.8–3.5 Lakh</td>
                    <td className="border border-gray-300 p-2">$6,000–10,000</td>
                    <td className="border border-gray-300 p-2">£4,500–7,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Liposuction</td>
                    <td className="border border-gray-300 p-2">₹1.2–2.8 Lakh</td>
                    <td className="border border-gray-300 p-2">$5,500–9,000</td>
                    <td className="border border-gray-300 p-2">£3,500–6,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">Breast Augmentation</td>
                    <td className="border border-gray-300 p-2">₹1.5–2.5 Lakh</td>
                    <td className="border border-gray-300 p-2">$7,000–12,000</td>
                    <td className="border border-gray-300 p-2">£4,000–6,500</td>
                  </tr>
                </tbody>
              </table>

              {/* Heading 7 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Important Considerations Before Treatment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before opting for cosmetic surgery, patients must verify the hospital’s
                accreditation, surgeon’s qualifications, and review past case studies.
                Safety, hygiene, and aftercare are as important as the cost itself.
              </p>

              {/* Heading 8 */}
              <h3 className="text-lg font-semibold text-[#2b3d67] mt-6 mb-2">
                Conclusion
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cosmetic surgery in India is cost-effective, safe, and reliable when done at
                accredited hospitals by expert surgeons. With medical tourism growing every
                year, India continues to be a preferred destination for people seeking
                quality cosmetic enhancements at affordable prices.
              </p>
            </section>




            {/* Doctors Section */}
            <AnimatedSection>
              <section id="doctors" className="mb-10">
                <h2 className="text-2xl font-semibold text-[#2b3d67] pb-7">Our Doctors</h2>
                <div className="mb-3">

                  <select
                    id="doctor-category"
                    className="border border-gray-300 pl-4 py-1.5 rounded-md text-gray-700 w-full md:w-60 
                              focus:ring-2 focus:ring-[#2b3d67] focus:border-[#2b3d67] 
                              hover:border-[#2b3d67] cursor-pointer transition"
                  >
                    <option value="all" className="text-gray-700">All Categories</option>
                    <option value="cardiologist" className="text-gray-700">Cardiologist</option>
                    <option value="oncologist" className="text-gray-700">Oncologist</option>
                    <option value="orthopedic" className="text-gray-700">Orthopedic</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

                  <div className="p-4  rounded-lg shadow-md flex flex-col items-center text-center">
                    <img
                      src={natarajan}
                      alt="Dr. Ramesh Gupta"
                      className="w-28 h-28 rounded-full object-cover mb-3"
                    />
                    <h3 className="font-bold text-gray-800">Dr. Ramesh Gupta</h3>
                    <p className="text-sm text-gray-600">Cardiologist, 20+ yrs exp.</p>
                    <button className="px-4 mt-4
                                           py-2 bg-[#2b3d67] text-white text-[13px] rounded-md hover:bg-[#1f2c4d] transition">
                      Book Appointment
                    </button>

                  </div>

                  <div className="p-4  rounded-lg shadow-md flex flex-col items-center text-center">
                    <img
                      src={suraj}
                      alt="Dr. Anita Sharma"
                      className="w-28 h-28 rounded-full object-cover mb-3"
                    />
                    <h3 className="font-bold text-gray-800">Dr. Anita Sharma</h3>
                    <p className="text-sm text-gray-600">Oncologist, 15+ yrs exp.</p>
                    <button className="px-4 mt-4
                                           py-2 bg-[#2b3d67] text-white text-[13px] rounded-md hover:bg-[#1f2c4d] transition">
                      Book Appointment
                    </button>
                  </div>

                  <div className="p-4  rounded-lg shadow-md flex flex-col items-center text-center">
                    <img
                      src={pradeep}
                      alt="Dr. Vikram Singh"
                      className="w-28 h-28 rounded-full object-cover mb-3"
                    />
                    <h3 className="font-bold text-gray-800">Dr. Vikram Singh</h3>
                    <p className="text-sm text-gray-600">Orthopedic , 18+ yrs exp.</p>
                    <button className="px-4 mt-4
                                           py-2 bg-[#2b3d67] text-white text-[13px] rounded-md hover:bg-[#1f2c4d] transition">
                      Book Appointment
                    </button>
                  </div>
                  <div className="p-4  rounded-lg shadow-md flex flex-col items-center text-center">
                    <img
                      src={pradeep}
                      alt="Dr. Vikram Singh"
                      className="w-28 h-28 rounded-full object-cover mb-3"
                    />
                    <h3 className="font-bold text-gray-800">Dr. Vikram Singh</h3>
                    <p className="text-sm text-gray-600">Orthopedic , 18+ yrs exp.</p>
                    <button className="px-4 mt-4
                                           py-2 bg-[#2b3d67] text-white text-[13px] rounded-md hover:bg-[#1f2c4d] transition">
                      Book Appointment
                    </button>
                  </div>

                </div>
              </section>
            </AnimatedSection>


            <AnimatedSection>
              <section>
                <h2 className="text-3xl font-extrabold text-[#2b3d67] mb-6 text-center">
                  Leading Hospitals for Cosmetic Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {hospitals.map((hosp, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-lg overflow-hidden  hover:shadow-xl "
                    >
                      <div className="overflow-hidden h-48">
                        <img
                          src={fortis}
                          alt={hosp.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-800 ">
                          {hosp.name}
                        </h3>
                        <button className="bg-[#17b2aa] px-4 mt-4
                                           py-2  text-white text-[13px] rounded-md  transition">
                          Contact Hospital
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Cost Table Section */}
            <AnimatedSection>
              <div className="p-2">
                <div className="bg-[#d9efff] p-4 rounded-t-xl">
                  <h2 className="text-xl font-bold text-[#0B0757]">
                    Cost related to Cosmetic Treatment in India
                  </h2>
                  <p className="text-sm text-gray-700 mt-1">
                    Listing approximate price of cosmetic treatments and related procedures.
                    Prices may vary depending on the centers and patient condition.
                  </p>

                </div>
                <div className="overflow-x-auto border rounded-b-xl">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#0B0757] text-white">
                        <th className="p-3 text-left">Treatment Name</th>
                        <th className="p-3 text-left">Min. Cost</th>
                        <th className="p-3 text-left">Max. Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {treatmentData.map((item, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-[#fffaf2]"}
                        >
                          <td className="p-3 font-medium text-gray-800">{item.name}</td>
                          <td className="p-3">{item.min}</td>
                          <td className="p-3">{item.max}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
            <section id="video-testimonials" className="mb-5">
              <h2 className="text-2xl font-bold  text-[#2b3d67] my-6">Video Testimonials</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {testimonials.slice(0, 5).map((video, index) => (
                  <a
                    key={index}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  >
                    {/* Thumbnail with play overlay */}
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition">
                        <span className="text-white text-4xl">▶</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#2b3d67] mb-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600">{video.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
            {/* Our Services */}
            <section className="shadow-md p-4 border bg-blue-200">
              <h2 className="text-xl  font-semibold text-[#2b3d67] mb-3">
                Our Services for Cosmetic Treatment in India
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Transparent · Professional · Without Hassles
              </p>
              <div className="grid md:grid-cols-4 gap-3 mb-5">
                {["Book Appointment", "Video Consult", "Cost Estimate", "Support"].map(
                  (srv, idx) => (
                    <div
                      key={idx}
                      className="px-4 rounded-md
 py-2 text-white bg-[#2b3d67] font-semibold text-[13pxrounded-md hover:bg-[#1f2c4d] transition"
                    >
                      {srv}
                    </div>
                  )
                )}
              </div>
              <div className="flex gap-4">
                <button className="bg-[#2b3d67] text-white px-6 py-2 rounded-md">
                  Contact Doctor
                </button>
              </div>
            </section>

            {/* Success Rate */}
            <section className="bg-blue-100 p-5 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-[#2b3d67] mb-3">Success Rate</h2>
              <p className="text-gray-700 leading-relaxed">
                It's essential to have a clear understanding of what will happen before,
                during, and after the procedure, and what results to expect...
              </p>
            </section>

            <section id="faqs" className="mb-10">
              <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Frequently Asked Questions</h2>
              <div className="space-y-2">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold cursor-pointer">Does Apollo provide international patient support?</summary>
                  <p className="text-sm text-gray-600 mt-2">
                    Yes, Apollo has a dedicated international patient department offering visa assistance, translators, and accommodation help.
                  </p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold cursor-pointer">What are the payment options?</summary>
                  <p className="text-sm text-gray-600 mt-2">
                    Payments can be made via cash, credit cards, wire transfers, or international insurance partners.
                  </p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold cursor-pointer">How do I book an appointment with a doctor?</summary>
                  <p className="text-sm text-gray-600 mt-2">
                    You can use our online booking system or contact our helpline to schedule an appointment with a specialist.
                  </p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold cursor-pointer">What are the payment options?</summary>
                  <p className="text-sm text-gray-600 mt-2">
                    Payments can be made via cash, credit cards, wire transfers, or international insurance partners.
                  </p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold cursor-pointer">How do I book an appointment with a doctor?</summary>
                  <p className="text-sm text-gray-600 mt-2">
                    You can use our online booking system or contact our helpline to schedule an appointment with a specialist.
                  </p>
                </details>
              </div>
            </section>

            {/* Free Service Banner */}
            <section className="bg-[#fff5e1] p-5 rounded-lg flex items-center justify-between shadow">
              <p className="font-medium pr-5 text-gray-700">
                ⭐ Our services are FREE and by using our services your hospital bill does
                not increase!
              </p>
              <button className="bg-[#2b3d67] w-48  text-white text-sm px-8 py-2 rounded-md">
                Submit an Enquiry
              </button>
            </section>
          </div>

          {/* Right Sidebar (Unchanged) */}
          <div className="w-full md:w-4/12 py-4 pr-4">
            <div className="sticky top-20">
              <div className="flex flex-col border self-start rounded-lg bg-[#2b3d67] text-white p-6 shadow-2xl">
                <h2 className="text-2xl font-bold mb-1">Get FREE Evaluation</h2>
                <p className="text-sm mb-4">
                  Treatment plan and quote within 2 days
                </p>
                <input
                  type="text"
                  placeholder="Patient Name"
                  className="mb-3 px-4 py-2 rounded-md text-black"
                />
                <select className="mb-3 px-4 py-2 rounded-md text-black">
                  <option>India</option>
                </select>
                <select className="mb-3 px-4 py-2 rounded-md text-black">
                  <option>Select City</option>
                </select>
                <div className="flex mb-3">
                  <span className="bg-gray-200 text-black px-3 py-2 rounded-l">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter Phone no."
                    className="flex-1 px-4 py-2 rounded-r text-black"
                  />
                </div>
                <textarea
                  placeholder="Describe The Current Medical Problem."
                  rows="3"
                  className="mb-3 px-4 py-2 rounded-md text-black"
                ></textarea>
                <input
                  type="text"
                  placeholder="Example: 30 Yrs or 29-05-1985"
                  className="mb-4 px-4 py-2 rounded-md text-black"
                />
                <button className="bg-[#17b2aa] font-semibold text-white px-4 py-2 rounded-md w-full hover:bg-[#149a93]">
                  Contact Us Now
                </button>
                <p className="text-xs text-center mt-4">
                  By submitting the form I agree to the
                  <a href="#" className="underline font-semibold">
                    {" "}
                    Terms of Use{" "}
                  </a>
                  and
                  <a href="#" className="underline font-semibold">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  of Vaidam Health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 max-w-7xl mx-auto mb-10 bg-[#f9f9f9] p-6 rounded-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div>
            <h2 className="text-lg font-bold mb-3 text-[#2b3d67]">
              Piles Treatment in Top Cities
            </h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Bangalore</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Faridabad</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Hyderabad</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Pune</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Chennai</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Ghaziabad</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Mumbai</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Delhi</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Gurgaon</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery in Noida</a></li>
            </ul>
          </div>


          <div>
            <h2 className="text-lg font-bold mb-3 text-[#2b3d67]">
              Piles Surgery Cost in Top Cities
            </h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Bangalore</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Faridabad</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Hyderabad</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Pune</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Chennai</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Ghaziabad</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Mumbai</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Delhi</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Gurgaon</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Surgery cost in Noida</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-[#2b3d67]">
              Related Treatments
            </h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">• Fissure Surgery</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Fistula Surgery</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Laser Piles Surgery</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Piles Treatment Without Surgery</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">• Home Remedies for Piles</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalCost;