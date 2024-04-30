import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { logout } = useUser();
    return (
        <div className=" grid grid-cols-12 grid-rows-12 h-screen overflow-y-hidden ">
            <header className=" md:col-start-3 md:row-start-1 col-span-full shadow-md border-b flex items-center md:justify-normal justify-between px-3">
                <div className=" flex items-center gap-2 md:ms-auto ">
                    <button
                        className="md:hidden block me-0 "
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                            />
                        </svg>
                    </button>
                    <p className="font-semibold">Welcome Back!!</p>
                </div>
                <button
                    className=" mx-3 px-3 py-2 bg-blue-900 text-white rounded-lg flex gap-3 items-center"
                    onClick={() => logout()}
                >
                    Logout{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                    </svg>
                </button>
            </header>
            <aside
                className={` absolute w-1/2 z-10 inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 transition-all ease-in-out duration-1000"
                        : "translate-x-[-100%] transition-all ease-in-out"
                } md:translate-x-0 md:relative md:col-start-1 md:col-end-5 md:row-start-1 h-screen border flex items-center flex-col px-4 py-4 bg-slate-400`}
            >
                <button
                    className=" block md:hidden self-end"
                    onClick={() => setSidebarOpen(false)}
                >
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
                <Link to="/" className="text-center py-3 border-b self-stretch">
                    <img
                        src={logo}
                        alt="MB Developments"
                        className=" w-24 h-24 rounded-full block m-auto mb-4"
                    />
                    <p>MB Developments</p>
                </Link>
                <div className=" self-stretch flex flex-col text-center gap-9 py-5">
                    <NavLink to="/admin/heros" className="py-2">
                        Heroes
                    </NavLink>
                    <NavLink to="/admin/careers/">Careers</NavLink>
                </div>
            </aside>
            <main
                className=" md:col-start-3 col-span-full h-screen overflow-y-scroll  p-3"
                onClick={() => setSidebarOpen(false)}
            >
                <Outlet />
            </main>
        </div>
    );
}
