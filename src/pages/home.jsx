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
const Home = () => {


    return (
        <>
            <header className="w-full sticky top-0 z-10 shadow-lg  bg-gray-100  text-white">
                <div className="w-full  text-[#2b3d67] bg-gray-100 font-semibold text-sm py-1.5 px-4 flex justify-end gap-10 items-center">
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


                <div className="bg-gray-100 w-full">
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

                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={cardiac}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
            </div>
            <div className='flex justify-center flex-row gap-3 items-center px-8'>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={cardiac}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={laparoscopic}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
                </div>
                <div className="bg-white flex flex-col rounded-2xl shadow-lg p-8 w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={ent}
                        alt="Bariatric Surgery"
                        className="mx-auto mb-4 h-16 w-16"
                    />
                    <h3 className="font-semibold text-gray-900">Bariatric Surgery</h3>
                    <p className="mt-1 text-sm text-gray-400  font-semibold">
                        Advanced cancer treatments with proven results.
                    </p>
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
            <div className='flex p-12'>
                <div className='flex flex-col rounded-xl shadow-lg  bg-[#e7f3f7] justify-center w-full h-full px-10 py-5'>
                    <h2 className="text-center  text-3xl text-gray-600 font-bold  mb-2  ">
                        Our Services Cover Every Need
                    </h2>
                    <h2 className="text-center  text-gray-600  mb-6   ">
                        We understand that traveling to a foreign country for medical treatment can be overwhelming
                    </h2>
                    <div className='flex pt-5 w-full gap-3'>
                       <div className='grid grid-cols-2 gap-1 w-5/12 '>
                        <img src={clientimg} alt="Client" className='w-52 h-36 rounded-lg object-cover  shadow-md' />
                        <img src={clientimg} alt="Client" className='w-52 h-36 rounded-lg object-cover  shadow-md' />
                        <img src={clientimg} alt="Client" className='w-52 h-36 rounded-lg object-cover  shadow-md' />
                        <img src={clientimg} alt="Client" className='w-52 h-36 rounded-lg object-cover  shadow-md' />
                        <img src={clientimg} alt="Client" className='w-52 h-36 rounded-lg object-cover  shadow-md' />
                        <img src={clientimg} alt="Client" className='w-52 h-36 rounded-lg object-cover  shadow-md' />
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
