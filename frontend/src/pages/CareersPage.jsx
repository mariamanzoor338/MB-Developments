import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Header from "../Components/Header";
import PageBanner from "../Components/PageBanner";
import Footer from "../Components/Footer";
import WorkCard from "../Components/WorkCard";
import { whyWorkWithUsData } from "../data";
import { fetchCareers } from "../utils/helpers";
import CareerCard from "../Components/CareerCard";
import Accordian from "../Components/Accordian";

export default function CareersPage() {
    const [loading, setLoading] = useState(false);
    const [careers, setCareers] = useState([]);

    async function fetchData() {
        setLoading(true);
        const data = await fetchCareers();
        setCareers(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading)
        return (
            <div className=" h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    return (
        <div className=" relative">
            <Header />
            <PageBanner
                imageUrl={
                    "https://belmac.in/wp-content/uploads/2023/07/Careers-1.png"
                }
                page_link={"/careers"}
                page_link_text={"Careers"}
            />
            <main className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444]">
                    Why Work With Us
                </h2>
                <div className="flex flex-col md:flex-row gap-y-4">
                    <div className="mt-4 flex-1 pe-6">
                        <p className=" text-base md:text-lg text-[#444] ">
                            At MB Developements, we believe in more than just
                            writing code. We are a team of passionate
                            innovators, problem-solvers, and creators who thrive
                            on collaboration and pushing the boundaries of what
                            is possible in the digital world. Here is why you
                            should consider joining our team:
                        </p>
                    </div>
                    <div className=" flex-1">
                        <img
                            src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej.jpg"
                            alt=""
                            className=" w-full block m-auto"
                        />
                    </div>
                </div>

                <div className=" grid md:grid-cols-3 grid-cols-1 gap-2 mb-4">
                    {whyWorkWithUsData.map((item, i) => (
                        <WorkCard
                            key={i}
                            heading={item.heading}
                            items={item.items}
                        />
                    ))}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-2  text-[#444]">
                    Open Positions
                </h2>
                <div>
                    {!careers.length ? (
                        <div>
                            <p className="text-base md:text-lg text-[#444]">
                                We Currently have no job/internship opening but
                                you can send your resume to{" "}
                                <a href="mailto:mbdevelopment161@gmail.com">
                                    <b>mbdevelopment161@gmail.com</b>
                                </a>{" "}
                                and we will get back to you in case there is an
                                opening or we might create a new position for
                                you who knows!!
                            </p>
                        </div>
                    ) : (
                        <>
                            <p className="text-base md:text-lg mb-3 text-[#444]">
                                We are Currently hiring for the following
                                positions kindly send your resume to{" "}
                                <a href="mailto:mbdevelopment161@gmail.com">
                                    <b>mbdevelopment161@gmail.com</b>
                                </a>{" "}
                                and we will get back to you. If you are not
                                eligible for the following positions feel free
                                to send your resume.. We might create a new
                                position for you who knows!!
                            </p>
                            <div className=" grid md:grid-cols-3 grid-cols-1 gap-3">
                                {careers?.map((career) => {
                                    return (
                                        <div key={career._id}>
                                            <CareerCard {...career} />
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2 mt-4 md:mb-4 text-[#444]">
                    FAQS
                </h2>
                <Accordian />
            </main>

            <Footer />
        </div>
    );
}
