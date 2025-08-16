import React from 'react'
import blkmax from '../assets/blkmax.jpg'
import { useState } from 'react'
import logo from "../assets/logo.png"
import calculator from "../assets/calculator.png"
import gpay from "../assets/gpay.png"
import appstore from "../assets/appstore.png"
import doctorImg from "../assets/drimg.webp"
import PankajSareen from "../assets/PankajSareen.jpg"
const ContactUs = () => {

    const [open1, setopen1] = useState('')
    const [open2, setopen2] = useState('')
    const [open3, setopen3] = useState('')
    const [open4, setopen4] = useState('')
    const [open5, setopen5] = useState('')

    const toogleQuestion1 = () => {
        setopen1(!open1)
        setopen2(false)
        setopen3(false)
        setopen4(false)
        setopen5(false)
    }
    const toogleQuestion2 = () => {
        setopen2(!open2)
        setopen1(false)
        setopen3(false)
        setopen4(false)
        setopen5(false)
    }
    const toogleQuestion3 = () => {
        setopen3(!open3)
        setopen2(false)
        setopen1(false)
        setopen4(false)
        setopen5(false)
    }
    const toogleQuestion4 = () => {
        setopen4(!open4)
        setopen3(false)
        setopen2(false)
        setopen1(false)
        setopen5(false)
    }
    const toogleQuestion5 = () => {
        setopen5(!open5)
        setopen4(false)
        setopen3(false)
        setopen2(false)
        setopen1(false)
    }

    const doctorsData = [
        {
            name: "Dr. Anil Bhan",
            location: "Gurgaon, India",
            experience: "49+",
            designation: "Chairman",
            worksAt: "Medanta - The Medicity, Gurgaon",
            specialty: "Cardiac Surgeon",
            image: doctorImg,
        },

        {
            name: "Dr. Anil Bhan",
            location: "Gurgaon, India",
            experience: "49+",
            designation: "Chairman",
            worksAt: "Medanta - The Medicity, Gurgaon",
            specialty: "Cardiac Surgeon",
            image: doctorImg,
        },

        {
            name: "Dr. Anil Bhan",
            location: "Gurgaon, India",
            experience: "49+",
            designation: "Chairman",
            worksAt: "Medanta - The Medicity, Gurgaon",
            specialty: "Cardiac Surgeon",
            image: doctorImg,
        },

        {
            name: "Dr. Anil Bhan",
            location: "Gurgaon, India",
            experience: "49+",
            designation: "Chairman",
            worksAt: "Medanta - The Medicity, Gurgaon",
            specialty: "Cardiac Surgeon",
            image: doctorImg,
        },

        {
            name: "Dr. Anil Bhan",
            location: "Gurgaon, India",
            experience: "49+",
            designation: "Chairman",
            worksAt: "Medanta - The Medicity, Gurgaon",
            specialty: "Cardiac Surgeon",
            image: doctorImg,
        },

    ];

    return (
        <>
            <header className="w-full border-b border-gray-500 mb-3 bg-[#2b3d67] text-white">
                <div className="w-full  text-[#2b3d67] bg-gray-100 text-sm py-1.5 px-4 flex justify-end gap-10 items-center">
                    <p>Call us: +91-1234567890</p>
                    <p>Email: support@yourdomain.com</p>
                </div>
                <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">

                    <div className="flex flex-1  items-center gap-4">
                        <img src={logo} alt="Logo" className="h-8 w-auto" />
                        <div className="flex-1  max-w-xl pl-20 w-full">
                            <input
                                type="text"
                                placeholder="Search for a procedure, hospital, and doctor.."
                                className="w-full px-4 py-1.5 text-sm border rounded-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <button className="border border-white text-sm px-4 py-1.5 rounded-sm hover:bg-white hover:text-[#2b3d67] transition">
                            Get a FREE quote
                        </button>
                        <button className="bg-[#17b2aa] text-sm px-4 py-1.5 rounded-sm font-semibold">
                            Get a FREE Consultation
                        </button>
                    </div>
                </div>


                <div className="bg-gray-100 w-full">
                    <div className="max-w-7xl mx-auto flex gap-6 px-4 py-5    text-[#2b3d67] font-semibold text-sm overflow-x-auto">
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

            <div className='flex px-10 flex-col '>
                <div className="w-full justify-center items-center flex flex-row   bg-[#2b3d67] rounded-sm py-2 mt-5 px-3 gap-3">

                    <select className="appearance-none w-56 border text-center border-gray-300 px-6 py-1 text-gray-800 rounded-sm bg-white">
                        <option>India</option>
                    </select>

                    <select className="appearance-none text-center w-56 border border-gray-300 px-6 py-1 text-gray-800 rounded-sm bg-white">
                        <option>All Cities</option>
                        <option>Delhi</option>
                        <option>Jaipur</option>
                        <option>Mumbai</option>
                        <option>Hyderabad</option>
                        <option>Jodhpur</option>
                        <option>Udaipur</option>
                    </select>

                    <select className="appearance-none text-center w-56 border border-gray-300 px-6 py-1 text-gray-800 rounded-sm bg-white">
                        <option>All Procedures</option>
                        <option>Neuro Rehabilitation</option>
                        <option>Weight loss Surgery - Bariatric Surgery</option>
                        <option>Spine Surgery</option>
                        <option>Cardiology</option>
                        <option>Neurosurgery</option>
                        <option>Cancer Treatment</option>
                        <option>Joint Replacement</option>
                        <option>Eye Surgery</option>
                        <option>Plastic & Cosmetic Surgery</option>
                        <option>Urology</option>
                        <option>Hair Transplant</option>
                        <option>Pediatric Orthopaedics</option>
                        <option>Orthopedics</option>
                        <option>Dental</option>
                        <option>Nuclear Medicine</option>
                        <option>Gastroenterology</option>
                        <option>General Surgery</option>
                        <option>Organ Transplant Surgery</option>
                        <option>Neurology</option>
                        <option>Plastic Surgery</option>
                        <option>Stem Cell</option>
                        <option>In Vitro Fertilization (IVF)</option>
                        <option>Ear Nose & Throat (ENT)</option>
                        <option>Vascular Surgery</option>
                        <option>Andrology & Sexual Health</option>
                        <option>Colorectal Medicine</option>
                        <option>Advance Robotic</option>
                        <option>Physiotherapy</option>
                        <option>Transplant</option>
                    </select>

                    <select className="appearance-none text-center w-56 border border-gray-300 px-6 py-1 text-gray-800 rounded-sm bg-white">
                        <option>All Hospitals</option>
                        <option>BLK-Max• Super Speciality Hospital</option>
                        <option>Medanta - The Medicity</option>
                        <option>Apex Hospitals</option>
                        <option>Fortis Memorial Research institute</option>
                        <option>Manglam Medicity</option>
                        <option>Purple Heron</option>
                        <option>Indraprastha apollo hospital</option>
                        <option>Apollo Hospital</option>
                        <option>Eternal Hospital</option>
                        <option>Manipal Hospital</option>
                        <option>Primus• Super Speciality Hospital</option>
                        <option>CK Birla Hospital</option>
                        <option>Shalby Hospital</option>
                        <option>Nav Imperial Hospital</option>
                        <option>IBS Hospital</option>
                        <option>Mission Life- Advance Robotic Rehabilitation</option>
                        <option>Asian Cancer Institute</option>
                        <option>Surya Hospital</option>
                        <option>SDMH</option>
                        <option>Gleneagles Hospital</option>
                        <option>Wockhardt Hospital</option>
                        <option>HCG Cancer Center</option>
                        <option>Bhagwan Mahaveer Cancer Hospital and Research Center</option>
                        <option>Max• Super Speciality Hospital</option>
                        <option>Tata Memorial Hospital</option>
                        <option>Medicover Hospital</option>
                        <option>Medicover Hospital</option>
                        <option>Metro Group of Hospitals</option>
                        <option>Malot Hospital</option>
                        <option>SCI International Hospital</option>
                        <option>DR ROYCHOWDHURY'S INSTITUTE OF UROLOGY</option>
                        <option>Asian Heart Institute</option>
                        <option>NeuroCare Hospital</option>
                        <option>Centre For Sight</option>
                        <option>Medispa</option>
                        <option>Mediplus</option>
                        <option>DermaClinix - The Complete Skin & Hair Solution Center</option>
                        <option>JNU Hospital</option>
                        <option>Dr. Ramani's Dental Practice</option>
                        <option>Dharamshila Hospital And Research Centre</option>
                        <option>Indian Spinal Injuries Centre</option>
                        <option>Siddham Ent Center</option>
                    </select>

                    <div className='flex justify-center items-center pl-10'>
                        <button className="bg-[#17b2aa] text-white font-semibold  px-14 py-1.5  rounded-sm">
                            Search
                        </button>
                    </div>
                </div>
                <div className='flex mt-7 flex-row gap-2 w-full'>
                    <div className='flex flex-col gap-4 w-full md:w-8/12'>
                        {doctorsData.map((doctor, index) => (
                            <React.Fragment key={index}>
                                <div className="border border-gray-300 rounded-sm p-4 flex items-start justify-between shadow-md w-full max-w-5xl bg-white">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-44 h-44 rounded-sm"
                                        />
                                    </div>

                                    <div className="flex-grow px-4">
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
                                            <span className="text-green-600 text-lg">✅</span>
                                        </div>

                                        <p className="text-gray-600 text-sm">{doctor.location}</p>

                                        <div className='flex pt-2 text-sm items-center gap-5'>
                                            <p className="text-gray-700">
                                                <span className="font-semibold">{doctor.experience}</span> years of experience
                                            </p>

                                            <p className="text-gray-700">
                                                <span className="font-semibold">Designation:</span> {doctor.designation}
                                            </p>
                                        </div>

                                        <p className="text-gray-700 gap-3 pt-1 flex items-center">
                                            <span className="font-semibold">Works At:</span>
                                            <span className="text-blue-800 text-sm underline cursor-pointer">
                                                {doctor.worksAt}
                                            </span>
                                        </p>
                                        <div className="flex items-center  gap-2 pt-2">
                                            <span className="bg-blue-100 text-[#2b3d67] font-semibold text-sm px-2 py-1 rounded-sm shadow-sm">
                                                {doctor.specialty}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <button className="bg-[#17b2aa] font-semibold rounded-sm text-white px-4 py-1.5">
                                            Book Appointment
                                        </button>
                                        <button className=" rounded-sm font-semibold border hover:bg-[#17b2aa]  px-4 text-[#17b2aa] hover:text-white py-1.5 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M12.04 2.003c-5.52 0-10 4.477-10 9.995 0 1.764.466 3.488 1.351 5.004L2 22l5.136-1.35a9.93 9.93 0 0 0 4.906 1.248h.001c5.52 0 10-4.477 10-9.995 0-2.676-1.042-5.191-2.933-7.072A9.943 9.943 0 0 0 12.04 2.003zm5.89 14.176c-.245.688-1.43 1.344-1.986 1.4-.509.053-1.133.075-1.82-.114-.418-.112-.954-.308-1.649-.603-2.91-1.257-4.81-4.332-4.96-4.547-.144-.214-1.185-1.58-1.185-3.017 0-1.438.75-2.144 1.02-2.444.27-.3.59-.375.786-.375.197 0 .393.002.565.01.182.008.425-.07.665.508.245.588.834 2.027.91 2.176.075.15.126.326.025.527-.1.2-.15.325-.295.5-.144.176-.305.394-.435.53-.145.15-.294.312-.127.613.165.3.734 1.208 1.577 1.956 1.084.974 1.99 1.278 2.29 1.428.3.15.474.127.651-.075.177-.2.75-.875.95-1.175.2-.3.4-.25.67-.15.27.1 1.715.81 2.006.96.29.15.485.225.556.35.07.126.07.725-.176 1.412z" />
                                            </svg>
                                            Whatsapp Us
                                        </button>
                                    </div>
                                </div>
                                {(index === 4) && (
                                    <div className="flex items-center gap-4 bg-gray-50 border border-gray-200 p-4 rounded-sm shadow-sm w-full max-w-3xl mx-auto">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={PankajSareen}
                                                alt="Dr. Sunil Gehlot"
                                                className="w-12 h-12 rounded-sm object-cover"
                                            />
                                            <div>
                                                <p className="text-base text-gray-700 font-medium">Dr. Sunil Gehlot</p>
                                                <p className="text-xs font-semibold text-gray-500">33 Years Experience Overall</p>
                                            </div>
                                        </div>

                                        <div className="ml-auto flex items-center gap-2">
                                            <span className="text-green-600 text-lg">✅</span>
                                            <p className="text-sm font-semibold text-gray-600">Medically Reviewed By</p>
                                        </div>
                                    </div>
                                )}

                                {(index + 1) % 3 === 0 && (
                                    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-[#2b3d67] rounded-sm shadow-lg overflow-hidden border border-gray-200 mb-8 mt-2">
                                        <div className="w-full md:w-1/2 p-6 flex flex-col gap-4 border-r border-gray-300 text-white">
                                            <h2 className="text-xl font-semibold">Simplifying Surgery Experience</h2>
                                            <p className="text-gray-200">
                                                Consult with our expert surgeon for more than 50+ diseases
                                            </p>

                                            <div className="space-y-4 mt-4">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-2xl">📞</span>
                                                    <p className="text-gray-200 text-sm">
                                                        Once you share your details, our care coordinator will get in touch with you.
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-2xl">👨‍⚕️</span>
                                                    <p className="text-gray-200 text-sm">
                                                        The coordinator will understand your symptoms and health condition in detail.
                                                    </p>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-2xl">📅</span>
                                                    <p className="text-gray-200 text-sm">
                                                        Your consultation will be scheduled at the earliest.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center bg-white/20 rounded-sm px-4 py-1 mt-6">
                                                <div className="text-center">
                                                    <p className="text-xl font-bold text-white">3M+</p>
                                                    <p className="text-sm text-white">Happy Patients</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-xl font-bold text-white">150+</p>
                                                    <p className="text-sm text-white">Clinics</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-xl font-bold text-white">30+</p>
                                                    <p className="text-sm text-white">Cities</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 p-6 pt-9 flex flex-col gap-4 text-white">
                                            <h2 className="text-lg font-bold">Book Your FREE Consultation Now</h2>

                                            <input
                                                type="text"
                                                placeholder="Patient Name"
                                                className="border border-white rounded-sm px-4 py-2 w-full text-black"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Enter 10 Digit mobile number"
                                                className="border border-white rounded-sm px-4 py-2 w-full text-black"
                                            />

                                            <select className="border border-white rounded-sm px-4 py-2 w-full text-black">
                                                <option>Select City</option>
                                                <option>Hansi</option>
                                                <option>Hisar</option>
                                                <option>Jind</option>
                                                <option>Bhiwani</option>
                                            </select>

                                            <select className="border border-white rounded-sm px-4 py-2 w-full text-black">
                                                <option>Select Disease</option>
                                            </select>

                                            <button className="w-full bg-white text-[#2b3d67] py-3 rounded-sm font-semibold hover:bg-gray-100 transition">
                                                Book Free Appointment
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {(index + 1) % 5 === 0 && (
                                    <div className="w-full  max-w-5xl mx-auto bg-[#f8f8f8] rounded-sm pt-2">
                                        <div className="flex pl-5 gap-4 mb-4">
                                            <img src={calculator} alt="Calculator" className="w-20 h-20 object-contain" />
                                            <h2 className="text-2xl flex justify-center items-center text-[#2b3d67] font-bold">
                                                Piles Surgery Cost Calculator
                                            </h2>
                                        </div>
                                        <div className=" p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                                            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                                                <input type="text" placeholder="Patient Name" className="border px-3 border-[#2b3d67] py-1 rounded-sm" />
                                                <input type="text" placeholder="Mobile Number" className="border px-3 border-[#2b3d67] py-1 rounded-sm" />
                                                <select className="border px-14 border-[#2b3d67] py-1 text-sm rounded-sm">
                                                    <option>Select City</option>
                                                </select>
                                                <button className="bg-[#2b3d67] shadow-md border border-[#2b3d67]  text-sm text-white font-semibold px-6 py-1 rounded-sm">
                                                    Get cost
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {(index + 1) % 4 === 0 && (
                                    <div className="w-full max-w-5xl mx-auto bg-[#f8f8f8] rounded-sm py-6 px-2 flex flex-col items-center">

                                        <h2 className="text-[#2b3d67] text-lg md:text-xl font-bold mb-4 text-center">
                                            Pristyn Care’s Free Post-Operative Care
                                        </h2>

                                        <div className="flex flex-col md:flex-row gap-2 mb-4 w-full justify-center">

                                            <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-4 py-1.5 bg-white">
                                                <span role="img" aria-label="Diet" className="text-xl">🍎</span>
                                                <p className="text-sm font-semibold text-[#2b3d67]">Diet & Lifestyle Consultation</p>
                                            </div>

                                            <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-4 py-1.5 bg-white">
                                                <span role="img" aria-label="Follow-Up" className="text-xl">📅</span>
                                                <p className="text-sm font-semibold text-[#2b3d67]">Post-Surgery Free Follow-Up</p>
                                            </div>

                                            <div className="flex  items-center gap-2 border border-gray-300 rounded-sm p-4 py-1.5 bg-white">
                                                <span role="img" aria-label="Cab" className="text-xl">🚕</span>
                                                <p className="text-sm font-semibold text-[#2b3d67]">Free Cab Facility</p>
                                            </div>

                                            <div className="flex items-center gap-2 border border-gray-300 rounded-sm px-4 py-1.5 bg-white">
                                                <span role="img" aria-label="24/7" className="text-xl">🕑</span>
                                                <p className="text-sm font-semibold text-[#2b3d67]">24*7 Patient Support</p>
                                            </div>
                                        </div>

                                        <button className="bg-[#2b3d67] text-white mt-2 font-semibold px-6 py-1.5 rounded-sm">
                                            Chat with Expert for FREE
                                        </button>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="hidden md:block w-full md:w-4/12 relative">
                        <div className="sticky top-4">
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
                <div className="flex justify-center px-4 lg:px-36 flex-col w-full h-full mb-8 mt-8">
                    <h2 className="mb-6 pb-2 text-center text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-[#2b3d67] via-[#17b2aa] to-[#2b3d67] bg-clip-text">
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <div className="flex flex-col space-y-4 w-full md:px-20">

                        <div className="flex flex-col shadow border border-gray-200 rounded-sm">
                            <button onClick={toogleQuestion1} className="flex items-center justify-between w-full px-4 py-1.5 cursor-pointer hover:bg-[#f1f5f9]">
                                <h3 className="text-base md:text-lg font-semibold text-[#2b3d67]">
                                    1. How can I track my package?
                                </h3>
                                <i className={`fa-solid text-white bg-[#17b2aa] px-2 py-1 rounded-sm ${open1 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </button>
                            {open1 && (
                                <div className="px-4 py-1.5 text-sm text-gray-700">
                                    You can track your package by using the tracking link provided by Couriero via SMS. Simply enter the tracking AWB number or Order ID on the Couriero website.
                                </div>
                            )}
                        </div>


                        <div className="flex flex-col shadow border border-gray-200 rounded-sm">
                            <button onClick={toogleQuestion2} className="flex items-center justify-between w-full px-4 py-1.5 cursor-pointer hover:bg-[#f1f5f9]">
                                <h3 className="text-base md:text-lg font-semibold text-[#2b3d67]">
                                    2. What do different tracking status mean?
                                </h3>
                                <i className={`fa-solid text-white bg-[#17b2aa] px-2 py-1 rounded-sm ${open2 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </button>
                            {open2 && (
                                <div className="px-4 py-1.5 text-sm text-gray-700">
                                    <p><b>Manifested</b>: Your package's info is registered and waiting pickup.</p>
                                    <p><b>In transit</b>: Package is on the way.</p>
                                    <p><b>Delivery Destination</b>: Reached final hub.</p>
                                    <p><b>Out for Delivery</b>: With the courier agent.</p>
                                    <p><b>Delivered</b>: Successfully delivered.</p>
                                    <p><b>RTO In Transit</b>: Returning to sender.</p>
                                    <p><b>RTO Delivered</b>: Returned to sender.</p>
                                </div>
                            )}
                        </div>


                        <div className="flex flex-col shadow border border-gray-200 rounded-sm">
                            <button onClick={toogleQuestion3} className="flex items-center justify-between w-full px-4 py-1.5  cursor-pointer hover:bg-[#f1f5f9]">
                                <h3 className="text-base md:text-lg font-semibold text-[#2b3d67]">
                                    3. My tracking hasn’t updated in a while. What should I do?
                                </h3>
                                <i className={`fa-solid text-white bg-[#17b2aa] px-2 py-1 rounded-sm ${open3 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </button>
                            {open3 && (
                                <div className="px-4 py-1.5 text-sm text-gray-700">
                                    If your tracking hasn’t updated for a while, it may be due to a scan delay. If needed, reach out at support@couriero.in.
                                </div>
                            )}
                        </div>


                        <div className="flex flex-col shadow border border-gray-200 rounded-sm">
                            <button onClick={toogleQuestion4} className="flex items-center justify-between w-full px-4 py-1.5 cursor-pointer hover:bg-[#f1f5f9]">
                                <h3 className="text-base md:text-lg font-semibold text-[#2b3d67]">
                                    4. Can I change the delivery address or contact details?
                                </h3>
                                <i className={`fa-solid text-white bg-[#17b2aa] px-2 py-1 rounded-sm ${open4 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </button>
                            {open4 && (
                                <div className="px-4 py-1.5 text-sm text-gray-700">
                                    You can update delivery address or contact info by raising a ticket on the Couriero website.
                                </div>
                            )}
                        </div>


                        <div className="flex flex-col shadow border border-gray-200 rounded-sm">
                            <button onClick={toogleQuestion5} className="flex items-center justify-between w-full px-4 py-1.5 cursor-pointer hover:bg-[#f1f5f9]">
                                <h3 className="text-base md:text-lg font-semibold text-[#2b3d67]">
                                    5. My package shows “Delivered,” but I haven’t received it. What should I do?
                                </h3>
                                <i className={`fa-solid text-white bg-[#17b2aa] px-2 py-1 rounded-sm ${open5 ? 'fa-angle-up' : 'fa-angle-down'}`} />
                            </button>
                            {open5 && (
                                <div className="px-4 py-1.5 text-sm text-gray-700">
                                    If you haven’t received it, email us at support@couriero.in for help.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* <div className='flex w-full gap-5'>
                    <div className="w-full bg-gray-100 pt-10 pb-5 px-3 md:w-1/2  flex flex-col gap-10">
                        <div className="flex flex-col  gap-4">
                            <div className="w-full px-5">
                                <iframe
                                    className="w-full h-80 rounded-sm"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Patient Testimonial"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="w-full  flex flex-col justify-center text-center">
                                <h3 className="text-xl font-semibold mb-2">Heart Surgery Success Story</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    Hear how Mr. Sharma recovered quickly and safely with our expert care.
                                    Hear how Mr. Sharma recovered quickly and safely with our expert care.
                                </p>
                                <a href="#" className="text-blue-950 text-sm font-semibold underline">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2">
                                <iframe
                                    className="w-full h-40 rounded-sm"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Patient Testimonial"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="w-full md:w-1/2">
                                <iframe
                                    className="w-full h-40 rounded-sm"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Patient Testimonial"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="py-6">
                            <h2 className="text-3xl md:text-2xl font-bold text-[#2b3d67] mb-4">
                                What Our Patients Say
                            </h2>
                            <p className="text-gray-600 max-w-2xl ">
                                Hear from patients who trusted us for their treatments and care.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-sm pt-0 p-6">
                            <p className="text-gray-700  mb-4">
                                “JD Max Healthcare made my surgery experience smooth and stress-free.
                                The doctors were professional and the team helped with every step.”
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Patient"
                                    className="w-12 h-12 rounded-sm object-cover"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold">Rahul Sharma</h4>
                                    <p className="text-xs text-gray-500">Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-sm p-6">
                            <p className="text-gray-700 mb-4">
                                “Thanks to JD Max I found the best hospital for my father’s treatment.
                                The free consultation and guidance were really helpful.”
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Patient"
                                    className="w-12 h-12 rounded-sm object-cover"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold">Anjali Verma</h4>
                                    <p className="text-xs text-gray-500">Delhi, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-sm p-6">
                            <p className="text-gray-700 mb-4">
                                “They took care of everything from quotes to doctors.
                                The entire process was easy and transparent.”
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Patient"
                                    className="w-12 h-12 rounded-sm object-cover"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold">Sameer Khan</h4>
                                    <p className="text-xs text-gray-500">Hyderabad, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="w-full mt-8 max-w-7xl mx-auto bg-[#f9f9f9] p-6 rounded-sm">
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

                <div className="w-full mt-16 bg-gray-100 py-12 px-4">
                    <div className="max-w-7xl mx-auto flex flex-col gap-6">
                        <h2 className="text-2xl font-bold text-[#2b3d67]">
                            About [Your Company Name]
                        </h2>
                        <p className="text-gray-700 text-base leading-relaxed">
                            [Your Company Name] is India’s trusted platform for advanced surgical treatments and healthcare solutions.
                            With a mission to simplify and transform the patient experience, we connect people with the best hospitals,
                            highly qualified surgeons, and modern surgical procedures. From consultation to recovery, we guide our patients
                            at every step of their healthcare journey.
                        </p>

                        <h3 className="text-xl font-semibold text-[#2b3d67]">
                            Our Expertise
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            We specialize in a wide range of treatments including piles surgery, hernia surgery, gallbladder removal,
                            kidney stone treatment, orthopedic procedures, gynecological surgeries, and many other minimally invasive
                            surgeries. Our network spans across major cities like Delhi, Mumbai, Bangalore, Hyderabad, and more,
                            ensuring high-quality care is always within reach.
                        </p>

                        <h3 className="text-xl font-semibold text-[#2b3d67]">
                            Why Choose Us
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            With 24/7 patient support, free consultations, cost transparency, insurance assistance, and post-operative care,
                            we ensure a stress-free surgery experience. Our team works closely with certified hospitals and NABH-accredited
                            facilities to maintain top-notch safety and quality standards.
                        </p>

                        <h3 className="text-xl font-semibold text-[#2b3d67]">
                            Explore More
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Learn more about our services, compare treatment costs, and read success stories from thousands of happy patients.
                            Browse our helpful blogs to stay informed about common health issues and modern surgical solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <a href="/about-us" className="text-[#17b2aa] hover:underline">About Us</a>
                            <a href="/contact" className="text-[#17b2aa] hover:underline">Contact</a>
                            <a href="/services" className="text-[#17b2aa] hover:underline">Our Services</a>
                            <a href="/hospitals" className="text-[#17b2aa] hover:underline">Hospitals</a>
                            <a href="/doctors" className="text-[#17b2aa] hover:underline">Doctors</a>
                            <a href="/blogs" className="text-[#17b2aa] hover:underline">Health Blogs</a>
                            <a href="/piles-surgery" className="text-[#17b2aa] hover:underline">Piles Surgery</a>
                            <a href="/hernia-surgery" className="text-[#17b2aa] hover:underline">Hernia Surgery</a>
                            <a href="/gallbladder-removal" className="text-[#17b2aa] hover:underline">Gallbladder Removal</a>
                        </div>

                        <p className="text-gray-700 text-base leading-relaxed mt-6">
                            We are committed to making healthcare accessible and affordable for every patient. Whether you are looking for
                            trusted hospitals, experienced surgeons, or cost estimates for your treatment, we are here to help. Book your
                            <a href="/free-consultation" className="text-[#17b2aa] hover:underline"> free consultation</a> today and take
                            the first step towards a healthier, happier life.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-28 bg-[#011c2b] text-white px-4 py-2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10 w-40" />
                </div>
                <div className="flex items-center gap-4">
                    <p className="font-semibold hidden pr-5 md:block">Check out our app!</p>
                    <a href="#">
                        <img src={gpay} alt="Google Play" className="h-10" />
                    </a>
                    <a href="#">
                        <img src={appstore} alt="App Store" className="h-10" />
                    </a>
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
        </>
    );
};

export default ContactUs;
