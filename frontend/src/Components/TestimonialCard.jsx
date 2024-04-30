import StarRating from "./StarRating";

export default function TestimonialCard() {
    return (
        <div className=" font-inter border me-2 px-6 py-28 text-center rounded-md text-white bg-slate-700 transition-all duration-300 ease-in-out">
            <img
                src="https://bebopbusiness.no/wp-content/uploads/2016/12/spearker_1-300x300.jpg"
                alt=""
                className="w-28 h-28 rounded-full block m-auto mb-6"
            />
            <div className="text-center flex items-center justify-center gap-1 mb-4">
                <StarRating filled={true} />
                <StarRating filled={true} />
                <StarRating filled={true} />
                <StarRating filled={true} />
                <StarRating filled={false} />
            </div>

            <p className=" text-sm md:text-base font-inter mb-4 md:max-w-[50%] w-[90%] m-auto ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                expedita. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sit sunt nulla libero, nemo incidunt tempora deserunt!
                Eligendi aut aliquid tempore porro maxime, laudantium quibusdam
                eius iure impedit sint ducimus itaque.
            </p>

            <span className=" block m-auto my-2 font-semibold">John Green</span>
        </div>
    );
}
