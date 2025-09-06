import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'

function Testimonial() {

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
        <div className="flex justify-center    w-full">


            <div className="flex w-8/12 flex-col px-10 scroll-smooth">
                {/* Section Heading */}
                <h1 className="text-3xl text-center pt-5 md:text-4xl font-bold text-[#2b3d67] mb-8">
                    Hear From Our Patients
                </h1>

                {/* Written Testimonials */}
                <section id="reviews" className="">
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
                                <h2 className="text-sm font-semibold">Mitral valve Replacement Surgery in India</h2>
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
                                <h2 className="text-sm font-semibold">Successful Bypass Surgery in India</h2>
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
                                <h2 className="text-sm font-semibold">World-Class Care & Facilities</h2>
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
                                <h2 className="text-sm font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-[0.7rem] text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
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
                                <h2 className="text-sm font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-[0.7rem] text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
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
                                <h2 className="text-sm font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-[0.7rem] text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
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
                                <h2 className="text-sm font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-[0.7rem] text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
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
                                <h2 className="text-sm font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-[0.7rem] text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
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
                                <h2 className="text-sm font-semibold">Exceptional Treatment & Support</h2>
                                <p className="text-[0.7rem] text-gray-700">
                                    “Excellent doctors and modern facilities. I am grateful for the exceptional treatment and support I received.”
                                </p>
                                <h3 className="text-sm flex font-semibold text-[#2b3d67]">Ahmed, UAE</h3>
                            </div>
                        </div>
                    </div>
                    {/* Video Testimonials */}
                    <section id="video-testimonials" className="my-12">
                        <h2 className="text-2xl font-semibold text-[#2b3d67] my-6">Video Testimonials</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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



                {/* Why Patients Trust Us */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-[#2b3d67] mb-6">
                        Why Patients Trust Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Affordable Treatment",
                                desc: "High-quality care at a fraction of the international cost.",
                            },
                            {
                                title: "Expert Doctors",
                                desc: "World-renowned surgeons with decades of experience.",
                            },
                            {
                                title: "Global Patients",
                                desc: "Trusted by patients from 50+ countries worldwide.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-[#e7f3f7] rounded-lg p-6 shadow-md hover:shadow-xl transition"
                            >
                                <h3 className="text-lg font-bold text-[#2b3d67] mb-2">{item.title}</h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* International Patient Experiences */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-[#2b3d67] mb-6">
                        International Patient Experiences
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                country: "Nigeria",
                                feedback:
                                    "I came to India for a heart bypass surgery. The hospital arranged airport pickup, accommodation, and the surgery went smoothly. I feel safe and healthy now.",
                                name: "Chinedu Okafor",
                            },
                            {
                                country: "Bangladesh",
                                feedback:
                                    "For my mother’s cancer treatment, we trusted Indian hospitals. The treatment was affordable and the doctors were so caring.",
                                name: "Fatima Rahman",
                            },
                        ].map((t, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition"
                            >
                                <h3 className="font-bold text-[#17b2aa] mb-2">{t.country}</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">“{t.feedback}”</p>
                                <p className="text-sm font-semibold text-[#2b3d67]">- {t.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-white border mb-10 border-gray-200 rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-[#2b3d67] mb-6 text-center">
                        Share Your Testimonial
                    </h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#17b2aa] focus:outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                <input
                                    type="text"
                                    placeholder="Enter your country"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#17b2aa] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter your city"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#17b2aa] focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Treatment / Medical Issue</label>
                            <input
                                type="text"
                                placeholder="e.g. Kidney Transplant, Hip Replacement"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#17b2aa] focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
                            <textarea
                                rows="4"
                                placeholder="Share your journey with us..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#17b2aa] focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#17b2aa] hover:bg-[#13938d] text-white py-2.5 rounded-md font-semibold shadow-md transition"
                        >
                            Submit Testimonial
                        </button>
                    </form>
                </div>

                {/* Success Stories Highlight */}
                <div className="bg-[#e7f3f7] rounded-lg p-6 mt-10 shadow-md">
                    <h2 className="text-2xl font-semibold text-[#2b3d67] mb-4">Patient Success Stories</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Over <span className="font-bold text-[#17b2aa]">10,000+ international patients</span> have trusted us for their medical journey.
                        From life-saving transplants to advanced robotic surgeries, their stories inspire confidence and hope.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Liver transplant with excellent recovery outcomes</li>
                        <li>Advanced cardiac care with minimal complications</li>
                        <li>Orthopedic treatments ensuring faster mobility</li>
                        <li>Affordable and accessible treatment options for all</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-[#17b2aa] text-white rounded-lg p-8 my-12 text-center shadow-md">
                    <h2 className="text-2xl font-bold mb-3">Your Story Matters!</h2>
                    <p className="mb-5">
                        Every testimonial inspires hope for others who are beginning their medical journey.
                        Share your experience and help patients make confident choices.
                    </p>
                    <button className="bg-white text-[#17b2aa] px-6 py-2 font-semibold rounded-md shadow hover:bg-gray-100 transition">
                        Submit Your Testimonial
                    </button>
                </div>



                <section className="bg-[#e7f3f7] rounded-lg p-8 text-center shadow-md">
                    <h2 className="text-2xl font-semibold text-[#2b3d67] mb-6">
                        Numbers Speak for Us
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "50,000+", label: "Patients Treated" },
                            { value: "70+", label: "Countries Served" },
                            { value: "500+", label: "Hospitals Partnered" },
                            { value: "95%", label: "Success Rate" },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <h3 className="text-3xl font-bold text-[#17b2aa]">{stat.value}</h3>
                                <p className="text-gray-700 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call To Action */}
                <div className="text-center my-8 bg-[#2b3d67] text-white rounded-lg py-8 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-3">
                        Want to Consult With Our Experts?
                    </h2>
                    <p className="mb-5 text-gray-200">
                        Get a free medical opinion and personalized treatment plan.
                    </p>
                    <button className="px-8 py-1.5 bg-[#17b2aa] text-white rounded-sm font-semibold hover:bg-[#13938d] transition">
                        Get Free Consultation
                    </button>
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
    )
}

export default Testimonial;