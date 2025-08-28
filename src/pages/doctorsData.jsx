import natarajan from '../assets/natarajan.webp'
import pradeep from '../assets/pradeep.webp'
import suraj from '../assets/surag.webp'
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'

function DoctorsData() {

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


    return (<>

        <div className="flex justify-center   w-full">
            <div className="flex w-8/12 flex-col p-6 scroll-smooth space-y-10">

                {/* ===== Doctor Profile (Big) ===== */}
                <section id="profile" className="bg-white rounded-lg  p-2">
                    <div className="flex flex-col md:flex-row gap-6">
                        <img
                            src={natarajan}
                            alt="Dr. Natarajan"
                            className="w-44 h-44 object-cover rounded-lg shadow"
                        />
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <h1 className="text-3xl font-bold text-[#2b3d67]">Dr. Natarajan</h1>
                                <span className="inline-flex items-center gap-1 text-yellow-500 text-sm font-semibold">
                                    ★★★★☆ <span className="text-gray-600">(4.7)</span>
                                </span>
                            </div>
                            <p className="text-gray-700 mt-1">Senior Cardiologist</p>
                            <p className="text-sm text-gray-500">MBBS, MD (Internal Medicine), DM (Cardiology) • 15+ Years Experience</p>

                            {/* Quick facts */}
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                                <div className="bg-gray-50 border rounded-md p-3">
                                    <p className="text-xs text-gray-500">Experience</p>
                                    <p className="font-semibold text-gray-900">15+ Years</p>
                                </div>
                                <div className="bg-gray-50 border rounded-md p-3">
                                    <p className="text-xs text-gray-500">Procedures Performed</p>
                                    <p className="font-semibold text-gray-900">5,000+</p>
                                </div>
                                <div className="bg-gray-50 border rounded-md p-3">
                                    <p className="text-xs text-gray-500">Success Rate</p>
                                    <p className="font-semibold text-gray-900">98%</p>
                                </div>
                                <div className="bg-gray-50 border rounded-md p-3">
                                    <p className="text-xs text-gray-500">Consultation Fee</p>
                                    <p className="font-semibold text-gray-900">₹1,200</p>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="px-3 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border">Interventional Cardiology</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border">Coronary Angioplasty</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border">Heart Failure</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-teal-50 text-teal-700 border">Valve Diseases</span>
                            </div>
                        </div>
                    </div>

                    {/* About + Details */}
                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-semibold text-[#2b3d67] mb-2">About the Doctor</h3>
                            <p className="text-sm leading-relaxed text-gray-700">
                                Dr. Natarajan is a renowned interventional cardiologist with deep expertise in complex coronary interventions,
                                structural heart disease, and heart failure management. He is known for adopting minimally invasive
                                techniques that ensure faster recovery and better outcomes. He has trained at top institutions and
                                published several papers in peer-reviewed journals.
                            </p>

                            {/* <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                <div className="border rounded-md p-4">
                                    <h4 className="font-semibold text-gray-900">Education & Training</h4>
                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                                        <li>DM (Cardiology), AIIMS, New Delhi</li>
                                        <li>MD (Internal Medicine), MMC</li>
                                        <li>Fellowship in Interventional Cardiology (USA)</li>
                                    </ul>
                                </div>
                                <div className="border rounded-md p-4">
                                    <h4 className="font-semibold text-gray-900">Registrations & Memberships</h4>
                                    <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                                        <li>Medical Council of India (MCI)</li>
                                        <li>Cardiological Society of India (CSI)</li>
                                        <li>European Society of Cardiology (ESC)</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>

                        <div className="border rounded-md p-4 h-max">
                            <h4 className="font-semibold text-gray-900">Availability</h4>
                            <ul className="mt-2 text-sm text-gray-700 space-y-1">
                                <li>Mon–Fri: 10:00 AM – 5:00 PM</li>
                                <li>Sat: 10:00 AM – 2:00 PM</li>
                                <li>Sun: On Call</li>
                            </ul>
                            <div className="mt-4 text-xs text-gray-500">
                                * Emergency procedures available on request
                            </div>
                        </div>

                    </div>
                    {/* CTA buttons */}
                    <div className="mt-5 flex flex-wrap gap-3">
                        <button className="bg-[#2b3d67] text-white px-5 py-1.5 rounded-md hover:bg-[#1f2c4d] transition shadow">
                            Book Appointment
                        </button>
                        <button className="border border-[#2b3d67] text-[#2b3d67] px-5 py-1.5 rounded-md hover:bg-[#2b3d67] hover:text-white transition">
                            Get Free Opinion
                        </button>
                    </div>
                </section>

                <div className="sticky top-16 z-[5] bg-white/90 backdrop-blur-sm border rounded-md p-2">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {[
                            { id: '#clinics', label: 'Hospitals/Clinics' },
                            { id: '#procedures', label: 'Procedures' },
                            { id: '#gallery', label: 'Gallery' },
                            { id: '#reviews', label: 'Reviews' },
                            { id: '#videos', label: 'Video Testimonials' },
                            { id: '#related', label: 'Related Doctors' },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={item.id}
                                className="px-4 py-2 text-sm rounded-full border text-[#2b3d67] hover:bg-[#2b3d67] hover:text-white transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ===== Hospitals / Clinics ===== */}
                <section id="clinics" className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold text-[#2b3d67] mb-4">Hospitals / Clinics</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 flex gap-4">
                            <img src={pradeep} alt="Apollo Hospital" className="w-32 h-24 object-cover rounded" />
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">Apollo Hospital</h4>
                                <p className="text-sm text-gray-600">Chennai, India</p>
                                <p className="text-xs text-gray-500 mt-1">Mon–Sat • OPD 10:00 AM – 2:00 PM</p>
                                <div className="mt-3 flex gap-2">
                                    <button className="px-3 py-1 text-sm rounded border text-[#2b3d67] hover:bg-[#2b3d67] hover:text-white">Book</button>
                                    <button className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Directions</button>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 flex gap-4">
                            <img src={suraj} alt="Fortis Hospital" className="w-32 h-24 object-cover rounded" />
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900">Fortis Hospital</h4>
                                <p className="text-sm text-gray-600">New Delhi, India</p>
                                <p className="text-xs text-gray-500 mt-1">Mon–Fri • Procedures by appointment</p>
                                <div className="mt-3 flex gap-2">
                                    <button className="px-3 py-1 text-sm rounded border text-[#2b3d67] hover:bg-[#2b3d67] hover:text-white">Book</button>
                                    <button className="px-3 py-1 text-sm rounded border hover:bg-gray-50">Directions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Procedures ===== */}
                <section id="procedures" className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold text-[#2b3d67] mb-4">Procedures</h3>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                        <div className="border rounded-md p-4">
                            <h4 className="font-semibold text-gray-900">Coronary Angioplasty (PTCA)</h4>
                            <p className="text-sm text-gray-600 mt-1">Minimally invasive procedure to open clogged heart arteries.</p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h4 className="font-semibold text-gray-900">Pacemaker Implant</h4>
                            <p className="text-sm text-gray-600 mt-1">Device implantation to regulate abnormal heart rhythms.</p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h4 className="font-semibold text-gray-900">Valve Replacement (TAVI)</h4>
                            <p className="text-sm text-gray-600 mt-1">Transcatheter aortic valve implantation for high-risk cases.</p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h4 className="font-semibold text-gray-900">Coronary Bypass (CABG)</h4>
                            <p className="text-sm text-gray-600 mt-1">Bypass surgery to improve blood flow to the heart.</p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h4 className="font-semibold text-gray-900">Electrophysiology Study (EPS)</h4>
                            <p className="text-sm text-gray-600 mt-1">Diagnostic test for heart’s electrical system.</p>
                        </div>
                        <div className="border rounded-md p-4">
                            <h4 className="font-semibold text-gray-900">Atrial Fibrillation Ablation</h4>
                            <p className="text-sm text-gray-600 mt-1">Catheter ablation to treat AFib and restore rhythm.</p>
                        </div>
                    </div>
                </section>

                {/* ===== Gallery ===== */}
                <section id="gallery" className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold text-[#2b3d67] mb-4">Image Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <img src={natarajan} alt="Gallery 1" className="rounded-lg shadow hover:opacity-90 transition" />
                        <img src={pradeep} alt="Gallery 2" className="rounded-lg shadow hover:opacity-90 transition" />
                        <img src={suraj} alt="Gallery 3" className="rounded-lg shadow hover:opacity-90 transition" />
                    </div>
                </section>

                {/* ===== Reviews ===== */}
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
                    <section id="video-testimonials" className="mb-5">
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
        {/* ===== Related Doctors ===== */}
        <section id="related" className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-[#2b3d67] mb-4">Related Doctors</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <img src={pradeep} alt="Dr. Pradeep" className="w-28 h-28 object-cover rounded-full mb-3" />
                    <h4 className="font-semibold text-gray-900">Dr. Pradeep</h4>
                    <p className="text-sm text-gray-600">Orthopedic Surgeon • 18+ yrs</p>
                    <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                        View Profile
                    </button>
                </div>
                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <img src={suraj} alt="Dr. Suraj" className="w-28 h-28 object-cover rounded-full mb-3" />
                    <h4 className="font-semibold text-gray-900">Dr. Suraj</h4>
                    <p className="text-sm text-gray-600">Oncologist • 15+ yrs</p>
                    <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                        View Profile
                    </button>
                </div>
                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <img src={natarajan} alt="Dr. Natarajan" className="w-28 h-28 object-cover rounded-full mb-3" />
                    <h4 className="font-semibold text-gray-900">Dr. Natarajan</h4>
                    <p className="text-sm text-gray-600">Cardiologist • 15+ yrs</p>
                    <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                        View Profile
                    </button>
                </div>
                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <img src={suraj} alt="Dr. Suraj" className="w-28 h-28 object-cover rounded-full mb-3" />
                    <h4 className="font-semibold text-gray-900">Dr. Suraj</h4>
                    <p className="text-sm text-gray-600">Oncologist • 15+ yrs</p>
                    <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                        View Profile
                    </button>
                </div>
                <div className="border rounded-lg p-4 flex flex-col items-center text-center">
                    <img src={natarajan} alt="Dr. Natarajan" className="w-28 h-28 object-cover rounded-full mb-3" />
                    <h4 className="font-semibold text-gray-900">Dr. Natarajan</h4>
                    <p className="text-sm text-gray-600">Cardiologist • 15+ yrs</p>
                    <button className="mt-4 bg-[#2b3d67] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#1f2c4d] transition">
                        View Profile
                    </button>
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
    </>)
}

export default DoctorsData;