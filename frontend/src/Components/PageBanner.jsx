import { Link } from "react-router-dom";

export default function PageBanner({ imageUrl, page_link, page_link_text }) {
    return (
        <div className=" xl:h-[40vh] lg:h-[50vh] md:h-[30vh] h-[20vh] overflow-hidden relative ">
            <img
                src={imageUrl}
                alt=""
                className=" absolute w-full top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]"
            />
            <div className="text-lg p-6 text-white font-semibold relative ">
                <Link to={"/"}>Home</Link>
                {" > "}
                <Link to={page_link}>{page_link_text}</Link>
            </div>
        </div>
    );
}
