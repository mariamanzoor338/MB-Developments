export default function TeamCard({ imageUrl, name, designation }) {
    return (
        <div className=" flex items-center justify-center flex-col p-6 border rounded-md text-[#444] hover:bg-blue-900 hover:translate-y-[-6px] hover:text-white transition-all ease-in-out duration-500 font-inter ">
            <img
                src={imageUrl}
                alt=""
                className=" w-[50%] h-full rounded-full mb-4"
            />
            <h2 className=" text-base md:text-lg lg:text-xl font-semibold mb-4">
                {name}
            </h2>
            <p className=" text-base md:text-lg lg:text-xl mb-4">
                {designation}
            </p>
        </div>
    );
}
