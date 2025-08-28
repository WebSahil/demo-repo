export default function Footer() {
    return (
      
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
       
    );
}