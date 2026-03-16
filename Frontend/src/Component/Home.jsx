
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


// import { ShoppingCart } from "lucide-react"
// import { Link, useNavigate } from "react-router-dom"
// import { User } from "lucide-react"
// import { Trash } from "lucide-react"
// import { useState, useEffect } from "react"
// import { jwtDecode } from "jwt-decode";
// import axios from "axios"
// import Logo1 from "../assets/logo.jpeg"
// import "./Nav.css"

// function Nav() {

//     const [profilePic, setProfilePic] = useState(null)

//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

//     const role = localStorage.getItem("role");
//     const token = localStorage.getItem("token");
//     let userName = null;

//     if (token) {
//         try {
//             const decoded = jwtDecode(token);
//             userName = decoded.name;
//         } catch (e) {
//             console.log("Invalid token");
//         }
//     }

//     const [items, setitems] = useState([]);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("https://e-commerce-websit-2g7x.onrender.com/api/getcart");
//                 setitems(res.data);
//             } catch (err) {
//                 console.error("Error fetching:", err.message);
//             }
//         };
//         fetchProducts();
//     }, []);

//     const deleteCartItem = async (id) => {
//         try {
//             await axios.delete(
//                 `https://e-commerce-websit-2g7x.onrender.com/api/deletecart/${id}`,
//             );
//             setitems((prev) => prev.filter((item) => item._id !== id));
//         } catch (err) {
//             console.log("Failed to delete");
//         }
//     };

//     const Navigate = useNavigate();

//     const handleLogout = async () => {
//         try {
//             await axios.post(
//                 "https://e-commerce-websit-2g7x.onrender.com/api/logout",
//                 {},
//                 { withCredentials: true }
//             );

//             localStorage.removeItem("token");
//             localStorage.removeItem("role");

//             setIsLoggedIn(false);

//             Navigate("/login");

//         } catch (err) {
//             console.error("Logout failed", err);
//         }
//     };

//     return (

//         <div className="w-full min-h-20 flex items-center justify-center bg-[url(https://static.wixstatic.com/media/c837a6_35bdfabce3724dad92a9f8828437078e~mv2.jpeg)] bg-cover bg-center">

//             {/* container */}
//             <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-between gap-4 text-xl">

//                 {/* LEFT */}
//                 <div className="flex w-full lg:w-auto items-center justify-between lg:justify-start">

//                     <a href="" id="hello" className="text-white text-2xl">
//                         🌿Plants
//                     </a>

//                     {/* menu */}
//                     <div className="hidden md:flex gap-6 text-white ml-10">
//                         <Link to="/" id="hello" className="text-blue-400 hover:text-blue-600">
//                             Home
//                         </Link>

//                         <Link to="/about" id="hello" className="text-green-400 hover:text-green-600">
//                             About
//                         </Link>

//                         <Link to="/shop" id="hello" className="text-yellow-400 hover:text-yellow-600">
//                             Shop
//                         </Link>
//                     </div>

//                 </div>


//                 {/* RIGHT */}
//                 <div className="flex items-center gap-4 flex-wrap justify-center lg:justify-end">

//                     {/* ACCOUNT */}
//                     <details className="dropdown">

//                         <summary className="btn bg-transparent border-none shadow-none text-black flex items-center gap-2">
//                             <User />
//                             <span className="hidden sm:inline">Account</span>
//                         </summary>

//                         <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-sm text-black">

//                             {!localStorage.getItem("token") && (
//                                 <li>
//                                     <Link to="/login">
//                                         LOGIN
//                                     </Link>
//                                 </li>
//                             )}

//                             {localStorage.getItem("token") && (
//                                 <li>
//                                     <button onClick={handleLogout}>
//                                         LOGOUT
//                                     </button>
//                                 </li>
//                             )}

//                             {localStorage.getItem("role") === "admin" && (
//                                 <li>
//                                     <Link to="/admin">
//                                         Admin
//                                     </Link>
//                                 </li>
//                             )}

//                         </ul>

//                     </details>


//                     {/* PROFILE */}
//                     {isLoggedIn && (

//                         <details className="dropdown">

//                             <summary className="btn bg-transparent border-none shadow-none flex items-center gap-2">

//                                 <img
//                                     src={profilePic || Logo1}
//                                     alt=""
//                                     className="w-8 h-8 rounded-full"
//                                 />

//                                 <span className="hidden sm:inline">
//                                     {userName}
//                                 </span>

//                             </summary>

//                             <ul className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-sm text-black">

//                                 <li>

//                                     <label className="cursor-pointer">

//                                         Set picture

//                                         <input
//                                             type="file"
//                                             className="hidden"
//                                             onChange={(e) => {
//                                                 const file = e.target.files[0];
//                                                 if (file) {
//                                                     setProfilePic(URL.createObjectURL(file));
//                                                 }
//                                             }}
//                                         />

//                                     </label>

//                                 </li>

//                                 <li>
//                                     <Link to="/userorder">
//                                         Order
//                                     </Link>
//                                 </li>

//                             </ul>

//                         </details>

//                     )}


//                     {/* CART */}
//                     {role === "user" && (

//                         <div className="drawer drawer-end">

