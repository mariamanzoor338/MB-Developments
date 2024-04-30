export default function ServiceCard({ imageUrl, name, listItems }) {
    return (
        <div className="flex cursor-pointer flex-col border rounded-lg shadow-lg hover:shadow-2xl transition-all ease-in-out pb-4 overflow-hidden">
            <div className="mb-8 h-[200px] overflow-hidden">
                <img src={imageUrl} alt="Image" className=" w-full" />
            </div>
            <div className=" px-6">
                <h2 className=" text-2xl md:text-3xl font-bold text-[#444] mb-4">
                    {name}
                </h2>
                <ul className="text[#444] text-base md:text-lg flex-1 flex flex-col gap-3 md:text-center ">
                    {listItems?.map((item, i) => {
                        return (
                            <li className="flex items-center gap-3" key={i}>
                                <span className=" w-6 h-6 flex items-center justify-center border-2 border-blue-500 rounded-full  ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#444"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
