


import { Link } from "react-router-dom"
import { motion } from "framer-motion";

function About() {
    return (
        <div className="min-h-screen w-full flex flex-col">

            <div className="min-h-[650px] w-full flex flex-col justify-center items-center bg-cover bg-center
            bg-[url(https://static.wixstatic.com/media/11062b_3124664d3f4747b8ac3f20021182544c~mv2.jpg/v1/fill/w_1801,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Greenhouse%20Garden%20View.jpg)]">

                <motion.div
                    className="w-full max-w-6xl flex items-center justify-center flex-col px-4 text-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >

                    <div className="flex justify-center items-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                            About
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white">
                            We are Passionate
                        </p>
                    </div>

                    <div>
                        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white">
                            About Our Work
                        </p>
                    </div>

                </motion.div>
            </div>


            <div className="min-h-[650px] w-full bg-cover bg-center
            bg-[url(https://images.pexels.com/photos/2239676/pexels-photo-2239676.jpeg)]">

                <motion.div
                    className="max-w-5xl mx-auto flex flex-col justify-center items-start gap-6 px-4 py-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-10 ml-10">
                        We Strive to <br /> Provide Our 
                        Customers <br /> with the hightest quality
                    </p>

                    <p className="text-sm sm:text-lg md:text-xl font-serif font-bold mt-2 ml-10">
                        Plants's Co . was founded in 1960 by a group or plant <br />entnusiasts
                        recognized the positive impact that plants can <br />on our lives.
                        Whether it's purifying the air, reducing stress, <br />or simply
                        adding a touch of beauty to your environments, <br /> plants are more
                        than lust decoration-ney re a lifestyle
                    </p>

                    <button className="text-green-400 text-lg ml-10">
                        <Link to="/Login" id="hello">Contect us</Link>
                    </button>

                </motion.div>

            </div>

        </div>
    )
}

export default About