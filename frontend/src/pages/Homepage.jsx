import { useState } from "react";
import AboutUs from "../Components/AboutUs";
import Careers from "../Components/Careers";
import ChosseUs from "../Components/ChosseUs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import OurTeam from "../Components/OurTeam";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";

export default function Homepage() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    window.addEventListener("scroll", toggleVisible);

    return (
        <div className="relative">
            <Header />
            <Hero />
            <main className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5">
                <AboutUs />
                <Services />
                <ChosseUs />
                <Careers />
                <OurTeam />
                <Testimonials />

                <ContactUs />
            </main>
            <button
                className={`border-[5px] rounded-full z-[500] p-2 bg-blue-500 h-14 w-14 flex items-center justify-center ${
                    visible ? "block" : "hidden"
                } `}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                }}
                onClick={() => scrollToTop()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                    strokeWidth="3"
                    className="w-6 h-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <Footer />
        </div>
    );
}