//                             <input
//                                 id="my-drawer-5"
//                                 type="checkbox"
//                                 className="drawer-toggle"
//                             />

//                             <div className="drawer-content">

//                                 <label
//                                     htmlFor="my-drawer-5"
//                                     className="btn bg-transparent border-none shadow-none text-black"
//                                 >
//                                     <ShoppingCart />
//                                 </label>

//                             </div>

//                             <div className="drawer-side">

//                                 <label
//                                     htmlFor="my-drawer-5"
//                                     className="drawer-overlay"
//                                 ></label>

//                                 <ul className="menu bg-base-200 min-h-full w-[90vw] sm:w-96 p-4">

//                                     {items.length === 0 ? (

//                                         <li className="text-black text-2xl text-center">
//                                             No items in cart
//                                         </li>

//                                     ) : (

//                                         items.map((item) => (

//                                             <div
//                                                 key={item._id}
//                                                 className="flex gap-3 mt-4 text-black"
//                                             >

//                                                 <img
//                                                     className="h-20 w-20 rounded-xl"
//                                                     src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
//                                                 />

//                                                 <div>

//                                                     <div>
//                                                         {item.name}
//                                                     </div>

//                                                     <div>
//                                                         ${item.price}
//                                                     </div>

//                                                 </div>

//                                                 <button
//                                                     onClick={() => deleteCartItem(item._id)}
//                                                 >
//                                                     <Trash />
//                                                 </button>

//                                             </div>

//                                         ))

//                                     )}

//                                 </ul>

//                             </div>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </div>

//     )
// }

// export default Nav
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
                console.log("Frontend data:", res.data);
                setitems(res.data);

            } catch (error) {
                console.log("Error fetching ", error.message)
            }
        };

        fetchProducts();

    }, [])


    const addcart = async (data) => {
        try {
            const res = await axios.post("https://e-commerce-websit-2g7x.onrender.com/api/addcart", {
                name: data.name,
                price: data.price,
                img: data.img,
            });
            toast.success("succesfully added to cart");

        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            {/* HERO SECTION */}
            <div className="min-h-screen w-full flex justify-center bg-cover bg-center flex-col md:flex-row
            bg-[url(https://static.wixstatic.com/media/c837a6_992ba64846024ddab0a484c034298629~mv2.jpeg/v1/fill/w_1873,h_1134,fp_0.49_0.23,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_a5d0bc62a83e4ebab069c11b7e15e25a~mv2.jpeg)]">

                <motion.div
                    className="flex items-center justify-center flex-col text-center px-6"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >

                    <p className="text-4xl md:text-6xl font-serif font-bold text-white mt-20">
                        Discover the beauty of
                    </p>

                    <p className="text-4xl md:text-6xl font-serif font-bold text-white mt-4">
                        Nature at Your Fingertips
                    </p>

                    <button className="bg-green-400 text-black hover:bg-green-500 mt-10
                    px-6 py-2 rounded-lg
                    transition-all duration-500
                    hover:scale-110 hover:shadow-2xl
                    animate-bounce">
                        <Link to="/shop">Shop Now</Link>
                    </button>

                </motion.div>
            </div>


            {/* TRENDING PRODUCTS */}
            <div className="min-h-screen w-full flex flex-col items-center bg-taupe-300 px-4">

                <motion.div
                    className="w-full max-w-7xl flex flex-col items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <h1 className="text-3xl font-bold my-6 text-center">Trending Products</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">

                        {items.map((item) => (
                            <div
                                key={item._id}
                                className="flex flex-col items-center cursor-pointer p-4 rounded-lg hover:shadow-lg"
                            >

                                <img
                                    className="h-72 w-full object-cover"
                                    src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
                                    alt={item.name}
                                />

                                <p className="text-xl mt-2 text-center">{item.name}</p>
                                <p className="text-2xl">Price : ${item.price}</p>

                                <button
                                    onClick={() => addcart(item)}
                                    className="mt-3 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-black font-semibold rounded-lg shadow transition"
                                >
                                    Add to cart
                                </button>

                            </div>
                        ))}

                    </div>

                </motion.div>
            </div>


            {/* SUBSCRIBE SECTION */}
            <div className="min-h-[500px] w-full flex flex-col items-center bg-cover bg-center
            bg-[url(https://static.wixstatic.com/media/c837a6_35bdfabce3724dad92a9f8828437078e~mv2.jpeg/v1/fill/w_1873,h_945,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_85e5f4e9599f470cb22efaa7e0cf7d8f~mv2.jpeg)]">

                <motion.div
                    className="flex flex-col items-center text-center px-6"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <p className="text-3xl md:text-5xl font-serif font-bold text-white mt-20">
                        Everything You Need to Know About Plants
                    </p>

                    <p className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
                        and More. No Spam, We Promise
                    </p>

                    <p className="text-xl font-serif font-bold text-white mt-6">
                        Subscribe now and get 15% off...
                    </p>

                    <button className="font-serif font-bold mt-10
                    px-6 py-2 rounded-lg bg-white text-black
                    transition-all duration-500
                    hover:scale-110 hover:bg-green-400 hover:text-black
                    hover:shadow-xl animate-bounce">
                        Subscribe Now
                    </button>

                </motion.div>
            </div>

        </>
    )
}

export default Home;