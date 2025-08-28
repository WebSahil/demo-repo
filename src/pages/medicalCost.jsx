import { useState } from "react";
import natarajan from '../assets/natarajan.webp'
import pradeep from '../assets/pradeep.webp'
import suraj from '../assets/surag.webp'
import blkmax from '../assets/blkmax.jpg'
import fortis from '../assets/fortis.webp'
"use client"


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
    { name: "Blepharoplasty Eye Lid Surgery", min: "Rs.66600", max: "Rs.88800" },
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
    { name: "Anti-Wrinkle Treatment (by Laser)", min: "Rs.68154", max: "Rs.90872" },
    { name: "Arm Lift", min: "Rs.105450", max: "Rs.140600" },
    { name: "Body Contouring", min: "Rs.888000", max: "Rs.1184000" },
    { name: "Browplasty - Forehead Lift", min: "Rs.97680", max: "Rs.130240" },
    { name: "Calf Implant", min: "Rs.128760", max: "Rs.171680" },
    { name: "Cheek Augmentation", min: "Rs.97680", max: "Rs.130240" },
    { name: "Cryolipolysis - Non-Surgical Fat Reduction", min: "Rs.71040", max: "Rs.94720" },
    { name: "Fat Injection Procedure", min: "Rs.133200", max: "Rs.177600" },
    { name: "Fat Transfer and Liposculpture", min: "Rs.133200", max: "Rs.177600" },
    { name: "Injectable Filler", min: "Rs.22200", max: "Rs.29600" },
    { name: "Laser Thread Vein Removal", min: "Rs.86580", max: "Rs.115440" },
    { name: "Lower Body Lift Surgery", min: "Rs.111000", max: "Rs.148000" },
    { name: "Mon Pubis Liposuction - Pubic Fat liposuction", min: "Rs.88800", max: "Rs.118400" },
    { name: "Nipple Correction Surgery", min: "Rs.41070", max: "Rs.54760" },
    { name: "Non-surgical Skin Tightening", min: "Rs.66600", max: "Rs.88800" },
    { name: "Pectoral Implant Surgery", min: "Rs.128760", max: "Rs.171680" },
    { name: "Vaginoplasty - Vaginal Tightening", min: "Rs.62160", max: "Rs.82880" },
    { name: "Nose Reshaping", min: "Rs.79920", max: "Rs.106560" },
  ];

  const [showMoreMostAsked, setShowMoreMostAsked] = useState(false);
  const [showMoreOther, setShowMoreOther] = useState(false);


  return (<>

    <div className="flex justify-center   w-full">
      <div className="flex w-8/12 flex-col p-6 scroll-smooth space-y-10">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#2b3d67]">
          Cosmetic Treatment Cost in India
        </h1>

        <div className="space-y-6">
          {/* Most Asked Procedures */}
          <section className="border p-3 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Most Asked Procedures
            </h2>
            <div className="grid text-sm grid-cols-1 md:grid-cols-3 gap-4">
              {(showMoreMostAsked ? mostAsked : mostAsked.slice(0, 3)).map(
                (item, idx) => (
                  <button
                    key={idx}
                    className="bg-[#2b3d67] text-white font-medium py-2 px-4 rounded-md shadow"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <p
              className="text-[#2b3d67] cursor-pointer mt-2 text-center font-medium"
              onClick={() => setShowMoreMostAsked(!showMoreMostAsked)}
            >
              {showMoreMostAsked ? "Show less" : "Show more"}
            </p>
          </section>

          {/* Other Procedures */}
          <section className="border p-3 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Other Procedures
            </h2>
            <div className="grid text-sm grid-cols-1 md:grid-cols-3 gap-4">
              {(showMoreOther ? otherProcedures : otherProcedures.slice(0, 3)).map(
                (item, idx) => (
                  <button
                    key={idx}
                    className="bg-[#2b3d67] text-white font-medium py-2 px-4 rounded-md shadow"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
            <p
              className="text-[#2b3d67] cursor-pointer mt-2 text-center font-medium"
              onClick={() => setShowMoreOther(!showMoreOther)}
            >
              {showMoreOther ? "Show less" : "Show more"}
            </p>
          </section>
        </div>


        {/* Cost Overview */}
        <section className="p-5 bg-blue-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#2b3d67] mb-3">
            Cost of Cosmetic Treatment in India: Detailed Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cosmetic surgeries include surgical and nonsurgical procedures to enhance
            and reshape the body parts and improve appearance and confidence...
          </p>
        </section>

        {/* Doctors Section */}
        <section>
          <h2 className="text-xl font-semibold text-[#2b3d67] mb-5">
            Doctors for Cosmetic Treatment in India
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((doc) => (
              <div
                key={doc}
                className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow"
              >
                <img
                  src={natarajan}
                  alt="doctor"
                  className="w-28 h-28 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-[#2b3d67]">Dr. Natrajan</h3>
                <p className="text-sm text-gray-600">Head of Department</p>
                <p className="text-sm text-gray-600">Fortis Memorial, Gurgaon</p>
                <div className="flex gap-3 mt-3">
                  <button className="bg-[#2b3d67] text-sm shadow-md text-white px-4 py-1 rounded-md">
                    Book Appointment
                  </button>
                  <button className="bg-white text-sm shadow-md  text-[#2b3d67] border border-[#2b3d67]  px-6 py-1 rounded-md">
                    Chat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hospitals Section */}
        <section>
          <h2 className="text-xl font-semibold text-[#2b3d67] mb-5">
            Leading Hospitals for Cosmetic Treatment in India
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((hosp) => (
              <div
                key={hosp}
                className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden"
              >
                <img
                  src={fortis}
                  alt="hospital"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    Fortis Hospital, New Delhi
                  </h3>
                  <p className="text-sm text-gray-500">⭐ 4.5 (50 Ratings)</p>
                  <button className="mt-3 bg-[#17b2aa] text-white px-4 py-2 rounded-md w-full">
                    Contact Hospital
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-[#2b3d67] text-white px-6 py-2 rounded-md">
              View More Hospitals
            </button>
          </div>
        </section>

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

        {/* Our Services */}
        <section>
          <h2 className="text-xl font-semibold text-[#2b3d67] mb-3">
            Our Services for Cosmetic Treatment in India
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Transparent · Professional · Without Hassles
          </p>
          <div className="grid md:grid-cols-4 gap-4 mb-5">
            {["Book Appointment", "Video Consult", "Cost Estimate", "Support"].map(
              (srv, idx) => (
                <div
                  key={idx}
                  className="bg-blue-200 p-4 rounded-lg text-center font-medium text-[#2b3d67]"
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

      <div className=" w-full py-4 pr-4 md:w-4/12 ">
        <div className="sticky top-36">
          <div className="flex flex-col border self-start rounded-sm bg-[#2b3d67] text-white p-6">
            <h2 className="text-2xl font-bold mb-1">Get FREE Evaluation</h2>
            <p className="text-sm mb-4">Treatment plan and quote within 2 days</p>
            <input
              type="text"
              placeholder="Patient Name"
              className="mb-3 px-4 py-1.5 rounded text-black"
            />

            <select className="mb-3 px-4 py-1.5 rounded text-black">
              <option>India</option>
            </select>

            <select className="mb-3 px-4 py-1.5 rounded text-black">
              <option>Select City</option>
            </select>

            <div className="flex mb-3">
              <span className="bg-gray-200 text-black px-3 py-1.5 rounded-l">+91</span>
              <input
                type="tel"
                placeholder="Enter Phone no."
                className="flex-1 px-4 py-1.5 rounded-r text-black"
              />
            </div>
            <textarea
              placeholder="Describe The Current Medical Problem."
              className="mb-3 px-4 py-1.5 rounded text-black"
            ></textarea>

            <input
              type="text"
              placeholder="Example: 30 Yrs or 29-05-1985"
              className="mb-4 px-4 py-1.5 rounded text-black"
            />

            <button className="bg-[#17b2aa] font-semibold text-white px-4 py-1.5 rounded w-full">
              Contact Us Now
            </button>

            <p className="text-xs text-center mt-4">
              By submitting the form I agree to the
              <a href="#" className="underline font-semibold"> Terms of Use </a>
              and
              <a href="#" className="underline font-semibold"> Privacy Policy </a>
              of Vaidam Health.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default MedicalCost;