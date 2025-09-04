import { useState, useEffect } from "react";
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import natarajan from '../assets/natarajan.webp'
import pradeep from '../assets/pradeep.webp'
import suraj from '../assets/surag.webp'


function BlogPage() {


    const doctors = [
        {
            name: "Dr. Meera Kapoor",
            specialty: "Cardiologist",
            exp: "15+ yrs exp.",
            img: natarajan,
        },
        {
            name: "Dr. Arjun Sharma",
            specialty: "Orthopedic Surgeon",
            exp: "12+ yrs exp.",
            img: pradeep,
        },
        {
            name: "Dr. Neha Verma",
            specialty: "Dermatologist",
            exp: "10+ yrs exp.",
            img: suraj,
        },
        {
            name: "Dr. Rakesh Nair",
            specialty: "Neurologist",
            exp: "18+ yrs exp.",
            img: pradeep,
        },
        {
            name: "Dr. Priya Singh",
            specialty: "Gynecologist",
            exp: "14+ yrs exp.",
            img: natarajan,
        },
        {
            name: "Dr. Sanjay Gupta",
            specialty: "Oncologist",
            exp: "20+ yrs exp.",
            img: suraj,
        },
    ];

    const blogs = [
        {
            id: 'importance-of-regular-health-checkups',
            imageUrl: blog1,
            title: "Why Regular Health Checkups Are Essential for a Healthy Life",
            content:
                'Routine medical checkups help in early detection of diseases, prevention, and maintaining overall well-being.',
            date: 'Oct 14, 2024',
            author: 'Dr. Anjali Mehta',
        },
        {
            id: 'balanced-diet-for-strong-immunity',
            imageUrl: blog2,
            title: "Balanced Diet: The Key to Strong Immunity and Long Life",
            content:
                'A healthy diet rich in vitamins, proteins, and minerals is crucial to boost immunity and fight infections naturally.',
            date: 'Oct 12, 2024',
            author: 'Dr. Pradeep Sharma',
        },
        {
            id: 'top-10-common-health-myths-busted',
            imageUrl: blog3,
            title: "Top 10 Common Health Myths You Should Stop Believing",
            content:
                'From “cold weather causes colds” to “detox diets work,” we debunk the most common medical myths.',
            date: 'Oct 9, 2024',
            author: 'Dr. Suraj Patel',
        },
        {
            id: 'managing-diabetes-effectively',
            imageUrl: blog2,
            title: "How to Manage Diabetes Effectively: Tips and Lifestyle Changes",
            content:
                'Simple lifestyle changes, balanced meals, and regular monitoring can help manage diabetes and improve quality of life.',
            date: 'Oct 8, 2024',
            author: 'Dr. Sahil Chhabra',
        },
        {
            id: 'mental-health-awareness',
            imageUrl: blog2,
            title: "Mental Health Awareness: Breaking the Stigma Around Therapy",
            content:
                'It is important to address mental health issues openly and seek timely counseling for emotional well-being.',
            date: 'Oct 6, 2024',
            author: 'Dr. Neha Kapoor',
        },
        {
            id: 'healthy-heart-tips',
            imageUrl: blog2,
            title: "10 Simple Tips for a Healthy Heart",
            content:
                'From regular exercise to reducing salt intake, these tips can significantly lower the risk of heart disease.',
            date: 'Oct 5, 2024',
            author: 'Dr. Anjali Jain',
        },
        {
            id: 'importance-of-vaccination',
            imageUrl: blog2,
            title: "Importance of Vaccination in Preventing Diseases",
            content:
                'Vaccines are one of the most effective ways to prevent infectious diseases and protect community health.',
            date: 'Oct 4, 2024',
            author: 'Dr. Samkit Jain',
        },
        {
            id: 'sleep-and-health',
            imageUrl: blog3,
            title: "The Science of Sleep: Why Good Sleep is Crucial for Health",
            content:
                'Sleep affects memory, mood, and physical health. Poor sleep can lead to obesity, diabetes, and heart disease.',
            date: 'Oct 2, 2024',
            author: 'Dr. Vinod Prajapat',
        },
        {
            id: 'fitness-for-working-professionals',
            imageUrl: blog3,
            title: "Fitness Tips for Working Professionals with Busy Schedules",
            content:
                'Even with a hectic job, short daily exercises and mindful eating can keep professionals healthy and energetic.',
            date: 'Oct 1, 2024',
            author: 'Dr. Anjali Daga',
        },
    ];



    return (<>
        <div className='flex flex-col  pb-2'>
            {/* Hero Section */}
            <section className="relative pt-6 w-full bg-[#e7f3f7]">
                <div className="max-w-7xl py-3 mx-auto px-6  text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2b3d67] leading-snug">
                        Welcome to Our <span className="text-[#17b2aa]">Knowledge Hub</span>
                    </h1>
                </div>
            </section>

            <section className="sticky pb-6 top-32 z-30 bg-[#e7f3f7] py-2 shadow-md">
                <div className="max-w-7xl justify-center mx-auto px-6 flex flex-col md:flex-row items-center gap-4 ">

                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {["Wellness", "Ayurveda", "Patient Stories", "Nutrition",].map((cat, i) => (
                            <span
                                key={i}
                                className="px-6 py-1.5 bg-white text-sm font-semibold rounded-sm border border-[#17b2aa] text-[#17b2aa] shadow-md hover:bg-[#17b2aa] hover:text-white transition"
                            >
                                {cat}
                            </span>
                        ))}
                        <button className="px-6 py-1.5 bg-[#17b2aa] text-white text-sm font-semibold rounded-sm shadow-md hover:bg-[#13938d] transition">
                            View All
                        </button>

                    </div>

                    <div className="w-full md:w-1/3 flex items-center bg-white border border-gray-300 rounded-sm shadow-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="flex-1 px-4 py-[6px] text-gray-700 focus:outline-none"
                        />
                        <button className="bg-[#17b2aa] text-white px-6 py-[6px] font-semibold">
                            Search
                        </button>
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-6 pb-12 pt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-[#e7f3f7] rounded-2xl shadow-md overflow-hidden">

                    <img
                        src={blog3}
                        alt="Featured Blog"
                        className="w-full h-full object-cover"
                    />

                    <div className="p-6 md:p-10">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#2b3d67] mb-6 text-center">
                            Featured <span className="text-[#17b2aa]">Story</span>
                        </h2>
                        <h3 className="text-2xl font-bold text-[#2b3d67] ">
                            Unlocking the Secrets of Holistic Wellness
                        </h3>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Dive into the world of Ayurveda, meditation, and modern treatments that balance the body and mind. Explore how
                            wellness practices are reshaping lifestyles today.
                        </p>
                        <button className="mt-6 bg-[#17b2aa] text-white px-6 py-2 rounded-md font-medium hover:bg-[#149a94] transition">
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            <div className='flex 2xl:px-52 flex-row'>
                <div className='lg:grid w-full mx-5 h-full  lg:grid-flow-row grid-cols-2 gap-2  lg:w-8/12'>
                    {blogs.map(blog => (
                        <div key={blog.id} className='flex mt-4 p-2 pb-0 shadow-md  justify-between shadow-gray-400 flex-col ml-2 '>

                            <img src={blog.imageUrl}
                                alt={`Blog: ${blog.title}`}
                                className="w-full h-56 rounded-t-lg "
                                loading="lazy" />

                            <div className='flex px-1 flex-col '>

                                <h3 className='lg:text-base cursor-pointer hover:underline text-justify lg:text-left font-semibold pt-2'>{blog.title}</h3>

                                <p className='lg:text-sm text-sm mt-1 text-justify lg:text-start'>{blog.content}</p>

                                <h3 className='justify-end  font-bold text-gray-400 text-sm cursor-pointer hover:text-gray-600 hover:underline'>Read More</h3>

                            </div>
                            <div className='flex px-1 text-sm pt-2 pb-2 flex-row w-full justify-between'>
                                <h3 className='flex hover:text-gray-600 cursor-pointer text-gray-400 '>{blog.date} </h3>
                                <h3 className='flex hover:text-gray-600 cursor-pointer text-gray-400 pl-16'>by - {blog.author} </h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='lg:flex hidden justify-start items-start lg:mt-1  lg:flex-col  lg:w-4/12'>
                    <div className='w-11/12 mt-4 items-center flex flex-col bg-gray-200 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mt-3'>Follow us</h2>
                        <div className="flex flex-row my-5 items-center gap-3">
                            {[
                                { href: "https://twitter.com/CourieroIN", icon: "fa-x-twitter" },
                                { href: "https://www.facebook.com/couriero.in", icon: "fa-facebook-f" },
                                { href: "https://www.instagram.com/couriero.in/", icon: "fa-instagram" },
                                { href: "https://www.youtube.com/channel/UC2nLLn3C2NqBN8toLZzaX4w", icon: "fa-youtube" },
                                { href: "https://www.linkedin.com/company/couriero", icon: "fa-linkedin-in" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fa-brands ${social.icon}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex pr-10 pt-4'>
                        <div className="w-full  py-4 ">

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
                    <div className='flex flex-col pr-10 pt-4 '>
                        <div className='flex flex-col px-2 pt-5 pb-0  rounded-xl shadow-lg'>
                            <div className='flex'>
                                <h2 className='font-black'>Table Of Contents</h2>
                            </div>
                            {[
                                "Streamlining E-Commerce Logistics: How Our Professional Courier Aggregator Delivers Seamless Solutions",
                                "How Door-to-Door Pickup Services Are Redefining Urban Logistics and Convenience for E-Commerce",
                                "10 Reasons to Choose an Online Shipping Platform as Your Delivery Partner for E-Commerce Businesses",
                                "Celebrate the Festive Season Courier Services with Couriero: Fast, Reliable, and Affordable",
                                "How to Increase Online Sales This Festive Season",
                                "8 Best Products to Sell on Diwali in 2024",
                                "Top Key Benefits of Using Courier Aggregators for Your Shopify Store’s Shipping Strategy",
                                "Choosing the Best Courier Services for Shopify Store Owners"
                            ].map((content, index) => (
                                <div
                                    key={index}
                                    className="flex border-b border-gray-300 py-2 cursor-pointer hover:text-slate-800 transition-colors duration-200"
                                >
                                    <span className="text-black pr-2">•</span>
                                    <h3 className="text-sm text-slate-500">{content}</h3>
                                </div>
                            ))}
                            <div className='flex mb-1 pt-3'>
                                <h3 className='text-sm text-slate-700  cursor-pointer font-bold'>Many More to come....</h3>
                            </div>
                        </div>
                        <div className="bg-[#e7f3f7] p-5 mt-7 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-[#2b3d67] mb-4">Daily Health Tips</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>🥗 Eat a balanced diet with fresh fruits & veggies.</li>
                                <li>💧 Drink at least 8 glasses of water daily.</li>
                                <li>😴 Sleep 7–8 hours for better immunity.</li>
                                <li>🏃‍♂️ Exercise at least 30 minutes a day.</li>
                                <li>🧘‍♀️ Practice yoga/meditation for stress relief.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[#e7f3f7] py-10 mt-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#2b3d67] mb-8 text-center">
                        Meet Our Expert Doctors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {doctors.map((doc, index) => (
                            <div
                                key={index}
                                className="bg-white pb-5 rounded-lg shadow-md text-center"
                            >
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-full h-52 mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-lg font-semibold text-[#2b3d67]">
                                    {doc.name}
                                </h3>
                                <p className="text-sm text-gray-600">{doc.specialty}</p>
                                <p className="text-xs text-gray-500">{doc.exp}</p>
                                <button className="mt-3 px-5 py-1.5 bg-[#17b2aa] text-white rounded-sm text-sm">
                                    Book Appointment
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex flex-col 2xl:px-36 lg:flex-row mt-10 justify-center items-center bg-gradient-to-r from-purple-50 to-blue-300 w-full py-4 lg:py-16 lg:px-8">
                {/* Text Section */}
                <div className="flex flex-col px-4 justify-start text-center w-full lg:w-1/2">
                    <h3 className="flex w-full lg:w-3/4 cursor-pointer text-2xl lg:text-4xl 2xl:text-5xl font-extrabold lg:pb-2">
                        Subscribe to
                    </h3>
                    <h3 className="flex w-full cursor-pointer text-2xl lg:text-4xl 2xl:text-5xl font-extrabold">
                        Couriero Newschannel
                    </h3>
                </div>

                {/* Input and Button Section */}
                <div className="flex flex-row px-4 items-center my-2 justify-center w-full lg:w-1/2">
                    <input
                        className="w-3/4 outline-none pl-4 border border-gray-400 shadow-lg py-2 lg:h-10 lg:text-xl text-sm rounded-lg focus:border-blue-500 transition duration-300"
                        placeholder="Enter your e-mail address"
                        type="email"
                    />
                    <button className="lg:px-4 py-2 px-2 border border-gray-400 mx-4 w-1/4 bg-blue-500 shadow-lg text-white rounded-lg text-sm lg:text-2xl font-sans hover:bg-blue-600 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default BlogPage;