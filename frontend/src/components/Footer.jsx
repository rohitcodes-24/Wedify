import { React, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    return (
        <footer className="bg-linear-to-br from-[#fff7fb] to-[#f8edf2] pt-14 px-6 md:px-16">

            {/* Decorative top divider */}
            <div className="w-full h-px bg-linear-to-r from-transparent via-pink-300 to-transparent mb-12" />

            {/* Top Footer */}
            <div className="grid md:grid-cols-5 gap-10 pb-12">

                {/* Logo + About */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="h-10 w-auto object-contain"
                        />
                    </div>

                    <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                        Your one-stop destination to find, compare and book the best wedding vendors across India.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <button className="w-9 h-9 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 hover:text-white transition-all hover:-translate-y-0.5 duration-200">
                            <FaFacebookF size={16} />
                        </button>
                        <button className="w-9 h-9 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 hover:text-white transition-all hover:-translate-y-0.5 duration-200">
                            <FaInstagram size={16} />
                        </button>
                        <button className="w-9 h-9 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 hover:text-white transition-all hover:-translate-y-0.5 duration-200">
                            <FaYoutube size={16} />
                        </button>
                        <button className="w-9 h-9 bg-pink-200 text-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-500 hover:text-white transition-all hover:-translate-y-0.5 duration-200">
                            <FaXTwitter size={16} />
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xs font-semibold  uppercase tracking-widest mb-4 pb-2.5 border-b-2 border-pink-200">
                        Quick Links
                    </h3>
                    <ul className="space-y-3 text-gray-500 text-sm">
                        {[
                            { label: "Home", href: "/" },
                            { label: "Vendors", href: "/vendors" },
                            { label: "Categories", href: "/categories" },
                            { label: "How It Works", href: "/how-it-works" },
                            { label: "Blog", href: "/blog" },
                            { label: "Contact", href: "/contact-us" },
                        ].map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="hover:text-pink-500 transition-all hover:translate-x-1 inline-block duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* For Vendors */}
                <div>
                    <h3 className="text-xs font-semibold  uppercase tracking-widest mb-4 pb-2.5 border-b-2 border-pink-200">
                        For Vendors
                    </h3>
                    <ul className="space-y-3 text-gray-500 text-sm">
                        <li>
                            <a
                                href="/create-listing"
                                className="hover:text-pink-500 transition-all hover:translate-x-1 inline-flex items-center gap-2 duration-200"
                            >
                                List Your Business
                                <span className="text-[10px] bg-pink-100 text-pink-600 font-semibold px-1.5 py-0.5 rounded">
                                    FREE
                                </span>
                            </a>
                        </li>
                        <li>
                            <button 
                                onClick={ () =>setIsLoginOpen(true)}
                                className="hover:text-pink-500 transition-all hover:translate-x-1 inline-block duration-200 cursor-pointer">
                                Vendor Login
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-pink-500 transition-all hover:translate-x-1 inline-block duration-200"
                            >
                                Vendor Guidelines
                            </a>
                        </li>
                        <li>
                            <a
                                href="/help-center"
                                className="hover:text-pink-500 transition-all hover:translate-x-1 inline-block duration-200"
                            >
                                Help Center
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xs font-semibold  uppercase tracking-widest mb-4 pb-2.5 border-b-2 border-pink-200">
                        Support
                    </h3>
                    <ul className="space-y-3 text-gray-500 text-sm">
                        {[
                            { label: "FAQs", href: "/faqs" },
                            { label: "Privacy Policy", href: "/privacy-policy" },
                            { label: "Terms & Conditions", href: "/terms-and-conditions" },
                            { label: "Refund Policy", href: "/refund-policy" },
                        ].map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="hover:text-pink-500 transition-all hover:translate-x-1 inline-block duration-200"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xs font-semibold  uppercase tracking-widest mb-4 pb-2.5 border-b-2 border-pink-200">
                        Contact Us
                    </h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <div className="w-7 h-7 min-w-7 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 text-base mt-0.5">
                                📞
                            </div>
                            <div>

                                <span className="text-gray-500">+91 98765 43210</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-7 h-7 min-w-7 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 text-base mt-0.5">
                                ✉
                            </div>
                            <div>

                                <span className="text-gray-500">support@wedify.com</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-7 h-7 min-w-7 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 text-base mt-0.5">
                                📍
                            </div>
                            <div>

                                <span className="text-gray-500">Indore, Madhya Pradesh</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-7 h-7 min-w-7 bg-pink-100 rounded-lg flex items-center justify-center text-pink-500 text-base mt-0.5">
                                ⏰
                            </div>
                            <div>

                                <span className="text-gray-500">Mon – Sun, 9 AM – 8 PM</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-pink-200" />

            {/* Bottom Footer */}
            <div className="flex flex-col gap-3 py-5 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Wedify. All rights reserved.</p>

                <div className="flex flex-wrap items-center gap-5">
                    <a href="/privacy-policy" className="hover:text-pink-500 transition-colors duration-200">
                        Privacy
                    </a>
                    <span className="text-pink-300">|</span>
                    <a href="/terms-and-conditions" className="hover:text-pink-500 transition-colors duration-200">
                        Terms
                    </a>
                    <span className="text-pink-300">|</span>
                    <a href="/sitemap" className="hover:text-pink-500 transition-colors duration-200">
                        Sitemap
                    </a>
                </div>

                <p className="flex items-center gap-1">
                    Made with <span className="text-pink-500 text-base">❤</span> for your special day
                </p>
            </div>

 

        </footer>
    );
};

export default Footer;
