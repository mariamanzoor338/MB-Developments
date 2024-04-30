import { useState } from "react";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import Loader from "../../Components/Loader";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const user = useUser();

    function resetForm() {
        setFormData({ username: "", password: "" });
    }

    async function LoginAdmin(data, user) {
        try {
            setLoading(true);
            try {
                const response = await fetch(
                    "https://backend-server-hero.onrender.com/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );
                const responseData = await response.json();
                if (responseData.error === "Invalid credentials") {
                    toast.error("Invalid User name or password");
                    setLoading(false);
                    return;
                }

                user.login(responseData.token);
                setLoading(false);
            } catch (error) {
                toast.error(error.message);
            }
            return true;
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
            return false;
        }
    }

    async function handleSumbit(event) {
        event.preventDefault();
        if (!formData.username || !formData.password) {
            toast.error("Please enter a username and password");
            resetForm();
            return;
        }

        const success = await LoginAdmin(formData, user);
        if (success) {
            setSuccess(true);
        }
    }

    if (loading)
        return (
            <div className=" h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    if (success) return <Navigate to={"/admin/heros"} />;
    return (
        <main className=" min-h-screen flex items-center justify-center flex-col">
            <div className="p-10 border shadow-lg rounded-lg md:w-1/3">
                <form className=" flex flex-col gap-5  mb-4 ">
                    <img
                        src={logo}
                        alt=""
                        className="block m-auto w-20 h-20 rounded-full"
                    />
                    <h1 className="font-semibold text-xl mb-4 text-center ">
                        MB Developements
                    </h1>

                    <div className=" flex flex-col gap-3">
                        <label
                            htmlFor="username"
                            className=" px-3 font-semibold text-[#444]"
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="px-3 py-4 border rounded-md font-inter"
                            placeholder="Enter Your User Name"
                            value={formData.username}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className=" flex flex-col gap-3">
                        <label
                            htmlFor="password"
                            className=" px-3 font-semibold text-[#444]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="px-3 py-4 border rounded-md font-inter"
                            placeholder="Enter Your User Name"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className=" self-start px-3 py-3 pe-6 bg-blue-900 text-white font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out rounded-md "
                        onClick={(e) => handleSumbit(e)}
                    >
                        Submit &rarr;
                    </button>
                </form>
            </div>
        </main>
    );
}
