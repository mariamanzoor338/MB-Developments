import { SocialIcon } from "react-social-icons";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const socialUrl = [
    {
        name: "instagram",
        url: "https://instagram.com",
    },
    {
        name: "facebook",
        url: "https://facebook.com",
    },
    {
        name: "linkedin",
        url: "https://linkedin.com",
    },
    {
        name: "tiktok",
        url: "https://tiktok.com",
    },
];

const footerLinks = [
    {
        name: "About Us",
        href: "/about-us",
    },
    {
        name: "Services",
        href: "/services",
    },
    {
        name: "Careers",
        href: "/careers",
    },
    {
        name: "Contact Us",
        href: "/contact-us",
    },
];

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage:
                    "url(https://wp.ditsolution.net/techno/wp-content/uploads/2022/08/footer-threee.jpg)",
            }}
        >
            <section
                id="footer"
                className="p-6 max-w-[1200px] m-auto grid md:grid-cols-3 gap-3 text-white"
            >
                <div className=" p-4">
                    <a
                        href="#"
                        className="block text-lg mb:text-xl lg:text-2xl font-bold font-inter mb-6"
                    >
                        MB Developements
                    </a>
                    <p className=" text-base lg:text-lg mb-4">
                        Completely strategize client-cent Phosfluorescently
                        iterate efficient internal or organic.
                    </p>
                    <h3 className=" text-lg font-semibold mb-6 ">Follow Us</h3>
                    <ul className=" flex items-center gap-3">
                        {socialUrl.map((media, i) => {
                            return (
                                <a href={media.url} target="blank" key={i}>
                                    <SocialIcon
                                        as="span"
                                        network={media.name}
                                        className="cursor-pointer w-1 h-1"
                                    />
                                </a>
                            );
                        })}
                    </ul>
                </div>
                <div className=" p-4">
                    <h3 className=" text-lg font-semibold mb-6 ">
                        Quick Links
                    </h3>
                    <ul className=" flex flex-col gap-6 ">
                        {footerLinks.map((link, i) => {
                            return (
                                <li
                                    className=" flex items-center gap-2 hover:underline ease-in-out duration-100"
                                    key={i}
                                >
                                    <HiChevronRight />
                                    <Link to={link.href}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className=" p-4">
                    <h3 className=" text-lg font-semibold mb-6 ">Contact Us</h3>
                    <div className="mb-4 grid grid-cols-10 gap-y-1 gap-x-2">
                        <div className="row-start-1 row-span-2 col-start-1 col-end-1 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#fff"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                        </div>
                        <div className=" col-start-2 col-span-8 ">
                            <span>Abbottabad, KPK </span>
                        </div>
                        <div className=" row-start-2 col-start-2">
                            <span>Pakistan</span>
                        </div>
                    </div>

                    <div className="mb-4 grid grid-cols-10 gap-y-1 gap-x-2">
                        <div className="row-start-1 row-span-2 col-start-1 col-end-1 flex items-center">
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
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                        </div>
                        <div className=" col-start-2 col-span-8 ">
                            <span className=" me-3">+92 3348886936</span>
                            <span>+92 3405055358 </span>
                        </div>
                        <div className=" row-start-2 col-start-2">
                            <span>Pakistan</span>
                        </div>
                    </div>

                    <div className=" grid grid-cols-10 gap-y-1 gap-x-2">
                        <div className="row-start-1 row-span-2 col-start-1 col-end-1 flex items-center">
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
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>
                        <div className=" col-start-2 col-span-8 ">
                            <span>mbdevelopment161@gmail.com</span>
                        </div>
                        <div className=" row-start-2 col-start-2">
                            <span>Pakistan</span>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
