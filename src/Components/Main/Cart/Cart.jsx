import React from "react";
import MyCarts from "./MyCarts";
import { FaOpencart } from "react-icons/fa6";
import { toast } from "react-toastify";

const Cart = ({ seletedCart, setSelectedCart }) => {

    const checkoutBtn = () => {
        setSelectedCart([])
        toast('Payment Successful')
    }

    const totalPrice = seletedCart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
    
    return (
        <div className="space-y-8 md:w-8/12 mx-auto border border-gray-300 p-4 md:p-10 rounded-2xl">
            <h1 className="text-3xl font-black drop-shadow-sm">Your Cart</h1>
            {seletedCart.length === 0 ? (
                <div className="flex w-9/12 mx-auto flex-col items-center justify-center py-30">
                    <FaOpencart className="text-gray-400 w-30 h-30 drop-shadow-sm"/>
                    <h1 className="text-xl text-gray-400 font-bold">Your Cart is empty</h1>
                </div>
            ) : (
                <div className="space-y-8 mx-auto w-full">
                    <div className="space-y-4">
                        {seletedCart.map((cart, index) => (
                            <MyCarts
                                key={index}
                                index={index}
                                setSelectedCart={setSelectedCart}
                                seletedCart={seletedCart}
                                cart={cart}
                            ></MyCarts>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <h1 className="font-black text-2xl">Total:</h1>
                        <p className="font-bold text-2xl">${totalPrice}</p>
                    </div>
                    <button onClick={checkoutBtn} className="rounded-full glass-shine-always btn bg-linear-to-r from-blue-600 to-violet-600 text-white font-bold p-6 w-full">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
