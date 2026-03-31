import { toast } from "react-toastify";

const Products = ({ data, setSelectedCart, seletedCart, setSelectedId, selectedId }) => {

    const isSelected = selectedId === data.id

    const buyProduct = () => {
        setSelectedId(data.id)
        setSelectedCart([...seletedCart, data])
        toast.success('Purchase has been successfulBuy Sucesssful')
    }
    return (
        <div>
            <div className="card-body card-3d relative mx-auto shadow-xl max-w-100 md:max-w-100 bg-white  space-y-3 rounded-2xl">
                <img
                    className="w-12 rounded-full p-2 border border-gray-300"
                    src={data.icon}
                    alt=""
                />

                <p className="text-2xl font-bold">{data.name}</p>
                <h4 className="text-gray-500">{data.description}</h4>
                <p className="text-gray-500"><span className="text-2xl font-bold text-black">${data.price}</span>/mo</p>
                <ul className="space-y-2">
                    {data.features.map((feature , index) => (
                        <li key={index}>
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
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <button onClick={buyProduct} className={`btn rounded ${isSelected ? 'bg-green-500' : 'bg-linear-to-r from-blue-600 to-violet-600'} text-white font-bold`}>{isSelected ? 'Added to Cart' : 'Buy Now'}</button>

                <div className={`badge absolute top-2 right-2 ${data.tag === 'popular' ? 'badge-soft badge-primary' : ''} ${data.tag === 'best seller' ? 'badge-soft badge-info' : ''} ${data.tag === 'new' ? 'badge-soft badge-warning' : ''} rounded-full font-bold uppercase`}>{data.tag}</div>
            </div>
        </div>
    );
};

export default Products;
