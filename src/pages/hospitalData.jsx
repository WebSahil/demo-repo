import logo from "../assets/logo1.png"
import blkmax from '../assets/blkmax.jpg'

function HospitalData() {
    return (
        <div>
            <header className="w-full sticky bg-opacity-60 backdrop-blur-lg top-0 z-10 shadow-md    text-white">
                <div className="w-full  text-[#2b3d67]  font-semibold text-sm py-1 px-4 flex justify-end gap-10 items-center">
                </div>
                <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">
                    <div className="flex flex-1  items-center gap-4">
                        <img src={logo} alt="Logo" className="h-8 w-auto" />
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
                    <div className="max-w-7xl mx-auto flex gap-6 px-4 py-5     text-[#2b3d67] font-semibold text-sm overflow-x-auto">
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
            <div className="flex justify-center  gap-3 w-full">
                <div className="flex w-8/12 flex-col p-6">
                    <div className="w-full px-6 py-6">

                        <div className="border-b border-gray-300 pb-4 mb-6">
                            <h1 className="text-3xl font-bold text-[#2b3d67]">
                                Apollo Hospitals, New Delhi
                            </h1>
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

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">
                                About the Hospital
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Apollo Hospitals, New Delhi is one of the most trusted
                                healthcare providers in India, offering world-class medical
                                facilities with state-of-the-art infrastructure. The
                                hospital is recognized globally for its excellence in
                                patient care, advanced technology, and highly skilled
                                doctors.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm mt-3">
                                With over 700 beds, Apollo provides a wide range of medical
                                services including cardiology, oncology, neurology,
                                orthopedics, and organ transplantation. The hospital also
                                offers 24/7 emergency care and international patient
                                services, ensuring complete support from consultation to
                                recovery.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">
                                Key Specialties
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                <li>Cardiology & Cardiac Surgery</li>
                                <li>Oncology (Cancer Care)</li>
                                <li>Neurology & Neurosurgery</li>
                                <li>Orthopedics & Joint Replacement</li>
                                <li>Organ Transplantation</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">
                                Facilities for International Patients
                            </h2>
                            <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed">
                                <li>Airport Pick-up & Travel Assistance</li>
                                <li>Dedicated International Patient Lounge</li>
                                <li>Visa & Accommodation Support</li>
                                <li>Multi-lingual Translators</li>
                                <li>Customized Treatment Packages</li>
                            </ul>
                        </div>

                        <div className="bg-[#2b3d67] text-white p-6 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-2">
                                Need Help Planning Your Treatment?
                            </h3>
                            <p className="text-sm mb-4">
                                Get a free consultation with our experts and receive a
                                customized treatment plan within 48 hours.
                            </p>
                            <button className="bg-[#17b2aa] hover:bg-[#139a94] px-6 py-2 rounded-md font-semibold transition">
                                Contact Us Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" w-full p-4 md:w-4/12 ">
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