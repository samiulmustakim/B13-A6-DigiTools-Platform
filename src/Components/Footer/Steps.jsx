import React from "react";
import user from "../../assets/user.png";
import rocket from "../../assets/rocket.png";
import packaging from "../../assets/package.png";

const Steps = () => {
    return (
        <div className="bg-zinc-100 space-y-11 py-30">
            <div className="text-center  space-y-3">
                <p className="text-5xl font-black">Get Started in 3 Steps</p>
                <p className="text-gray-500 font-light">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 container mx-auto gap-7">
                <div className="flex flex-col items-center p-15 text-center py-25 rounded-md relative space-y-2  bg-white shadow-sm">
                    <div className="bg-[#f3e8fe] rounded-full p-3 h-20 w-20 flex items-center justify-center">
                        <img
                            className="w-12 h-12 object-cover"
                            src={user}
                            alt=""
                        />
                    </div>
                    <p className="text-2xl font-bold">Create Account</p>
                    <p className="text-gray-500">
                        Sign up for free in seconds. No credit card required to
                        get started.
                    </p>
                    <p className="w-9 h-9 flex justify-center items-center absolute top-4 rounded-full right-4  bg-linear-to-r from-blue-600 to-violet-600 text-white font-bold">
                        01
                    </p>
                </div>
                <div className="flex flex-col items-center p-15 text-center py-25 rounded-md relative space-y-2  bg-white shadow-sm">
                    <div className="bg-[#f3e8fe] rounded-full p-3 h-20 w-20 flex items-center justify-center">
                        <img
                            className="w-12 h-12 object-cover"
                            src={packaging}
                            alt=""
                        />
                    </div>
                    <p className="text-2xl font-bold">Choose Products</p>
                    <p className="text-gray-500">
                        Browse our catalog and select the tools that fit your
                        needs.
                    </p>
                    <p className="w-9 h-9 flex justify-center items-center absolute top-4 rounded-full right-4  bg-linear-to-r from-blue-600 to-violet-600 text-white font-bold">
                        02
                    </p>
                </div>
                <div className="flex flex-col items-center p-15 text-center py-30 rounded-md relative space-y-2  bg-white shadow-sm">
                    <div className="bg-[#f3e8fe] rounded-full p-3 h-20 w-20 flex items-center justify-center">
                        <img
                            className="w-12 h-12 object-cover"
                            src={rocket}
                            alt=""
                        />
                    </div>
                    <p className="text-2xl font-bold">Start Creating</p>
                    <p className="text-gray-500">
                        Download and start using your premium tools immediately.
                    </p>
                    <p className="w-9 h-9 flex justify-center items-center absolute top-4 rounded-full right-4  bg-linear-to-r from-blue-600 to-violet-600 text-white font-bold">
                        03
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
