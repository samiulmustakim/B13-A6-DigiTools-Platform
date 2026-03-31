import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";

const Navber = ({ seletedCart }) => {
    
    return (
        <div className="shadow-xl stickyClass bg-white/90">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <a className="hover:bg-amber-200 " href="#">
                                <li>Products</li>
                            </a>
                            <a className="hover:bg-amber-200 " href="#">
                                <li>Features</li>
                            </a>
                            <a className="hover:bg-amber-200 " href="#">
                                <li>Pricing</li>
                            </a>
                            <a className="hover:bg-amber-200 " href="#">
                                <li>Testimonials</li>
                            </a>
                            <a className="hover:bg-amber-200 " href="#">
                                <li>FAQ</li>
                            </a>
                        </ul>
                    </div>
                    <a className="bg-linear-to-r from-blue-600 to-violet-600 text-3xl text-transparent bg-clip-text font-black">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex space-x-6 font-semibold px-1">
                        <a href="#">
                            <li>Products</li>
                        </a>
                        <a href="#">
                            <li>Features</li>
                        </a>
                        <a href="#">
                            <li>Pricing</li>
                        </a>
                        <a href="#">
                            <li>Testimonials</li>
                        </a>
                        <a href="#">
                            <li>FAQ</li>
                        </a>
                    </ul>
                </div>
                <div className="navbar-end flex-col sm:flex-row font-semibold sm:gap-4 gap-1">
                    <div className="flex items-center gap-4 relative ml-6">
                       <RiShoppingCartFill className="animate-spin"/>
                        <p>Login</p>
                        {
                            seletedCart.length > 0 &&
                            <p className="bg-red-600 h-4 w-4  absolute -top-2 right-13 text-[10px] text-white rounded-full flex items-center justify-center">{seletedCart.length}</p>
                                
                        }
                    </div>
                    <a className="text-white hidden md:flex btn bg-linear-to-r from-blue-600 to-violet-600 rounded-full">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navber;
