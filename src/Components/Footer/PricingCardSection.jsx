import React from "react";

const PricingCardSection = () => {
    return (
        <div className="py-30">
            <div className="space-y-3 text-center">
                <h2 className="text-4xl font-black">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500">
                    Choose the plan that fits your needs. Upgrade or downgrade
                    anytime.
                </p>
            </div>

            <div className="w-full md:w-8/12 mx-auto grid grid-cols-1  sm:grid-cols-2 gap-6 md:grid-cols-3 pt-10">
                <div className="card w-80 mx-auto md:max-w-80 bg-zinc-50 shadow-sm ">
                    <div className="card-body h-100">
                        {/* <span className="badge badge-xs badge-warning">
                            Most Popular
                        </span> */}
                        <div className="pb-4">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p>Perfect for getting started</p>
                        </div>
                        <h1 className="text-xl">
                            <span className="text-3xl font-bold">$0</span>/month
                        </h1>
                        <ul className=" flex flex-col gap-2 text-xs pb-15">
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn  border-none btn-primary btn-block text-white rounded-full  bg-linear-to-r from-blue-600 to-violet-600">
                                Get Started Free
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 mx-auto relative md:max-w-80 text-white bg-linear-to-r from-blue-600 to-violet-600 shadow-sm">
                    <div className="card-body h-100">
                        <p className="badge badge-soft badge-warning shadow-4xl  rounded-full  absolute -top-3 right-25">
                            Most Popular
                        </p>
                        <div className="pb-4">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>
                        <h1 className="text-xl">
                            <span className="text-3xl font-bold">$29</span>/month
                        </h1>
                        <ul className=" flex flex-col gap-2 text-xs pb-3">
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Advanced analytics</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Unlimited projects</span>
                            </li>
                        </ul>
                        <div className="mt-6 btn btn-block bg-white border-none rounded-full">
                            <button className=" bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent border-none">
                                Start Pro Trial
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 mx-auto md:max-w-80 bg-zinc-50 shadow-sm">
                    <div className="card-body h-100">
                        {/* <span className="badge badge-xs badge-warning">
                            Most Popular
                        </span> */}
                        <div className="pb-4">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p>For teams and businesses</p>
                        </div>
                        <h1 className="text-xl">
                            <span className="text-3xl font-bold">$99</span>/month
                        </h1>
                        <ul className=" flex flex-col gap-2 text-xs pb-3">
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Custom branding</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Dedicated support</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className=" border-none btn btn-primary btn-block text-white rounded-full  bg-linear-to-r from-blue-600 to-violet-600">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        
    );
};

export default PricingCardSection;
