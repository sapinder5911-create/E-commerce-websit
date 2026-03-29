

import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast";

function Home() {

    const [items, setitems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://e-commerce-websit-2g7x.onrender.com/api/products");
                setitems(res.data);
            } catch (error) {
                console.log("Error fetching ", error.message)
            }
        };

        fetchProducts();

    }, [])


    const addcart = async (data) => {
        try {
            await axios.post(
                "https://e-commerce-websit-2g7x.onrender.com/api/addcart",
                {
                    name: data.name,
                    price: data.price,
                    img: data.img,
                }
            );

            toast.success("Added to cart");

        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <>
           

            <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center
            bg-[url(https://static.wixstatic.com/media/c837a6_992ba64846024ddab0a484c034298629~mv2.jpeg)]">

                <div className="w-full px-4 sm:px-6 lg:px-10">

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
                            Discover the beauty of
                        </p>

                        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mt-4">
                            Nature at Your Fingertips
                        </p>

                        <Link to="/shop">
                            <button className="mt-10 px-6 py-3 bg-green-400 hover:bg-green-500
                            rounded-lg text-black font-bold
                            transition hover:scale-110">
                                Shop Now
                            </button>
                        </Link>

                    </motion.div>

                </div>

            </div>



            <div className="w-full flex flex-col items-center bg-taupe-300 min-h-screen">

                <div className="w-full max-w-[1400px] flex flex-col items-center">

                    <h1 className="text-2xl sm:text-3xl font-bold my-6 flex items-center sm:items-center ">
                        Trending Products
                    </h1>

                    {/* responsive container */}
                    <div className="flex flex-wrap justify-center p-4 gap-8">

                        {
                            items.map((item) => (
                                <div
                                    key={item._id}
                                    className=" flex flex-col items-center  cursor-pointer p-4   rounded-lg  hover:shadow-lg  w-[90%] sm:w-[45%]  md:w-[30%] lg:w-[30%]  xl:w-[23%]  bg-white"






                                >

                                    <img
                                        onClick={() => goToProduct(item._id)}
                                        className="w-full  h-40  sm:h-80 md:h-80 lg:h-90 object-cover rounded-lg "
                                        src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
                                        alt={item.name}
                                    />

                                    <p className="text-sm sm:text-lg mt-2">
                                        {item.name}
                                    </p>

                                    <p className="text-base sm:text-xl">
                                        Price : ${item.price}
                                    </p>

                                    <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">

                                        {
                                             (
                                                <button
                                                    onClick={() => { addcart(item) }}
                                                    className="   mt-3  px-4 sm:px-6  py-2  bg-pink-600  hover:bg-pink-700 text-black font-semibold rounded-lg shadow   transition text-sm sm:text-base
                                                "
                                                >
                                                    Add to cart
                                                </button>
                                            )
                                        }

                                       

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>


            {/* SUBSCRIBE */}

            <div className="w-full min-h-[500px] bg-cover bg-center flex items-center justify-center
            bg-[url(https://static.wixstatic.com/media/c837a6_35bdfabce3724dad92a9f8828437078e~mv2.jpeg)]">

                <div className="w-full px-4 sm:px-6 lg:px-10 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Everything You Need to Know About Plants
                        </p>

                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3">
                            and More. No Spam, We Promise
                        </p>

                        <p className="text-lg sm:text-xl text-white mt-5">
                            Subscribe now and get 15% off
                        </p>

                        <button className="mt-8 px-6 py-3
                        bg-white text-black rounded-lg
                        hover:bg-green-400 transition">
                            Subscribe Now
                        </button>

                    </motion.div>

                </div>

            </div>


        </>
    )
}

export default Home;

