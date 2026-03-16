
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react"
// import axios from "axios"

// function Home() {

//     const [items, setitems] = useState([]);


//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("https://e-commerce-websit-2g7x.onrender.com/api/products",);
//                 console.log("Frontend data:", res.data);
//                 setitems(res.data);

//             } catch (error) {
//                 console.log("Error fetching ", error.message)
//             }
//         };

//         fetchProducts();

//     }, [])


//     const addcart = async (data) => {
//         try {
//             const res = await axios.post("https://e-commerce-websit-2g7x.onrender.com/api/addcart", {
//                 name: data.name,
//                 price: data.price,
//                 img: data.img,
//             });
//             toast.success("succesfully added to cart");

//         } catch (err) {
//             toast.error("Something went wrong");
//             // setMessage(err.response?.data?.message || "Something went wrong");
//         }
//     };










//     return (
//         < >
//             <div className="h-200 w-380 flex justify-center bg-cover bg-center  flex flex-col
// sm:flex-col
// md:flex-row
// lg:flex-row
// xl:flex-row

//             bg-[url(https://static.wixstatic.com/media/c837a6_992ba64846024ddab0a484c034298629~mv2.jpeg/v1/fill/w_1873,h_1134,fp_0.49_0.23,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_a5d0bc62a83e4ebab069c11b7e15e25a~mv2.jpeg)]">

//                 <motion.div className="h-130 w-300 flex items-center justify-center flex-col"
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1 }}>

//                     <div className="h-20 w-300 flex flex-col justify-center items-center
//                     animate-fadeInUp">
//                         <p className="text-7xl font-serif font-bold text-white mt-50 ">
//                             Discover the beauty of
//                         </p>
//                     </div>

//                     <div className="h-20 w-300 flex justify-center items-center  ">
//                         <p className="text-7xl font-serif font-bold text-white mt-50 ">
//                             Nature at Your Fingertips
//                         </p>
//                     </div>

//                     <br />

//                     <button className="bg-green-400 text-black hover:bg-green-500 mt-30
//                     px-6 py-2 rounded-lg
//                     transition-all duration-500
//                     hover:scale-110 hover:shadow-2xl
//                     animate-bounce">
//                         <Link to="/shop" id="hello">Shop Now</Link>
//                     </button>

//                 </motion.div>
//             </div >


//             <div className="h-300 w-full  flex flex-col  items-center bg-taupe-300 flex flex-col
// sm:flex-col
// md:flex-row
// lg:flex-row
// xl:flex-row
// ">
//                 <motion.div className="h-320 w-370  flex flex-col  items-center "
//                     initial={{ opacity: 0, x: -100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: true, amount: 0.2 }}

                
//                 >
//                     <h1 className="text-3xl font-bold my-6">Trending Products</h1>
//                     <div className="flex flex-wrap justify-evenly b p-6 gap-8">
//                         {
//                             items.map((item) => (
//                                 <div

//                                     key={item._id}
//                                     className="flex flex-col items-center cursor-pointer p-4  rounded-lg hover:shadow-lg "
//                                 >

//                                     <img
//                                         onClick={() => goToProduct(item._id)}
//                                         className="h-95 w-70 object-cover gap-4"
//                                         src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
//                                         alt={item.name}
//                                     ></img>

//                                     <p className="text-xl ">{item.name}</p>
//                                     <p className="text-2xl">Price : ${item.price}</p>
//                                     <div className="flex gap-4">
//                                         <button
//                                                 onClick={() => { addcart(item) }}
//                                                 className="mt-3 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-black font-semibold rounded-lg shadow transition"
//                                             >
//                                                 Add to cart
//                                             </button>
                                        
//                                     </div>


//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </motion.div>
//                 {/* <button className="mt-9">Explor More</button> */}




//             </div>


            






