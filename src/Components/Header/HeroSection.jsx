import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import playIcon from "../../assets/Play.png";
import banner from "../../assets/banner.png";

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-col">
            <div className="text-white float-always bg-linear-to-r from-blue-600 to-violet-600 md:py-15 py-5">
                <div className="w-7/12 mx-auto text-center flex justify-between flex-col md:flex-row gap-6">
                    <div className="space-y-3">
                        <p className="text-5xl font-black">50K+</p>
                        <p>Active Users</p>
                    </div>
                    <p className="border "></p>
                    <div className="space-y-3">
                        <p className="text-5xl font-black">200+</p>
                        <p>Premium Tools</p>
                    </div>
                    <p className="border"></p>
                    <div className="space-y-3">
                        <p className="text-5xl font-black">4.9</p>
                        <p>Rating</p>
                    </div>
                    
                </div>
            </div>
            <div className="flex py-20 mx-auto container items-center justify-between gap-3 px-6 md:px-0">
                <div className="space-y-5 flex-1 max-w-160">
                    <div className="bg-[#e1e7ff] p-2 rounded-full inline-flex items-center gap-1 ">
                        <FaRegDotCircle className="text-blue-600 " />
                        <p className="font-bold bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                            {" "}
                            New: AI-Powered Tools Available
                        </p>
                    </div>
                    <h1 className="md:text-7xl text-5xl font-black leading-14 md:leading-19 ">
                        Supercharge Your Digital Workflow
                    </h1>
                    <p className="text-gray-400 leading-relaxed">
                        Access premium AI tools, design assets, templates, and
                        productivity software—all in one place. Start creating
                        faster today. Explore Products
                    </p>
                    <div className="flex gap-4">
                        <button className="animate-bounce bg-linear-to-r from-blue-600 to-violet-600 p-3 font-bold text-white rounded-full">
                            Explore Products
                        </button>
                        <button className="flex animate-bounce items-center gap-1 p-3 border-2 border-violet-500 rounded-full text-transparent bg-clip-text">
                            <img className="w-5 h-5" src={playIcon} alt="" />
                            <span className="font-bold bg-linear-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex-1 max-w-md hidden md:flex animate-pulse">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
