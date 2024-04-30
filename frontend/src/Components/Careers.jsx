import { useEffect, useState } from "react";
import { fetchCareers } from "../utils/helpers";
import CareerCard from "./CareerCard";
import Button from "../Components/Button";
export default function Careers() {
    const [careers, setCareers] = useState([]);

    async function fetchData() {
        const data = await fetchCareers();
        setCareers(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!careers.length) {
        return (
            <section
                id="careers"
                className=" my-3 text-white font-inter p-6 rounded-md"
                style={{
                    backgroundImage:
                        "url(https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg)",
                }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 ">
                    Careers
                </h2>
                <p className="mb-4 text-base md:text-lg">
                    We Currently have no job/internship opening but you can send
                    your resume to{" "}
                    <a href="mailTo:mbdevelopment161@gmail.com">
                        <b>mbdevelopment161@gmail.com</b>
                    </a>{" "}
                    and we will get back to you in case there is an opening or
                    we might create a new position for you who knows!!
                </p>
                <button className="block ms-auto">
                    <Button text="Learn More" location="/careers" />
                </button>
            </section>
        );
    }
    return (
        <section id="careers" className=" my-3 font-inter p-6 rounded-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444] ">
                Careers
            </h2>
            <p className="text-base md:text-lg mb-3 text-[#444]">
                We are Currently hiring for the following positions kindly send
                your resume to{" "}
                <a href="mailto:mbdevelopment161@gmail.com">
                    <b>mbdevelopment161@gmail.com</b>
                </a>{" "}
                and we will get back to you. If you are not eligible for the
                following positions feel free to send your resume.. We might
                create a new position for you who knows!!
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
            <button className="block ms-auto">
                <Button text="Learn More" location="/careers" />
            </button>
        </section>
    );
}
