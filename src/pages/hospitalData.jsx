import logo from "../assets/logo1.png"
import blkmax from '../assets/blkmax.jpg'
import natarajan from '../assets/natarajan.webp'
import pradeep from '../assets/pradeep.webp'
import suraj from '../assets/surag.webp'
import { Link } from "react-scroll";

function HospitalData() {
    return (
        <div>
           <header className="w-full sticky bg-white top-0 z-10 shadow-md    text-white">
                           <div className="w-full  text-[#2b3d67]  font-semibold text-sm py-1 px-4 flex justify-end gap-10 items-center">
                           </div>
                           <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">
                               <div className="flex flex-1  items-center gap-4">
                                   <img src={logo} alt="Logo" className=" w-44" />
                                   <div className="flex-1  max-w-xl pl-20 w-full">
                                       <input
                                           type="text"
                                           placeholder="Search for a procedure, hospital, and doctor.."
                                           className="w-full px-4 py-1.5 text-sm border border-gray-700 shadow-md rounded-sm text-gray-700 focus:outline-none"
                                       />
                                   </div>
                               </div>
           
                               <div className="flex items-center gap-6 mt-4 md:mt-0">
                                   <button className="border border-[#2b3d67] text-sm px-4 py-1.5 rounded-sm text-[#2b3d67] transition">
                                       Get a FREE quote
                                   </button>
                                   <button className="bg-[#17b2aa] text-sm px-4 py-1.5 rounded-sm font-semibold">
                                       Get a FREE Consultation
                                   </button>
                               </div>
                           </div>
           
           
                           <div className=" w-full">
                               <div className="max-w-7xl mx-auto flex gap-6 px-4 py-5     text-[#2b3d67] font-semibold  overflow-x-auto">
                                   <a href="#" className="hover:underline">Treatment</a>
                                   <a href="#" className="hover:underline">Hospitals</a>
                                   <a href="#" className="hover:underline">Doctors</a>
                                   <a href="#" className="hover:underline">Patient Stories</a>
                                   <a href="#" className="hover:underline">Packages</a>
                                   <a href="#" className="hover:underline">Our Company</a>
                                   <a href="#" className="hover:underline">Knowledge Center</a>
                               </div>
                           </div>
                       </header>
            <div className="flex justify-center   w-full">
                <div className="flex w-8/12 flex-col scroll-smooth p-6">
                    <div className="w-full px-6 py-6">
                        {/* Title */}
                        <div className="border-b border-gray-300 pb-4 mb-6">
                            <h1 className="text-3xl font-bold text-[#2b3d67]">Apollo Hospitals, New Delhi</h1>
                            <p className="text-gray-600 mt-2 text-sm">
                                ⭐ 4.8/5 • Multi-speciality • Established in 1983
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <img
                                src={blkmax}
                                alt="Hospital Front"
                                className="w-full h-64 object-cover rounded-md shadow-md"
                            />
                            <img
                                src={blkmax}
                                alt="Hospital Interior"
                                className="w-full h-64 object-cover rounded-md shadow-md"
                            />
                        </div>
                        {/* Section Navigation */}
                        <nav className="sticky top-0 bg-white  py-3 mb-8 border-b border-gray-200">
                            <ul className="flex flex-wrap gap-4 text-sm font-medium text-[#2b3d67]">
                                <li>
                                    <Link
                                        to="overview"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="procedures"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        Procedures
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="doctors"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        Doctors
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="facilities"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        facilities
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="reviews"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="gallery"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="faqs"
                                        smooth={true}
                                        duration={500}
                                        offset={-120}
                                        className="cursor-pointer hover:text-[#17b2aa] transition"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </nav>


                        {/* Overview */}
                        <section id="overview" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Overview</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Apollo Hospitals, New Delhi is a world-renowned healthcare institution offering
                                state-of-the-art medical services. With over 700 beds and advanced medical technology,
                                Apollo is one of India’s most trusted names in healthcare.
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed mt-2">
                                The hospital provides comprehensive medical services, ranging from preventive health
                                checkups to complex surgeries. It is accredited by JCI and NABH for quality standards.
                            </p>
                        </section>

                        {/* Procedures */}
                        <section id="procedures" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Procedures Offered</h2>
                            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                <li>Cardiac Bypass Surgery</li>
                                <li>Knee & Hip Replacement</li>
                                <li>Liver & Kidney Transplant</li>
                                <li>Oncology Treatments (Chemotherapy, Radiation, Surgery)</li>
                                <li>Neurological Surgeries</li>
                            </ul>
                        </section>

                        {/* Doctors */}
                        <section id="doctors" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Our Doctors</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                <div className="p-4  rounded-lg shadow-md flex flex-col items-center text-center">
                                    <img
                                        src={natarajan}
                                        alt="Dr. Ramesh Gupta"
                                        className="w-28 h-28 rounded-full object-cover mb-3"
                                    />
                                    <h3 className="font-bold text-gray-800">Dr. Ramesh Gupta</h3>
                                    <p className="text-sm text-gray-600">Senior Cardiologist, 20+ yrs exp.</p>
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
                                </div>

                                <div className="p-4  rounded-lg shadow-md flex flex-col items-center text-center">
                                    <img
                                        src={pradeep}
                                        alt="Dr. Vikram Singh"
                                        className="w-28 h-28 rounded-full object-cover mb-3"
                                    />
                                    <h3 className="font-bold text-gray-800">Dr. Vikram Singh</h3>
                                    <p className="text-sm text-gray-600">Orthopedic Surgeon, 18+ yrs exp.</p>
                                </div>

                            </div>
                        </section>


                        {/* Facilities */}
                        <section id="facilities" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Facilities</h2>
                            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                <li>24/7 Emergency & Ambulance Services</li>
                                <li>International Patient Lounge & Translators</li>
                                <li>Airport Pickup & Accommodation Assistance</li>
                                <li>Pharmacy, Cafeteria & WiFi-enabled rooms</li>
                            </ul>
                        </section>

                        {/* Reviews */}
                        <section id="reviews" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Patient Reviews</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                    <p className="text-sm text-gray-700">
                                        “The doctors and staff were very professional. My father underwent bypass surgery,
                                        and the recovery was smooth.” – <span className="font-semibold">Rahul, India</span>
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                    <p className="text-sm text-gray-700">
                                        “Apollo made my medical journey stress-free. They handled everything from visa
                                        to treatment.” – <span className="font-semibold">Carlos, Mexico</span>
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section id="reviews" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Patient Reviews</h2>
                            <div className="space-y-4 mb-6">
                                {/* Review 1 */}
                                <div className="flex items-start p-4 bg-white border rounded-xl shadow-md">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Rahul"
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <p className="text-sm text-gray-700 italic">
                                        “The doctors and staff were very professional. My father underwent bypass surgery,
                                        and the recovery was smooth.” <br />
                                        <span className="font-semibold not-italic text-gray-900">– Rahul, India</span>
                                    </p>
                                </div>

                                {/* Review 2 */}
                                <div className="flex items-start p-4 bg-white border rounded-xl shadow-md">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/45.jpg"
                                        alt="Carlos"
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <p className="text-sm text-gray-700 italic">
                                        “Apollo made my medical journey stress-free. They handled everything from visa
                                        to treatment.” <br />
                                        <span className="font-semibold not-italic text-gray-900">– Carlos, Mexico</span>
                                    </p>
                                </div>
                            </div>


                            <div className="p-6 border rounded-xl shadow-md bg-gray-50">
                                <h3 className="text-xl font-bold text-[#2b3d67] mb-4">💬 Leave Your Feedback</h3>
                                <form className="space-y-4">
                                    {/* Name Input */}
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full border border-gray-300 p-3 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-[#2b3d67] focus:border-[#2b3d67] outline-none transition"
                                    />

                                    {/* Rating */}
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-medium text-gray-700">Your Rating:</span>
                                        <div className="flex space-x-1 text-yellow-500 cursor-pointer">
                                            <span>⭐</span>
                                            <span>⭐</span>
                                            <span>⭐</span>
                                            <span>⭐</span>
                                            <span>⭐</span>
                                        </div>
                                    </div>

                                    {/* Review Textarea */}
                                    <textarea
                                        placeholder="Write your review..."
                                        rows="4"
                                        className="w-full border border-gray-300 p-3 rounded-lg text-sm shadow-sm focus:ring-2 focus:ring-[#2b3d67] focus:border-[#2b3d67] outline-none transition"
                                    ></textarea>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-[#2b3d67] text-white px-4 py-2 rounded-lg hover:bg-[#1f2c4d] transition font-medium text-sm shadow-md"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </div>

                        </section>




                        {/* Gallery */}
                        <section id="gallery" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img src={blkmax} alt="Hospital Front" className="rounded-lg shadow-md" />
                                <img src={blkmax} alt="Hospital Interior" className="rounded-lg shadow-md" />
                            </div>
                        </section>

                        <section id="faqs" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Frequently Asked Questions</h2>
                            <div className="space-y-4">
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
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="bg-[#2b3d67] text-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Need Help Planning Your Treatment?</h3>
                            <p className="text-sm mb-4">
                                Get a free consultation with our experts and receive a customized treatment plan within 48 hours.
                            </p>
                            <button className="bg-[#17b2aa] hover:bg-[#139a94] px-6 py-2 rounded-md font-semibold transition">
                                Contact Us Now
                            </button>
                        </div>
                    </div>
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
            <footer className="bg-[#052b47] text-white">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Our Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Our Company</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">Doctor Onboarding</a></li>
                        </ul>
                    </div>

                    {/* Surgery */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Surgery</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a href="#" className="hover:underline">Laser Surgery</a></li>
                            <li><a href="#" className="hover:underline">Laparoscopy Surgery</a></li>
                            <li><a href="#" className="hover:underline">Cosmetic Surgery</a></li>
                            <li><a href="#" className="hover:underline">Ear Surgery</a></li>
                            <li><a href="#" className="hover:underline">Plastic Surgery</a></li>
                        </ul>
                    </div>

                    {/* For Patients */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">For Patients</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Patient Help</a></li>
                            <li><a href="#" className="hover:underline">Find a Clinic</a></li>
                            <li><a href="#" className="hover:underline">Doctors Section</a></li>
                            <li><a href="#" className="hover:underline">Videos</a></li>
                        </ul>
                    </div>

                    {/* Other Links & Social */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Other Links</h3>
                        <ul className="space-y-2 text-gray-300 text-sm mb-6">
                            <li><a href="#" className="hover:underline">BMI Calculator</a></li>
                            <li><a href="#" className="hover:underline">Pregnancy Calculator</a></li>
                            <li><a href="#" className="hover:underline">Cost Index</a></li>
                            <li><a href="#" className="hover:underline">All Treatments</a></li>
                        </ul>
                        <h3 className="text-lg font-bold mb-2">Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="hover:text-[#17b2aa]">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-[#17b2aa]">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-[#17b2aa]">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-[#17b2aa]">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="YouTube" className="hover:text-[#17b2aa]">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
                    <p>&copy; {new Date().getFullYear()} JD Max Healthcare. All rights reserved.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Refund Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HospitalData;