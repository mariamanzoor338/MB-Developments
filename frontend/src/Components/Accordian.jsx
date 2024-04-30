import { useState } from "react";
import { faqData } from "../data";

export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <>
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={` mt-0 border p-5 rounded-md ${
                        activeIndex === index
                            ? " border-b-4 border-b-blue-600 "
                            : ""
                    } `}
                >
                    <div
                        className=" flex justify-between items-center  cursor-pointer "
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{item.question}</span>
                        <button className=" text-lg">
                            {activeIndex === index ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={`${
                            activeIndex === index ? "block mt-3" : " hidden "
                        }`}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </>
    );
}
