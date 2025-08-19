import React from 'react'
import logo from "../assets/logo1.png"
import callimg from "../assets/callimg.svg"
import flight from "../assets/flight.svg"
import treated from "../assets/treated.svg"
import medical from "../assets/medical.svg"
import collage from "../assets/collage.jpg"
import screenshot from "../assets/Screenshot.png"
import laparoscopic from "../assets/laparoscopic.svg"
import cardiac from "../assets/cardiac.svg"
import ent from "../assets/ent.svg"
import costest from "../assets/costest.webp"
import clientimg from "../assets/clientimg.jpg"
import vector2 from "../assets/vector2.png"
import BariatricSurgery from "../assets/BariatricSurgery.jpg"
import CardiacSciences from "../assets/CardiacSciences.jpg"
import ENT from "../assets/ENT.jpg"
import GeneralandLaparoscopic from "../assets/GeneralandLaparoscopic.jpg"
import GeneralMedicine from "../assets/GeneralMedicine.jpg"
import HaematologyBMT from "../assets/Haematology&BMT.jpg"
import Hepatology from "../assets/Hepatology.jpg"
import InfectiousDisease from "../assets/InfectiousDisease.jpg"
import Infertility from "../assets/Infertility.jpg"
import NephrologyUrology from "../assets/NephrologyUrology.jpg"
const Home = () => {

    const testimonials = [
        {
            title: "Liver Transplant in India",
            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            description: "Life-saving liver transplant performed by expert Indian surgeons."
        },
        {
            title: "Bone Marrow Transplant in India",
            thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
            description: "Advanced bone marrow transplant with high success rate in India."
        },
        {
            title: "MAKO Robotic Hip Replacement",
            thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
            description: "Robotic technology ensures faster recovery and precise hip surgery."
        },
        {
            title: "Kidney Transplant Surgery",
            thumbnail: "https://img.youtube.com/vi/V-_O7nl0Ii0/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
            description: "Expert kidney transplant procedure with excellent patient outcomes."
        },
        {
            title: "MAKO Robotic Hip Replacement",
            thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
            description: "Innovative robotic hip replacement by top orthopedic surgeons."
        },
        {
            title: "Kidney Transplant Surgery",
            thumbnail: "https://img.youtube.com/vi/V-_O7nl0Ii0/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
            description: "Renowned hospitals offer safe and affordable kidney transplants."
        },
        {
            title: "MAKO Robotic Hip Replacement",
            thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
            description: "Experience pain-free recovery with robotic-assisted hip surgery."
        },
        {
            title: "Kidney Transplant Surgery",
            thumbnail: "https://img.youtube.com/vi/V-_O7nl0Ii0/hqdefault.jpg",
            url: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
            description: "Trusted kidney transplant specialists with global patient success."
        }
    ];


    return (
        <>
            <header className="w-full sticky bg-opacity-60 backdrop-blur-lg top-0 z-10 shadow-lg  bg-gray-100  text-white">
                <div className="w-full  text-[#2b3d67]  font-semibold text-sm py-1 px-4 flex justify-end gap-10 items-center">
                    {/* <p>Call us: +91-1234567890</p>
                    <p>Email: support@yourdomain.com</p> */}
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
            <div className='flex bg-[#e7f3f7] px-10 py-3'>
                <div className='flex py-16  flex-row  w-full'>
                    <div className="flex flex-col w-full md:w-6/12 px-4 py-2 ">

                        <div className=" ">
                            <h1 className="text-gray-900 text-4xl font-bold leading-tight">
                                Don't Suffer
                            </h1>
                            <h2 className="text-gray-800 text-3xl font-semibold">
                                Get the Best Treatment With
                            </h2>
                            <h2 className="text-blue-600 text-3xl font-bold">
                                Exceptional Love & Care
                            </h2>
                            <div className="w-28 h-1 bg-blue-600 drop-shadow-lg rounded mt-1"></div>
                        </div>

                        <div className="mt-10  p-2 rounded-xl ">
                            <div className="flex  divide-x divide-gray-300">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-gray-800">1000<span className="text-xl font-normal">+</span></h3>
                                    <p className="text-sm font-medium text-gray-600 mt-1">Happy Patients</p>
                                </div>
                                <div className="flex-1 px-2">
                                    <h3 className="text-3xl font-bold text-gray-800">50<span className="text-xl font-normal">+</span></h3>
                                    <p className="text-sm font-medium text-gray-600 mt-1">Diseases</p>
                                </div>
                                <div className="flex-1 px-2">
                                    <h3 className="text-3xl font-bold text-gray-800">100<span className="text-xl font-normal">%</span></h3>
                                    <p className="text-sm font-medium text-gray-600 mt-1">Satisfaction</p>
                                </div>
                            </div>
                            <p className=" text-base mt-10 font-semibold text-gray-800">
                                World's Most Trusted Medical Travel Assistance Platform
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="bg-[#2b3d67] hover:bg-[#1f2c4a] transition text-white px-6 py-1 rounded-lg font-medium shadow-md">
                                Learn More
                            </button>
                            <button className="border border-[#2b3d67] text-[#2b3d67] hover:bg-[#2b3d67] hover:text-white transition px-6 py-1.5 rounded-lg font-medium shadow-md">
                                Plan Your Treatment
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block w-full md:w-6/12 relative">
                        <img src={screenshot} alt="patient" className='w-full h-[400px] object-cover rounded-md shadow-md' />
                    </div>
                </div>
            </div>

            <div className='flex justify-center p-10   items-center w-full h-full'>
                <img src={collage} alt="Banner" className='w-full shadow-md rounded-md h-[400px] object-cover' />
            </div>

            <div className='flex p-12'>
                <div className='flex flex-col rounded-xl shadow-lg  bg-[#e7f3f7] justify-center w-full h-full px-10 py-5'>
                    <h2 className="text-center  text-3xl text-gray-600 font-bold mb-6   ">
                        How do we work?
                    </h2>
                    <div className='flex pt-5 gap-3'>
                        <div className="flex flex-col gap-10  w-full md:w-8/12 mx-auto  rounded-sm">
                            <h3 className='flex px-14  text-xl  font-bold text-gray-600'>
                                We understand that traveling to a foreign country for medical treatment can be overwhelming. That’s why we have a dedicated International Patients’ Desk to assist you at every step:

                            </h3>
                            <div className='grid grid-cols-2 px-14 pt-5 gap-16'>
                                <div className=" flex justify-center items-center gap-3 ">
                                    <img
                                        src={callimg}
                                        alt="Contact icon"
                                        className="w-16 h-16"
                                    />
                                    <p className="font-semibold  text-gray-700">
                                        Contact us, share your details and our team will get in touch with you.
                                    </p>
                                </div>
                                <div className=" flex justify-center items-center gap-3 ">
                                    <img
                                        src={medical}
                                        alt="Contact icon"
                                        className="w-16 h-16"
                                    />
                                    <p className="font-semibold text-gray-700">
                                        Receive medical opinion and cost estimate within 48 Hours
                                    </p>
                                </div>
                                <div className=" flex justify-center items-center gap-3 ">
                                    <img
                                        src={flight}
                                        alt="Contact icon"
                                        className="w-14 h-14"
                                    />
                                    <p className="font-semibold text-gray-700">
                                        Book flights and get received by our team at the airport
                                    </p>
                                </div>
                                <div className=" flex justify-center items-center gap-3 ">
                                    <img
                                        src={treated}
                                        alt="Contact icon"
                                        className="w-14 h-14"
                                    />
                                    <p className="font-semibold text-gray-700">
                                        Get treated and fly back. We stay in touch with you for follow ups
                                    </p>
                                </div>
                            </div>
                            <p className='px-12 font-semibold text-lg text-gray-700 pt-5'>That’s why we have a dedicated International Patients’ Desk to assist you at every step</p>



                        </div>
                        <div className="hidden md:block w-full md:w-4/12 relative">
                            <div className="sticky top-4">
                                <div className="flex shadow-md flex-col border self-start rounded-lg bg-[#2b3d67] text-white p-6">
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
                </div>
            </div>
            <h1 className='flex justify-center items-center text-2xl font-semibold'>Medical Treatement</h1>
            <div className='flex justify-center flex-row gap-3 items-center p-8'>

                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={cardiac}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
            </div>
            <div className='flex justify-center flex-row gap-3 items-center px-8'>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={cardiac}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-6 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>

                </div>
            </div>
            <div className='flex p-12'>
                <div className='flex flex-col rounded-xl shadow-lg  bg-[#e7f3f7] justify-center w-full h-full px-10 py-5'>
                    <h2 className="text-center  text-3xl text-gray-600 font-bold  mb-2  ">
                        Our Services Cover Every Need
                    </h2>
                    <h2 className="text-center  text-gray-600  mb-6   ">
                        We understand that traveling to a foreign country for medical treatment can be overwhelming
                    </h2>
                    <div className='flex pt-5 w-full gap-3'>
                        <div className=' w-5/12 '>
                            <img src={clientimg} alt="Client" className='w-full rounded-lg object-cover h-[27rem]  shadow-md' />
                        </div>
                        <div className='flex w-8/12 flex-row gap-3 '>
                            <div className="gap-3 flex flex-col w-full  relative">
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gap-3 flex flex-col w-full  relative">
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white  bg-opacity-80 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                                        <img src={costest} alt="Medical Opinion" className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 font-semibold">
                                            Medical Opinion and Cost Estimations
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Expert opinions and cost estimates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className='flex justify-center pt-4 items-center'>
                <h3 className='text-3xl font-bold text-gray-800'>Our Treatement Packages</h3>
            </div>
            <div className='flex flex-row justify-center gap-3 items-center px-8 py-8'>
                <div className="bg-white rounded-2xl shadow-lg w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={BariatricSurgery}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Bariatric Surgery</h3>

                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>

                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={CardiacSciences}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Cardiac Sciences</h3>

                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>

                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ENT}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">ENT</h3>

                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>

                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={GeneralandLaparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">General and Laparoscopic</h3>

                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={GeneralMedicine}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">General Medicine</h3>

                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center pb-10'>
                <button className="px-10 py-2 text font-bold text-blue-600 bg-blue-100 rounded-full shadow-sm hover:shadow-md hover:bg-blue-200 transition duration-300">
                    View More
                </button>
            </div>


            <div className='py-10 bg-gray-50'>
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-bold text-gray-900">
                        +100 Video Testimonials Available <br />
                        On Our Website <br />
                        <span className="text-[#2b3d67] font-normal">See Real Patient Stories!</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                    {testimonials.map((video, index) => (
                        <a
                            key={index}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
                        >
                            <div className="relative">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition">
                                    <svg
                                        className="w-12 h-12 text-red-500"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Title below the image */}
                            <div className="w-full text-sm font-medium px-3 py-2 text-center">
                                {video.title}
                                <p className="text-xs font-normal text-gray-600 mt-1">{video.description}</p>
                            </div>

                        </a>
                    ))}
                </div>
            </div>
            {/* Testimonial Section */}
            <section className="pb-16 pt-5 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Testimonials Grid */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Testimonial 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <p className="text-gray-700 italic">
                                "Couriero made my shipments hassle-free. Quick service and great support!"
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=1"
                                    alt="Client"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Amit Sharma</h4>
                                    <p className="text-sm text-gray-500">Business Owner</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <p className="text-gray-700 italic">
                                "The best courier aggregator. I saved money and time on every delivery."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=2"
                                    alt="Client"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Priya Verma</h4>
                                    <p className="text-sm text-gray-500">E-commerce Seller</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <p className="text-gray-700 italic">
                                "Very reliable and easy-to-use platform. Highly Highly recommended!"
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=3"
                                    alt="Client"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Rahul Mehta</h4>
                                    <p className="text-sm text-gray-500">Retailer</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                            <p className="text-gray-700 italic">
                                "Customer support was amazing. My queries were solved instantly."
                            </p>
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=4"
                                    alt="Client"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Neha Kapoor</h4>
                                    <p className="text-sm text-gray-500">Startup Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='flex flex-row justify-center gap-3 items-center px-8 pb-8'>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={HaematologyBMT}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Haematology & BMT</h3>
                   
                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={Hepatology}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Hepatology</h3>
                   
                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={InfectiousDisease}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Infectious Disease</h3>
                   
                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={Infertility}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Infertility</h3>
                   
                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={NephrologyUrology}
                        alt="Bariatric Surgery"
                        className="mx-auto rounded-md mb-4 w-72 h-36"
                    />
                    <h3 className="text-lg font-bold text-[#2b3d67]">Nephrology & Urology</h3>
                   
                    <p className="mt-4 text-sm text-gray-600 font-semibold">
                        Packages Starting from{" "}
                        <span className="block text-lg font-bold">$1500</span>
                    </p>
                    <div className="my-4">
                        <button className="px-6 py-2 text-sm font-bold text-teal-600 bg-teal-100 rounded-full shadow-sm hover:shadow-md hover:bg-teal-200 transition duration-300">
                            Talk to Expert
                        </button>
                    </div>
                </div>
            </div> */}

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

export default Home;