//             <div className="h-150 w-380 flex flex-col items-center bg-cover bg-center
//             bg-[url(https://static.wixstatic.com/media/c837a6_35bdfabce3724dad92a9f8828437078e~mv2.jpeg/v1/fill/w_1873,h_945,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_85e5f4e9599f470cb22efaa7e0cf7d8f~mv2.jpeg)]">

              
//                 <motion.div className="h-150 w-380 flex flex-col items-center bg-cover bg-center "
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1.5 }}
//                     viewport={{ once: true, amount: 0.2 }}
                    
                
//                 >
//                 <div className="h-20 w-300 flex flex-col justify-center items-center
//                 animate-fadeInUp" >
                    
//                     <p className="text-5xl font-serif font-bold text-white mt-50
//                     animate-slideDown duration-1000">
//                         Everything You Need to Know About Plants
//                     </p>
//                 </div>

//                 <div className="h-20 w-250 flex justify-center items-center
//                 animate-fadeInUp delay-300">
//                     <p className="text-5xl font-serif font-bold text-white mt-50
//                     animate-slideUp duration-1000">
//                         and More. No Spam, We Promise
//                     </p>
//                 </div>

//                 <div className="h-20 w-250 flex justify-center items-center
//                 animate-fadeInUp delay-500">
//                     <p className="text-2xl font-serif font-bold text-white mt-50">
//                         Subscribe now and get 15% off...
//                     </p>
//                 </div>

//                 <br />

//                 <div className="h-20 w-250 flex justify-center items-center">
//                     <button className="font-serif font-bold mt-30
//                     px-6 py-2 rounded-lg bg-white text-black
//                     transition-all duration-500
//                     hover:scale-110 hover:bg-green-400 hover:text-black
//                     hover:shadow-xl  animate-bounce">
//                         Subscibe Now
//                     </button>
//                 </div>

//                 </motion.div>
//             </div>

           

//         </>
//     )
// }

// export default Home


// import { Link } from "react-router-dom"
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react"
// import axios from "axios"
// import toast from "react-hot-toast";

// function Home() {

//     const [items, setitems] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("https://e-commerce-websit-2g7x.onrender.com/api/products");
//                 console.log("Frontend data:", res.data);
//                 setitems(res.data);

//             } catch (error) {
//                 console.log("Error fetching ", error.message)
//             }
//         };

//         fetchProducts();

//     }, [])


//     const addcart = async (data) => {
//         try {
//             const res = await axios.post("https://e-commerce-websit-2g7x.onrender.com/api/addcart", {
//                 name: data.name,
//                 price: data.price,
//                 img: data.img,
//             });
//             toast.success("succesfully added to cart");

//         } catch (err) {
//             toast.error("Something went wrong");
//         }
//     };

//     return (
//         <>
//             {/* HERO SECTION */}
//             <div className="min-h-screen w-full flex justify-center bg-cover bg-center flex-col md:flex-row
//             bg-[url(https://static.wixstatic.com/media/c837a6_992ba64846024ddab0a484c034298629~mv2.jpeg/v1/fill/w_1873,h_1134,fp_0.49_0.23,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_a5d0bc62a83e4ebab069c11b7e15e25a~mv2.jpeg)]">

//                 <motion.div
//                     className="flex items-center justify-center flex-col text-center px-6"
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1 }}
//                 >

//                     <p className="text-4xl md:text-6xl font-serif font-bold text-white mt-20">
//                         Discover the beauty of
//                     </p>

//                     <p className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">
//                         Nature at Your Fingertips
//                     </p>

//                     <button className="bg-green-400 text-black hover:bg-green-500 mt-10
//                     px-6 py-2 rounded-lg
//                     transition-all duration-500
//                     hover:scale-110 hover:shadow-2xl
//                     animate-bounce">
//                         <Link to="/shop">Shop Now</Link>
//                     </button>

//                 </motion.div>
//             </div>


//             {/* TRENDING PRODUCTS */}
//             <div className="min-h-screen w-full flex flex-col items-center bg-taupe-300 px-4">

//                 <motion.div
//                     className="w-full max-w-7xl flex flex-col items-center"
//                     initial={{ opacity: 0, x: -100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                 >

