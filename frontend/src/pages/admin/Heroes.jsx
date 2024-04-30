import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Loader from "../../Components/Loader";
import { deleteHero, fetchHeroes } from "../../utils/helpers";
import AddHeroForm from "../../Components/AddHeroForm";

export default function Heroes() {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const { token } = useUser();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await fetchHeroes();
            setHeroes(data);
            setLoading(false);
        }
        fetchData();
    }, [setHeroes]);

    const handleDeleteHero = async (careerId) => {
        setLoading(true);
        await deleteHero(careerId, token);
        const updatedCareers = await fetchHeroes();
        setHeroes(updatedCareers);
        setLoading(false);
    };

    if (loading)
        return (
            <div className=" h-full flex items-center justify-center">
                <Loader />
            </div>
        );
    return (
        <div className="relative overflow-x-auto overflow-y-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:my-12 text-[#444] ">
                Heroes Section
            </h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Punchline
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {heroes?.map((hero, i) => {
                        return (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={i}
                            >
                                <td
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <img
                                        src={hero.heroImage}
                                        alt=""
                                        className=" w-14 h-14 rounded-full border-white box-content"
                                    />
                                </td>
                                <td className="px-6 py-4 max-w-lg">
                                    {hero.description}
                                </td>
                                <td className="px-6 py-4 max-w-lg">
                                    {hero.punchLine}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => {
                                            handleDeleteHero(hero._id);
                                        }}
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
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button
                onClick={() => setShowForm(!showForm)}
                className=" self-end my-2 ms-auto block me-3 text-white bg-blue-900 rounded-lg px-4 py-3 "
            >
                Add Hero
            </button>

            {showForm && (
                <div>
                    <AddHeroForm onclick={() => setShowForm(false)} />
                </div>
            )}
        </div>
    );
}
