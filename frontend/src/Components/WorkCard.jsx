export default function WorkCard({ heading, items }) {
    return (
        <div className=" shadow-lg  border-l-4 border-l-green-600 p-5 rounded-lg border">
            <h2 className="text-xl md:text-2xl font-bold mb-1 text-[#444]">
                {heading}
            </h2>
            <div className="flex flex-col md:flex-row gap-y-4">
                <div className="mt-4 flex-1 pe-6">
                    <div className="text-base text-[#444] ">
                        {items?.map((item, i) => {
                            return (
                                <div key={i}>
                                    <p className=" mb-2">
                                        <b>{item.heading}:</b>{" "}
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
