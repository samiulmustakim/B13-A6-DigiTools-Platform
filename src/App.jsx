import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Steps from "./Components/Footer/Steps";
import Headers from "./Components/Header/Headers";
import MainSection from "./Components/Main/MainSection/MainSection";
import { ToastContainer } from "react-toastify";


const productData = fetch('/data.json').then(res => res.json())

function App() {
    const [seletedCart, setSelectedCart] = useState([]);
    return (
        <>
            <Headers seletedCart={seletedCart}></Headers>

            <Suspense
                fallback={
                    <div className="h-screen w-full mx-auto flex justify-center items-center">
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-xl"></span>
                    </div>
                }
            >
                <MainSection
                    seletedCart={seletedCart}
                    setSelectedCart={setSelectedCart}
                    productData={productData}
                ></MainSection>
            </Suspense>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;
