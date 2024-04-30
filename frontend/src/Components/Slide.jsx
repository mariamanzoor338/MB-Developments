import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Slide({ imageUrl, text, featureLine }) {
    const controls = useAnimation();
    const words = text.split(" ");

    const capitalizedSentence = words
        .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");

    const startAnimation = () => {
        controls.start({ x: 0 });
    };

    useEffect(() => {
        controls.start({ x: 0 });
    }, [imageUrl, text, controls]);

    return (
        <motion.div className="w-full cursor-pointer md:h-[100vh] h-[50vh] relative z-20 overflow-hidden">
            <img
                src={imageUrl}
                alt=""
                className="absolute block z-[-1] w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-[30%] z-10"></div>
            <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-5 z-30 text-center w-[70%] flex flex-col items-center ">
                <motion.p
                    className="font-semibold text-white font-roboto leading-6 lg:leading-[90.34px] mb-5 tracking-wider text-xl md:text-2xl lg:text-6xl"
                    initial={{ y: 300 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {capitalizedSentence} <br />
                    <span className=" px-1 py-[0.3px] bg-white rounded-md text-[#FF4C54] font-bold  md:text-2xl lg:text-6xl">
                        {" " + featureLine}
                    </span>{" "}
                </motion.p>
                <motion.a
                    href="#services"
                    className="me-1.5 md:bg-[#125697] md:px-5 py-2.5 font-semibold text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-sm md:text-2xl
                        focus-visible:outline-blue-700 block font-inter"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onClick={startAnimation}
                >
                    Get started <span>&rarr;</span>
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
