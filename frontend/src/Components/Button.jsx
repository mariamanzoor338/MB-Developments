import { Link } from "react-router-dom";

export default function Button({ location, text, onClick }) {
    return (
        <Link
            to={location}
            onClick={onClick}
            className="mt-3 inline-block bg-[rgb(18,86,151)] px-5 py-2.5 font-semibold text-white rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 font-inter hover:bg-blue-900 transition-all  duration-100 ease-linear"
        >
            {text} &rarr;
        </Link>
    );
}
