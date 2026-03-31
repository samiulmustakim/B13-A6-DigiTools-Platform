import React from 'react';

const Exploring = () => {
    return (
        <div className='text-white py-25 px-2 space-y-3 text-center bg-linear-to-r from-blue-600 to-violet-600'>
            <p className='text-3xl font-black'>Ready to Transform Your Workflow?</p>
            <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            <div className='space-x-3'>
                <button className='btn w-40 bg-white rounded-full'><p className='bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent'>Explore Products</p></button>

                <button className='w-40 py-2 text-white border border-white rounded-full'>View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Exploring;