//                     <h1 className="text-3xl font-bold my-6 text-center">Trending Products</h1>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">

//                         {items.map((item) => (
//                             <div
//                                 key={item._id}
//                                 className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:shadow-lg"
//                             >

//                                 <img
//                                     className="h-72 w-full object-cover"
//                                     src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
//                                     alt={item.name}
//                                 />

//                                 <p className="text-xl mt-2 text-center">{item.name}</p>
//                                 <p className="text-2xl">Price : ${item.price}</p>

//                                 <button
//                                     onClick={() => addcart(item)}
//                                     className="mt-3 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-black font-semibold rounded-lg shadow transition"
//                                 >
//                                     Add to cart
//                                 </button>

//                             </div>
//                         ))}

//                     </div>

//                 </motion.div>
//             </div>


//             {/* SUBSCRIBE SECTION */}
//             <div className="min-h-[500px] w-full flex flex-col items-center bg-cover bg-center
//             bg-[url(https://static.wixstatic.com/media/c837a6_35bdfabce3724dad92a9f8828437078e~mv2.jpeg/v1/fill/w_1873,h_945,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_85e5f4e9599f470cb22efaa7e0cf7d8f~mv2.jpeg)]">

//                 <motion.div
//                     className="flex flex-col items-center text-center px-6"
//                     initial={{ opacity: 0, y: 100 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1.5 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                 >

//                     <p className="text-3xl md:text-5xl font-serif font-bold text-white mt-20">
//                         Everything You Need to Know About Plants
//                     </p>

//                     <p className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
//                         and More. No Spam, We Promise
//                     </p>

//                     <p className="text-xl font-serif font-bold text-white mt-6">
//                         Subscribe now and get 15% off...
//                     </p>

//                     <button className="font-serif font-bold mt-10
//                     px-6 py-2 rounded-lg bg-white text-black
//                     transition-all duration-500
//                     hover:scale-110 hover:bg-green-400 hover:text-black
//                     hover:shadow-xl animate-bounce">
//                         Subscribe Now
//                     </button>

//                 </motion.div>
//             </div>

//         </>
//     )
// }

// export default Home;


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
            {/* ================= HERO ================= */}

            <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center
            bg-[url(https://static.wixstatic.com/media/c837a6_992ba64846024ddab0a484c034298629~mv2.jpeg)]">

                <div className="w-full max-w-screen-2xl px-6">

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        <p className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
                            Discover the beauty of
                        </p>

                        <p className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mt-4">
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


            {/* ================= PRODUCTS ================= */}

            <div className="w-full bg-taupe-300 py-10">

                <div className="max-w-screen-2xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <h1 className="text-3xl font-bold text-center mb-10">
                            Trending Products
                        </h1>

                        <div className="grid
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-8">

                            {items.map((item) => (

                                <div
                                    key={item._id}
                                    className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition"
                                >

                                    <img
                                        className="h-64 w-full object-cover rounded-lg"
                                        src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
                                        alt=""
                                    />

                                    <p className="text-xl mt-2 text-center">
                                        {item.name}
                                    </p>

                                    <p className="text-2xl text-center">
                                        ${item.price}
                                    </p>

                                    <button
                                        onClick={() => addcart(item)}
                                        className="mt-3 w-full py-2
                                        bg-pink-600 hover:bg-pink-700
                                        rounded-lg text-white"
                                    >
                                        Add to cart
                                    </button>

                                </div>

                            ))}

                        </div>

                    </motion.div>

                </div>

            </div>


            {/* ================= SUBSCRIBE ================= */}

            <div className="w-full min-h-[500px] bg-cover bg-center flex items-center justify-center
            bg-[url(https://static.wixstatic.com/media/c837a6_35bdfabce3724dad92a9f8828437078e~mv2.jpeg)]">

                <div className="max-w-screen-2xl px-6 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >

                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            Everything You Need to Know About Plants
                        </p>

                        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
                            and More. No Spam, We Promise
                        </p>

                        <p className="text-xl text-white mt-5">
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