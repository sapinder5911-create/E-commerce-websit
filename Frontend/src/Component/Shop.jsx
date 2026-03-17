// // import { div } from "framer-motion/client"
// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";


// function Shop() {
//     const Navigate = useNavigate();
//     const [items, setitems] = useState([]);

//     const role = localStorage.getItem("role");
    

//     const handleBuyNow = (id) => {
//         Navigate(`/checkout/${id}`);
//     };

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
    

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("https://e-commerce-websit-2g7x.onrender.com/api/products", );
//                 console.log("Frontend data:", res.data);
//                 setitems(res.data);

//             } catch (error) {
//                 console.log("Error fetching ", error.message)
//             }
//         };

//         fetchProducts();

//     }, [])
    
//     const goToProduct = (id) => {
//         Navigate(`/products/${id}`);
//     }
    
//     return (
//         <div className="h-420 w-full  flex flex-col  items-center bg-taupe-300">
//             <div className="h-320 w-370  flex flex-col  items-center " >
//                 <h1 className="text-3xl font-bold my-6">Trending Products</h1>
//             <div className="flex flex-wrap justify-evenly b p-6 gap-8">
//                 {
//                     items.map((item) => (
//                         <div
                        
//                             key={item._id}
//                             className="flex flex-col items-center cursor-pointer p-4  rounded-lg hover:shadow-lg "
//                         >
                            
//                             <img
//                                 onClick={() => goToProduct(item._id)}
//                                 className="h-95 w-70 object-cover gap-4"
//                                 src={`https://e-commerce-websit-2g7x.onrender.com/uploads/${item.img}`}
//                                 alt={item.name}
//                             ></img>

//                             <p className="text-xl ">{item.name}</p>
//                             <p className="text-2xl">Price : ${item.price}</p>
//                             <div className="flex gap-4">
//                                 {
//                                     role === "user" && (<button
//                                         onClick={() => { addcart(item) }}
//                                         className="mt-3 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-black font-semibold rounded-lg shadow transition"
//                                     >
//                                         Add to cart
//                                     </button>)
//                               }
//                                 <button onClick={() => handleBuyNow(item._id)}  className="px-4 py-2 mt-3">Buy Now</button>
//                                 </div>
                            
                            
//                     </div>
//                     ))
//                 }
//                 </div>
//             </div>
//             {/* <button className="mt-9">Explor More</button> */}



           
//         </div>
//     )
// }

// export default Shop



// import { div } from "framer-motion/client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Shop() {
    const Navigate = useNavigate();
    const [items, setitems] = useState([]);

    const role = localStorage.getItem("role");


    const handleBuyNow = (id) => {
        Navigate(`/checkout/${id}`);
    };

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

    const goToProduct = (id) => {
        Navigate(`/products/${id}`);
    }

    return (
        <div className="w-full flex flex-col items-center bg-taupe-300 min-h-screen">

            <div className="w-full max-w-[1400px] flex flex-col items-center">

                <h1 className="text-2xl sm:text-3xl font-bold my-6">
                    Trending Products
                </h1>

                {/* responsive container */}
                <div className="flex flex-wrap justify-center p-4 gap-6">

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
                                        role === "user" && (
                                            <button
                                                onClick={() => { addcart(item) }}
                                                className="   mt-3  px-4 sm:px-6  py-2  bg-pink-600  hover:bg-pink-700 text-black font-semibold rounded-lg shadow   transition text-sm sm:text-base
                                                "
                                            >
                                                Add to cart
                                            </button>
                                        )
                                    }

                                    <button
                                        onClick={() => handleBuyNow(item._id)}
                                        className="  px-4  py-2   mt-3   text-sm  sm:text-base
                                        "
                                    >
                                        Buy Now
                                    </button>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Shop