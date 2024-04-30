export default function ChosseUs() {
    return (
        <section className=" flex flex-col gap-3 my-3">
            <h2 className="font-inter text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                Why Choose Us
            </h2>
            <div className="flex flex-col md:flex-row md:mb-0 mb-5">
                <div className="flex  flex-1 items-center justify-center md:order-2 order-1">
                    <img
                        src="https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg"
                        alt=""
                        className="rounded-lg md:w-[90%] w-full h-full block "
                    />
                </div>

                <div className=" flex-1 md:pe-6 mb-5 md:mb-0 order-1 self-center">
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 md:mt-0 mt-3">
                        Collaboration, Creativity, and Client-Centricity
                    </h2>
                    <p className="font-inter leading-relaxed text-[#444]">
                        At the core of MB Developments is a commitment to
                        collaborative partnerships. We believe in understanding
                        your unique challenges, working closely with you, and
                        delivering solutions that not only meet but anticipate
                        your needs. Our client-centric approach ensures that
                        every project is a reflection of your vision, tailored
                        to your specifications.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:mb-0 mb-5">
                <div className=" flex-1 md:ps-6 mb-5 md:mb-0 order-1 md:order-2 self-center">
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 md:mt-0 mt-3">
                        Innovation Meets Expertise
                    </h2>
                    <p className="font-inter leading-relaxed text-[#444]">
                        When you choose MB Developments, you choose a team that
                        thrives on innovation and embraces the latest industry
                        trends. Our experts are not just developers; they are
                        visionaries who transform ideas into reality. Whether
                        {`you're`} a forward-thinking business looking for
                        digital transformation or a recent graduate eager to
                        embark on a rewarding career journey, MB Developments is
                        your gateway to success.
                    </p>
                </div>
                <div className=" flex flex-1 items-center justify-center">
                    <img
                        src="https://t4.ftcdn.net/jpg/01/31/96/99/360_F_131969925_4npM7jqii8Dlo76mRROdD0r285Oojc8d.jpg"
                        alt=""
                        className="md:w-[90%] w-full rounded-lg h-full block"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:mb-0 mb-5">
                <div className="flex-1 flex items-center justify-center order-2 md:order-3">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBjb21wYW55fGVufDB8fDB8fHww"
                        alt=""
                        className="md:w-[90%] rounded-lg w-full h-full block "
                    />
                </div>

                <div className=" flex-1 md:pe-6 mb-5 md:mb-0 md:order-2 order-3 self-center ">
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 md:mt-0 mt-3">
                        Explore, Innovate, Thrive
                    </h2>
                    <p className="font-inter leading-relaxed text-[#444]">
                        Embark on a journey of exploration and innovation with
                        MB Developments. Whether you are seeking unparalleled
                        software solutions or exciting career opportunities, we
                        invite you to explore the endless possibilities that our
                        expertise can unlock.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row ">
                <div className="flex-1 md:ps-6 mb-5 md:mb-0 md:order-2 order-1 self-center">
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 md:mt-0 mt-3">
                        Empowering Innovation, Transforming Futures
                    </h2>
                    <p className="font-inter leading-relaxed text-[#444]">
                        Our mission is to empower businesses and individuals
                        through tailored software solutions that seamlessly
                        integrate technology and creativity. We believe in not
                        just meeting but exceeding expectations, and our team of
                        dedicated professionals is driven by a shared commitment
                        to pushing the boundaries of {`what's`} possible.
                    </p>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <img
                        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="md:w-[90%] w-full rounded-lg h-full block"
                    />
                </div>
            </div>
        </section>
    );
}
