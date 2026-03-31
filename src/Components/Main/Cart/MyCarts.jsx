import React from "react";
import { toast } from "react-toastify";

const MyCarts = ({ cart, setSelectedCart, seletedCart, index }) => {
    

    const deleteCart = () => {
        const filterCard = seletedCart.filter((_, i) => i !== index);
        setSelectedCart(filterCard);
        toast('Item removed successfully')
    };

    return (
        <div className="flex glass-shine-always justify-between items-center shadow-sm p-2 md:p-6 rounded-full bg-white">
            <div className="flex gap-5 items-center">
                <p className="p-3 bg-zinc-100 rounded-full">
                    <img className="w-7 h-7" src={cart.icon} alt="" />
                </p>
                <div>
                    <h1 className="text-xl font-bold">{cart.name}</h1>
                    <p className="text-gray-300">${cart.price}</p>
                </div>
            </div>
            <h1
                onClick={deleteCart}
                className="text-red-500 font-bold cursor-pointer "
            >
                Remove
            </h1>
        </div>
    );
};

export default MyCarts;
