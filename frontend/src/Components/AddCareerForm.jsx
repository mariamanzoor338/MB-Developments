import { useState } from "react";
import { useUser } from "../context/UserContext";
import { addCareer } from "../utils/helpers";
import toast from "react-hot-toast";

export default function AddCareerForm({ onclick }) {
    const [formData, setFormData] = useState({ heading: "", description: "" });
    const { token } = useUser();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!formData.heading || !formData.description) {
            toast.error("Please fill out the form");
            return;
        }

        await addCareer(formData, token);
    }

    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className=" flex justify-between mb-4">
                    <h1 className=" text-lg font-bold text-[#444]">
                        Add Career Form
                    </h1>
                    <button className="" onClick={onclick}>
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
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <form className="flex flex-col gap-5 mb-4">
                    <div>
                        <label htmlFor="career-heading" className=" mb-2 block">
                            Heading
                        </label>
                        <input
                            type="text"
                            id="career-heading"
                            placeholder="Job Heading"
                            className=" border rounded-md px-3 py-2 w-full "
                            value={formData.heading}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    heading: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="career-description"
                            className=" mb-2 block"
                        >
                            Description
                        </label>
                        <textarea
                            type="text"
                            id="career-description"
                            placeholder="Description"
                            className=" border rounded-md px-3 w-full"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>

                    <button
                        className=" self-start my-2 block me-3 text-white bg-blue-900 rounded-lg px-4 py-3 "
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Add Career
                    </button>
                </form>
            </div>
        </div>
    );
}
