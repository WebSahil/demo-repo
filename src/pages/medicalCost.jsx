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
          {/* Main Content */}
          <div className="w-full md:w-8/12 flex flex-col p-4 md:p-6 lg:p-8 scroll-smooth space-y-16">
            {/* Hero Section */}
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            {/* Doctors Section */}
            <AnimatedSection>
              <section>
                <h2 className="text-3xl font-extrabold text-[#2b3d67] mb-6 text-center">
                  Meet Our Top Surgeons
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {doctors.map((doc, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl shadow-xl flex flex-col text-center items-center transition-transform transform hover:-translate-y-2"
                    >
                      <img
                        src={suraj}
                        alt={`Dr. ${doc.name}`}
                        className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-[#d9efff]"
                      />

                      <div className="flex-grow">
                        <h3 className="font-bold text-xl text-[#2b3d67]">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-[#17b2aa] font-semibold">
                          {doc.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {doc.hospital}
                        </p>
                        <div className="flex gap-3 mt-4">
                          <button className="bg-[#2b3d67] text-sm shadow-md text-white px-4 py-2 rounded-lg hover:bg-opacity-90 font-semibold">
                            Book Appointment
                          </button>
                          <button className="bg-white text-sm shadow-md text-[#2b3d67] border-2 border-[#2b3d67] px-6 py-2 rounded-lg hover:bg-gray-100 font-semibold">
                            Chat
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            {/* Hospitals Section */}
            <AnimatedSection>
              <section>
                <h2 className="text-3xl font-extrabold text-[#2b3d67] mb-6 text-center">
                  Leading Hospitals for Cosmetic Treatment
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hospitals.map((hosp, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl shadow-lg overflow-hidden group transform transition-all hover:shadow-2xl hover:scale-105"
                    >
                      <div className="overflow-hidden h-48">
                        <img
                          src={fortis}
                          alt={hosp.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-800 text-lg">
                          {hosp.name}
                        </h3>

                        <button className="mt-3 bg-[#17b2aa] text-white px-4 py-2.5 rounded-lg w-full font-bold hover:bg-[#149a93] transition-colors">
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
                <div className="bg-[#d9efff] p-5 rounded-t-xl">
                  <h2 className="text-2xl font-bold text-[#0B0757]">
                    Find Your Treatment Cost
                  </h2>
                  <p className="text-sm text-gray-700 mt-1">
                    Use the search bar to instantly filter procedures.
                  </p>
                  <div className="mt-4 relative">
                    <input
                      type="text"
                      placeholder="Search for a treatment (e.g., Rhinoplasty)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg shadow-inner text-gray-800"
                    />
                    <Icon
                      path="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
                <div className="overflow-x-auto border rounded-b-xl shadow-md">
                  <table className="w-full border-collapse text-sm">
                    <thead className="sticky top-0">
                      <tr className="bg-[#0B0757] text-white">
                        <th className="p-4 text-left font-semibold">
                          Treatment Name
                        </th>
                        <th className="p-4 text-left font-semibold">
                          Min. Cost
                        </th>
                        <th className="p-4 text-left font-semibold">
                          Max. Cost
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTreatments.length > 0 ? (
                        filteredTreatments.map((item, index) => (
                          <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-blue-50"
                              } hover:bg-yellow-50`}
                          >
                            <td className="p-4 font-medium text-gray-800">
                              {item.name}
                            </td>
                            <td className="p-4 text-gray-600 font-mono">
                              {item.min}
                            </td>
                            <td className="p-4 text-gray-600 font-mono">
                              {item.max}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="3"
                            className="text-center p-8 font-semibold text-gray-500"
                          >
                            No treatments found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
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
    </>
  );
}

export default MedicalCost;