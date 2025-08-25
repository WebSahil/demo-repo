import logo from "../assets/logo1.png"
import blkmax from '../assets/blkmax.jpg'
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import fortis from '../assets/fortis.webp'
import max from '../assets/max.webp'
import apollo from '../assets/Apollo.webp'
import natarajan from '../assets/natarajan.webp'
import apollobanner from '../assets/apollobanner.avif'
import pradeep from '../assets/pradeep.webp'
import suraj from '../assets/surag.webp'
import { Link } from "react-scroll";

function HospitalData() {

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
                <div className="flex w-8/12 flex-col scroll-smooth">
                    <div className="w-full px-6 py-6">
                        {/* Title */}
                        <div className="border-b border-gray-300 pb-4 mb-6">
                            <h1 className="text-3xl font-bold text-[#2b3d67]">Apollo Hospitals, New Delhi</h1>
                            <p className="text-gray-600 mt-2 text-sm">
                                ⭐ 4.8/5 • Multi-speciality • Established in 1983
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
                            <img
                                src={apollobanner}
                                alt="Hospital Front"
                                className="w-full h-64 object-fill rounded-sm shadow-md"
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


                        {/* Facilities */}
                        <section id="facilities" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-5">Facilities</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">🚑</span>
                                    <p className="font-semibold">24/7 Emergency & Ambulance Services</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">🌍</span>
                                    <p className="font-semibold">International Patient Lounge & Translators</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">✈️</span>
                                    <p className="font-semibold">Airport Pickup & Accommodation Assistance</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">💊</span>
                                    <p className="font-semibold">Pharmacy & 24/7 Medical Store</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">☕</span>
                                    <p className="font-semibold">Cafeteria & Food Court</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">📶</span>
                                    <p className="font-semibold">WiFi-enabled Private Rooms</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">🧘</span>
                                    <p className="font-semibold">Wellness, Yoga & Meditation Center</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">🅿️</span>
                                    <p className="font-semibold">Spacious Parking Area</p>
                                </div>

                                <div className="flex items-center gap-3 bg-white shadow-sm p-3 rounded-md">
                                    <span className="text-xl">👩‍⚕️</span>
                                    <p className="font-semibold">Specialized Nursing & Care Units</p>
                                </div>
                            </div>
                        </section>


                        {/* Reviews */}
                        <section id="reviews" className="mb-10">
                            <h2 className="text-2xl font-semibold text-[#2b3d67] mb-3">Patient Reviews</h2>
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
                                        <h2 className="text-base ">Mitral valve Replacement Surgery in India</h2>
                                        <p className="text-[0.7rem] text-gray-700">
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
                                        <h2 className="text-base">Successful Bypass Surgery in India</h2>
                                        <p className="text-[0.7rem] text-gray-700">
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
                                        <h2 className="text-base">World-Class Care & Facilities</h2>
                                        <p className="text-[0.7rem] text-gray-700">
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
                                        <h2 className="text-base">Exceptional Treatment & Support</h2>
                                        <p className="text-[0.7rem] text-gray-700">
                                            “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                        </p>
                                        <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
                                    </div>
                                </div>
                            </div>
                            {/* Video Testimonials */}
                            <section id="video-testimonials" className="mb-12">
                                <h2 className="text-2xl font-semibold text-[#2b3d67] my-6">Video Testimonials</h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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


                        </section>
                        <section id="reviews" className="mb-10">


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
            <section className="my-12">
                <h2 className="text-3xl font-bold text-center text-[#2b3d67] mb-8 ">
                    Suggested Hospitals
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 max-w-6xl mx-auto">
                    {/* Hospital Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                        <img
                            src={apollo}
                            alt="Apollo Hospital"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg text-gray-800">Apollo Hospital</h3>
                            <p className="text-sm text-gray-600 mt-1">Chennai, India</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Specialties: Cardiology, Oncology, Neurology
                            </p>

                            <div className="mt-auto flex gap-3">
                                <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                                    View Details
                                </button>
                                <button className="mt-4 border border-[#2b3d67] text-[#2b3d67] px-3 py-1.5 rounded-md text-sm hover:bg-[#2b3d67] hover:text-white transition">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hospital Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                        <img
                            src={fortis}
                            alt="Fortis Hospital"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg text-gray-800">Fortis Hospital</h3>
                            <p className="text-sm text-gray-600 mt-1">Delhi, India</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Specialties: Orthopedics, Pediatrics, ENT
                            </p>

                            <div className="mt-auto flex gap-3">
                                <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                                    View Details
                                </button>
                                <button className="mt-4 border border-[#2b3d67] text-[#2b3d67] px-3 py-1.5 rounded-md text-sm hover:bg-[#2b3d67] hover:text-white transition">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hospital Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                        <img
                            src={max}
                            alt="Max Healthcare"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg text-gray-800">Max Healthcare</h3>
                            <p className="text-sm text-gray-600 mt-1">Mumbai, India</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Specialties: Dermatology, Urology, General Surgery
                            </p>

                            <div className="mt-auto flex gap-3">
                                <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                                    View Details
                                </button>
                                <button className="mt-4 border border-[#2b3d67] text-[#2b3d67] px-3 py-1.5 rounded-md text-sm hover:bg-[#2b3d67] hover:text-white transition">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hospital Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                        <img
                            src={apollo}
                            alt="Apollo Hospital"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg text-gray-800">Apollo Hospital</h3>
                            <p className="text-sm text-gray-600 mt-1">Chennai, India</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Specialties: Cardiology, Oncology, Neurology
                            </p>

                            <div className="mt-auto flex gap-3">
                                <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                                    View Details
                                </button>
                                <button className="mt-4 border border-[#2b3d67] text-[#2b3d67] px-3 py-1.5 rounded-md text-sm hover:bg-[#2b3d67] hover:text-white transition">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hospital Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
                        <img
                            src={fortis}
                            alt="Fortis Hospital"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-bold text-lg text-gray-800">Fortis Hospital</h3>
                            <p className="text-sm text-gray-600 mt-1">Delhi, India</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Specialties: Orthopedics, Pediatrics, ENT
                            </p>

                            <div className="mt-auto flex gap-3">
                                <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                                    View Details
                                </button>
                                <button className="mt-4 border border-[#2b3d67] text-[#2b3d67] px-3 py-1.5 rounded-md text-sm hover:bg-[#2b3d67] hover:text-white transition">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full mt-8 max-w-7xl mx-auto mb-10 bg-[#f9f9f9] p-6 rounded-sm">
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