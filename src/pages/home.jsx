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
import BariatricSurgery from "../assets/BariatricSurgery.jpg"
import CardiacSciences from "../assets/CardiacSciences.jpg"
import ENT from "../assets/ENT.jpg"
import GeneralandLaparoscopic from "../assets/GeneralandLaparoscopic.jpg"
import GeneralMedicine from "../assets/GeneralMedicine.jpg"
import blkmax from '../assets/blkmax.jpg'
import fortis from '../assets/fortis.webp'
import natarajan from '../assets/natarajan.webp'
import pradeep from '../assets/pradeep.webp'
import suraj from '../assets/surag.webp'
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import mexico1 from '../assets/mexico1.webp'
import tajmahal from '../assets/taj-mahal.webp'
import { FaStar, FaRegStar, FaLock } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiScalpel } from "react-icons/gi";
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import ayurveda1 from '../assets/ayurveda1.jpeg'
import ayurveda2 from '../assets/ayurveda2.jpeg'
import ayurveda3 from '../assets/ayurveda3.jpeg'
import ayurveda4 from '../assets/ayurveda4.jpeg'
const Home = () => {

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

    const blogs = [
        {
            title: "10 Tips for a Healthy Heart",
            excerpt:
                "Learn how to maintain your heart health with simple lifestyle changes, diet tips, and daily habits.",
            image: blog1,
            category: "Health Tips",
            author: "Dr. A. Sharma",
            date: "Aug 18, 2025",
        },
        {
            title: "The Future of Robotic Surgery",
            excerpt:
                "Explore how robotic-assisted surgeries are transforming the medical field and improving patient outcomes.",
            image: blog2,
            category: "Technology",
            author: "Dr. K. Mehta",
            date: "Aug 10, 2025",
        },
        {
            title: "Managing Diabetes with Lifestyle",
            excerpt:
                "Discover how diet, exercise, and stress management can help control diabetes effectively.",
            image: blog3,
            category: "Wellness",
            author: "Dr. P. Verma",
            date: "Aug 5, 2025",
        },
        {
            title: "Managing Diabetes with Lifestyle",
            excerpt:
                "Discover how diet, exercise, and stress management can help control diabetes effectively.",
            image: blog3,
            category: "Wellness",
            author: "Dr. P. Verma",
            date: "Aug 5, 2025",
        },
        {
            title: "10 Tips for a Healthy Heart",
            excerpt:
                "Learn how to maintain your heart health with simple lifestyle changes, diet tips, and daily habits.",
            image: blog1,
            category: "Health Tips",
            author: "Dr. A. Sharma",
            date: "Aug 18, 2025",
        },
        {
            title: "The Future of Robotic Surgery",
            excerpt:
                "Explore how robotic-assisted surgeries are transforming the medical field and improving patient outcomes.",
            image: blog2,
            category: "Technology",
            author: "Dr. K. Mehta",
            date: "Aug 10, 2025",
        }
    ];


    const hospitals = [
        {
            name: "Fortis Hospital, Noida",
            city: "NCR",
            image: blkmax,
        },
        {
            name: "Fortis Escorts Heart Institute",
            city: "New Delhi",
            image: fortis,
        },
        {
            name: "Fortis Vasant Kunj",
            city: "New Delhi",
            image: blkmax,
        },
        {
            name: "Fortis Memorial Research Institute",
            city: "Gurgaon",
            image: fortis,
        },
        {
            name: "Fortis Memorial Research Institute",
            city: "Gurgaon",
            image: fortis,
        },
        {
            name: "Fortis Memorial Research Institute",
            city: "Gurgaon",
            image: fortis,
        },
        {
            name: "Fortis Memorial Research Institute",
            city: "Gurgaon",
            image: fortis,
        },
    ];

    const doctors = [
        {
            name: "Dr. Pradeep Chowbey",
            designation: "Chairman",
            hospital: "Max Healthcare Saket ",
            experience: "45+ years",
            surgeries: "85000+",
            image: pradeep
        },
        {
            name: "Prof. Dr. S. Natarajan",
            designation: "Vitreoretinal Surgeon",
            hospital: "Dr Agarwals Eye Hospital",
            experience: "36 years",
            surgeries: "60000+",
            image: natarajan
        },
        {
            name: "Dr. Suraj Munjal",
            designation: "Medical Director",
            hospital: "The Sight Avenue",
            experience: "17 years",
            surgeries: "50000+",
            image: suraj
        },
        {
            name: "Dr. Suraj Munjal",
            designation: "Medical Director",
            hospital: "The Sight Avenue",
            experience: "17 years",
            surgeries: "50000+",
            image: suraj
        },
        {
            name: "Dr. Suraj Munjal",
            designation: "Medical Director",
            hospital: "The Sight Avenue",
            experience: "17 years",
            surgeries: "50000+",
            image: suraj
        },
        {
            name: "Dr. Suraj Munjal",
            designation: "Medical Director",
            hospital: "The Sight Avenue",
            experience: "17 years",
            surgeries: "50000+",
            image: suraj
        },
    ];

    const specialties = [
        {
            name: "Orthopedics",
            icon: laparoscopic,
            topDoctorsLink: "/doctors/orthopedics",
            topHospitalsLink: "/hospitals/orthopedics",
        },
        {
            name: "Oncology",
            icon: cardiac,
            topDoctorsLink: "/doctors/oncology",
            topHospitalsLink: "/hospitals/oncology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Orthopedics",
            icon: laparoscopic,
            topDoctorsLink: "/doctors/orthopedics",
            topHospitalsLink: "/hospitals/orthopedics",
        },
        {
            name: "Oncology",
            icon: cardiac,
            topDoctorsLink: "/doctors/oncology",
            topHospitalsLink: "/hospitals/oncology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        },
        {
            name: "Cardiology",
            icon: ent,
            topDoctorsLink: "/doctors/cardiology",
            topHospitalsLink: "/hospitals/cardiology",
        }
    ];


    return (
        <>

            <div className="flex px-10 py-3 bg-[#2b3d67] relative">

                <div className="flex relative py-16 flex-row w-full">

                    <div className="flex flex-col w-full md:w-7/12 px-4 py-2 text-white">
                        <div>
                            <h1 className="text-5xl font-bold leading-tight">
                                Don't Suffer
                            </h1>
                            <h2 className="text-[2.6rem] leading-tight font-semibold">
                                Get the Best Treatment With
                            </h2>
                            <h2 className="text-yellow-300 text-[2.6rem] leading-tight font-bold">
                                Exceptional Love & Care
                            </h2>
                            <div className="w-28 h-1 bg-yellow-300 drop-shadow-md rounded mt-1"></div>
                        </div>

                        {/* STATS */}
                        <div className="mt-5 p-2 rounded-xl">
                            <div className="flex gap-14 divide-x divide-gray-400/50">
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-bold text-white">
                                        1000<span className="text-xl font-normal">+</span>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-200 mt-1">
                                        Happy Patients
                                    </p>
                                </div>
                                <div className="flex flex-col pl-12">
                                    <h3 className="text-3xl font-bold text-white">
                                        50<span className="text-xl font-normal">+</span>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-200 mt-1">
                                        Diseases
                                    </p>
                                </div>
                                <div className="flex flex-col pl-12">
                                    <h3 className="text-3xl font-bold text-white">
                                        100<span className="text-xl font-normal">%</span>
                                    </h3>
                                    <p className="text-sm font-medium text-gray-200 mt-1">
                                        Satisfaction
                                    </p>
                                </div>
                            </div>
                            <p className="text-base mt-6 font-semibold text-gray-100">
                                World's Most Trusted Medical Travel Assistance Platform
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <button className="bg-white text-[#2b3d67] hover:bg-gray-200 transition px-6 py-1 rounded-lg font-medium shadow-md">
                                Learn More
                            </button>
                            <button className="border border-white text-white hover:bg-white hover:text-[#2b3d67] transition px-6 py-1.5 rounded-lg font-medium shadow-md">
                                Plan Your Treatment
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full pt-6 md:w-6/12">
                        <img
                            src={screenshot}
                            alt="patient"
                            className="w-full h-[350px] object-cover rounded-md shadow-md"
                        />
                    </div>
                </div>
            </div>


            <section className="text-center py-14">
                <h2 className="text-5xl pb-4 font-bold text-gray-900">
                    <span className='text-[2rem] font-normal '> Connect With </span> Best Medical <br />

                    <span className="text-[#2b3d67] text-5xl font-bold"> Professionals & Hospitals</span>
                </h2>

                <div className="mt-8 flex justify-center gap-12 flex-wrap">
                    <div className="flex flex-col items-center">
                        <img
                            src={tajmahal}
                            alt="India"
                            className="w-64 rounded-lg shadow-md object-contain"
                        />
                        <p className="mt-2 text-2xl  font-semibold">India</p>
                    </div>

                    {/* Mexico */}
                    <div className="flex flex-col items-center">
                        <img
                            src={mexico1}
                            alt="Mexico"
                            className="text-2xl w-64 object-contain rounded-lg  font-semibold"
                        />
                        <p className="mt-2  font-medium">Mexico</p>
                    </div>
                </div>
            </section>


            <div className='flex flex-col   px-8'>
                <div className='p-10 rounded-xl bg-[#e7f3f7]'>
                    <h2 className="text-5xl font-bold text-gray-900">
                        <span className='text-[2rem] font-normal '> Solution For </span> All <br />

                        <span className="text-[#2b3d67] text-5xl font-bold"> Health Concern</span>
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8">
                        {specialties.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-white p-4 rounded-lg  hover:shadow-sm transition"
                            >
                                {/* Icon */}
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="h-12 w-12 object-contain"
                                />

                                {/* Text */}
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg text-[#2b3d67]">{item.name}</h3>
                                    <div className="flex flex-col  text-gray-600">
                                        <a href={item.topDoctorsLink} className="text-sm">
                                            Top Doctors
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Collage */}
            <div className='flex justify-center p-10   items-center w-full h-full'>
                <img src={collage} alt="Banner" className='w-full shadow-md rounded-md h-[400px] object-cover' />
            </div>
            <div className='flex justify-end items-end pt-20  pr-10'>
                <h2 className="text-5xl leading-10 text-right font-bold text-gray-900">
                    NGO Sponsored Packages <br />
                    <span className="text-[#2b3d67]  text-[1.4rem] font-normal"><span className='font-bold text-[1.7rem]'>Lowest Price Assurance</span> without compromising Treatment Quality</span>
                </h2>
            </div>
            <div className='flex flex-row justify-center gap-3 items-center px-8 py-8'>
                <div className="bg-white rounded-md shadow-md w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
                <div className="bg-white rounded-md shadow-md  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
                <div className="bg-white rounded-md shadow-md  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
                <div className="bg-white rounded-md shadow-md  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
                <div className="bg-white rounded-md shadow-md  w-72 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
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
                <button className="px-10 py-2  font-bold text-[#2b3d67] bg-blue-100 rounded-full shadow-sm hover:shadow-md hover:bg-blue-200 transition duration-300">
                    View More
                </button>
            </div>

            {/* Wellness */}

            {/* Ayurveda Wellness Section */}
            <section className="py-12 mb-10 bg-[#e7f3f7] rounded-lg shadow">
                <div className="max-w-7xl mx-auto px-12 text-center">
                    <h2 className="text-2xl  text-[#2b3d67] font-semibold mb-8">
                        <span className='text-5xl font-bold'>Wellness </span> through <br /><span className='text-5xl font-bold'>
                            Ayurveda</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Card 1 */}
                        <div className="bg-white rounded-md shadow overflow-hidden">
                            <img
                                src={ayurveda1}
                                alt="Panchakarma Therapy"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-[#2b3d67] mb-2">
                                    Panchakarma Therapy
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    A detoxifying therapy that eliminates toxins, strengthens immunity, and restores body balance.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-md shadow overflow-hidden">
                            <img
                                src={ayurveda2}
                                alt="Abhyanga Massage"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-[#2b3d67] mb-2">
                                    Abhyanga Massage
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Warm herbal oil massage that improves circulation, reduces stress, and nourishes the skin.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-md shadow overflow-hidden">
                            <img
                                src={ayurveda3}
                                alt="Shirodhara"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-[#2b3d67] mb-2">
                                    Shirodhara
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Calming therapy where warm oil flows on the forehead, helping with anxiety, insomnia, and migraines.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-md shadow overflow-hidden">
                            <img
                                src={ayurveda4}
                                alt="Herbal Steam Therapy"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-[#2b3d67] mb-2">
                                    Herbal Steam Therapy
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    A herbal steam bath that opens pores, removes toxins, and refreshes your body naturally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* How do we work */}
            <div className='flex px-12 py-5'>
                <div className='flex flex-col rounded-xl shadow-md  bg-[#e7f3f7] justify-center w-full h-full px-10 py-5'>
                    <div className='flex justify-center items-center pt-5'>
                        <h2 className="text-5xl pb-9 leading-10 text-center font-bold text-gray-900">
                            How to Start ?<br />
                            <span className="text-[2.2rem] leading-8 text-center font-normal text-gray-900">We are Here to Help you </span>
                        </h2>
                    </div>
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
                                        of JD Max.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 bg-gray-50'>
                <div className="text-center mb-10 mt-7">
                    <h2 className="text-5xl font-bold text-gray-900">
                        100+ Testimonials Available <br />

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
                            className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow block"
                        >
                            <div className="relative">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-48 object-cover"
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
                            <div className="w-full text-lg font-semibold px-3 py-2 text-center">
                                {video.title}
                            </div>

                        </a>
                    ))}
                </div>
            </div>

            <section className="pb-10 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {/* Testimonial 1 */}
                        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="w-5/12 p-4">
                                <img
                                    src={testimonial1}
                                    alt="testimonial1"
                                    className="w-full h-[7.9rem] object-cover rounded-sm"
                                />
                            </div>
                            <div className="w-7/12 gap-2   flex flex-col justify-center">
                                <h2 className="text-lg font-semibold ">Mitral valve Replacement Surgery in India</h2>
                                <p className="text-sm text-gray-700">
                                    “The doctors and staff were very professional. My father underwent bypass surgery and the recovery was smooth."
                                </p>
                                <h3 className="text-sm flex   font-semibold text-[#2b3d67] ">Rahul, India</h3>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="w-5/12 p-4">
                                <img
                                    src={testimonial2}
                                    alt="testimonial2"
                                    className="w-full h-[7.9rem] object-cover rounded-sm"
                                />
                            </div>
                            <div className="w-7/12 gap-2 flex flex-col justify-center">
                                <h2 className="text-lg font-semibold">Successful Bypass Surgery in India</h2>
                                <p className="text-sm text-gray-700">
                                    “Apollo made my medical journey stress-free. They handled everything from visa to treatment.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Carlos, Mexico</h3>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="w-5/12 p-4">
                                <img
                                    src={testimonial3}
                                    alt="testimonial3"
                                    className="w-full h-[7.9rem] object-cover rounded-sm"
                                />
                            </div>
                            <div className="w-7/12 gap-2 flex flex-col justify-center">
                                <h2 className="text-lg font-semibold">World-Class Care & Facilities</h2>
                                <p className="text-sm text-gray-700">
                                    “The hospital provided world-class care and advanced facilities. I felt at ease during my entire stay.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Sophia, UK</h3>
                            </div>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="w-5/12 p-4">
                                <img
                                    src={testimonial4}
                                    alt="testimonial4"
                                    className="w-full h-[7.9rem] object-cover rounded-sm"
                                />
                            </div>
                            <div className="w-7/12 gap-2 flex flex-col justify-center">
                                <h2 className="text-lg font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-sm text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Hospitals Section */}
            <section className="py-9  ">

                <div className='flex justify-start items-center pt-5'>
                    <h2 className="text-[2rem] pb-9 leading-10  text-left pl-7 font-normal text-gray-900">
                        Connect with<br />
                        <span className="text-5xl  text-center font-bold text-gray-900">Best Hospitals</span>
                    </h2>
                </div>

                <div className="flex space-x-2 pb-10 overflow-x-scroll px-6 scrollbar-hide">
                    {hospitals.map((hospital, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <img
                                src={hospital.image}
                                alt={hospital.name}
                                className="w-full h-40 object-cover rounded-t-xl duration-300"
                            />
                            <div className="p-4 text-left">
                                <h3 className="text-md font-bold text-gray-900 truncate">
                                    {hospital.name}
                                </h3>
                                <p className="text-sm text-gray-500">{hospital.city}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>



            {/* Our Services Cover Every Need */}
            <div className='flex px-12 pb-8'>
                <div className='flex flex-col rounded-xl shadow-md  bg-[#e7f3f7] justify-center w-full h-full px-10 py-5'>
                    <h2 className="text-center  text-4xl mt-8 font-bold text-gray-900  mb-2  ">
                        We are with you for every need
                    </h2>
                    <h2 className="text-center  text-lg font-semibold pb-8   ">
                        Far from Home we are here with you as a second Family
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


            <section className="py-12 ">

                <div className='flex justify-start items-center'>
                    <h2 className="text-[2rem] pb-7 leading-10  text-left pl-7 font-normal text-gray-900">
                        Connect with<br />
                        <span className="text-5xl  text-center font-bold text-gray-900">Medical Professionals</span>
                    </h2>
                </div>


                <div className="flex space-x-3 overflow-x-auto p-6 scrollbar-hide ">
                    {doctors.map((doc, i) => (
                        <div
                            key={i}
                            className="min-w-[300px]  rounded-xl shadow-md  overflow-hidden cursor-pointer"
                        >

                            <div className="relative">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-44 object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="p-5 text-left">
                                <h3 className="font-bold text-gray-900 text-lg truncate">
                                    {doc.name}
                                </h3>
                                <p className="text-[12px] text-gray-700 truncate">{doc.designation}</p>

                                {/* Hospital */}
                                <p className="mt-2 text-sm text-gray-700">
                                    Consults at: <span className="font-medium">{doc.hospital}</span>
                                </p>

                                {/* Experience & Surgeries */}
                                <div className="mt-3 space-y-2 text-sm text-gray-600">
                                    <p className="flex items-center gap-2">
                                        <MdWork className="text-gray-500" />
                                        Experience: {doc.experience}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <GiScalpel className="text-gray-500" />
                                        Surgeries: {doc.surgeries}
                                    </p>
                                </div>

                                <p className="w-full mt-1 flex    text-[#2b3d67] font-semibold py-2">
                                    Request Appointment →
                                </p>

                                {/* Security Note */}
                                <div className="mt-3 flex items-center text-xs text-gray-500">
                                    <FaLock className="mr-1" />
                                    Your Health data is protected with us
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div className="flex flex-col bg-gradient-to-r from-10% to-100% from-blue-200 to-[#e7f3f7] border   shadow-lg   ">
                <div className="flex justify-center py-11 gap-5 flex-col items-center">
                    <h3 className="flex lg:text-4xl md:text-4xl text-xl  font-bold">Get Consultation  for Free</h3>
                    <h3 className="flex text-center font-semibold  text-sm">Get the Best Treatment With Exceptional Love & Care
                    </h3>
                    <div className="justify-center mt-2 flex items-center">
                        <button className=" text-[#2b3d67] border-[#2b3d67] border text-sm  shadow-md bg-white hover:shadow-lg font-semibold py-3 px-8 rounded-full">Connect to know more</button>
                    </div>
                </div>
            </div>

            <section className="py-12 bg-gray-50">

                <div className='flex justify-center items-center pt-5'>
                    <h2 className="text-[2rem] pb-9   text-center pl-7 font-semibold text-gray-900">
                        Stay Tuned with us<br />
                        <span className="text-5xl  text-center font-bold text-gray-900"> Get  Medical Information by Professionals</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="flex space-x-3 overflow-x-auto p-6 scrollbar-hide">
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="min-w-[300px]  rounded-xl shadow-md  overflow-hidden cursor-pointer"
                            >

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-52 object-cover "
                                />

                                {/* Blog Content */}
                                <div className="p-5 text-left">
                                    {/* Category */}
                                    <span className="inline-block bg-teal-100 text-teal-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                        {blog.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
                                        {blog.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    {/* Author & Date */}
                                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                                        <span>✍️ {blog.author}</span>
                                        <span>{blog.date}</span>
                                    </div>

                                    {/* Read More */}
                                    <a
                                        href="#"
                                        className="block mt-4 text-teal-600 font-semibold text-sm hover:underline"
                                    >
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
