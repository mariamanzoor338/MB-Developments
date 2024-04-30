export default function SmallSolutionsCard({ imageUrl, heading, text }) {
    return (
        <div className="flex justify-between shadow-lg p-6 border">
            <div>
                <h2 className=" text-xl text-[#444] font-bold mb-3">
                    {heading}
                </h2>
                <p className=" text-[#444]">{text}</p>
            </div>
            <img src={imageUrl} alt="" className=" w-1/4 hidden md:block" />
        </div>
    );
}
