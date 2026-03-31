import React, { use, useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const MainSection = ({ productData, setSelectedCart, seletedCart }) => {
    const datas = use(productData);
    const [clickTab, setClickTab] = useState("products");
    const[selectedId, setSelectedId] = useState(null)

    return (
        <div className=" py-20  bg-zinc-100 px-4">
            <div className="container mx-auto space-y-15">
                <div className="text-center space-y-4  md:w-lg mx-auto ">
                    <h1 className="text-5xl font-black animate-bounce">
                        Premium Digital Tools
                    </h1>
                    <p className="text-gray-500">
                        Choose from our curated collection of premium digital
                        products designed to boost your productivity and
                        creativity.
                    </p>
                    <p className="bg-white py-1 px-1 shadow-sm w-fit  rounded-full mx-auto">
                        <button
                            onClick={() => setClickTab("products")}
                            className={`btn border-none ${clickTab === "products" ? "bg-linear-to-r from-blue-600 to-violet-600 text-white " : "bg-white text-black"} w-30 rounded-full`}
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setClickTab("cart")}
                            className={`btn border-none ${clickTab === "cart" ? " bg-linear-to-r from-blue-600 to-violet-600 text-white" : "bg-white text-black"} w-30 rounded-full`}
                        >
                            Cart ({seletedCart.length})
                        </button>
                    </p>
                </div>

                {clickTab === "products" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16">
                        {datas.map((data, index) => (
                            <Products setSelectedId={setSelectedId} selectedId={selectedId} key={index} seletedCart={seletedCart} setSelectedCart={setSelectedCart} data={data}></Products>
                        ))}
                    </div>
                ) : (
                    <Cart setSelectedCart={setSelectedCart} seletedCart={seletedCart}></Cart>
                )}
            </div>
        </div>
    );
};

export default MainSection;
