import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";


const Footers = () => {
    return (
        <div className="bg-[#101727] text-white">
            <footer className="footer px-4 md:px-0 sm:footer-horizontal py-30 container mx-auto">
                <div className="space-y-1 max-w-sm">
                    <p className="text-4xl font-black">DigiTools</p>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <p className="bg-white rounded-full p-2"><AiFillInstagram className="text-[#101727]"/></p>
                        <p className="bg-white rounded-full p-2"><AiFillFacebook  className="text-[#101727]"/></p>
                        <p className="bg-white rounded-full p-2"><FaXTwitter  className="text-[#101727]"/></p>

                    </div>
                </nav>
            </footer>
            <hr className="border-t border-gray-600 container mx-auto"/>
            <div className="container space-y-2 mx-auto text-center flex justify-between flex-col md:flex-row  py-7">
                <div><p>© 2026 Digitools. All rights reserved.</p></div>
                <div className="flex md:space-x-9 flex-col md:flex-row  text-center">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footers;
