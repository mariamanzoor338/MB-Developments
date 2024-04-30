import { useState } from "react";
import { addHero } from "../utils/helpers";
import { useUser } from "../context/UserContext";

export default function AddHeroForm({ onclick }) {
    const [formData, setFormData] = useState({
        description: "",
        punchline: "",
        image: null,
    });

    const { token } = useUser();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addHero(formData, token);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData({
            ...formData,
            image: file,
        });
    };
    return (
        <div className="modal-background">
            <div className="modal-content">
                <div className="flex justify-between mb-4">
                    <h1 className="text-lg font-bold text-[#444]">
                        Add Hero form
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

                <form
                    className="flex flex-col gap-5 mb-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label htmlFor="herodescription" className="mb-2 block">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="herodescription"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="border rounded-md px-3 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="heropunchline" className="mb-2 block">
                            Punchline
                        </label>
                        <input
                            type="text"
                            name="punchline"
                            placeholder="Punchline"
                            value={formData.punchline}
                            onChange={handleInputChange}
                            className="border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="heroimage" className="mb-2 block">
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            className="block"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
