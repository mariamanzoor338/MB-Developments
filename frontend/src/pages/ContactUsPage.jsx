import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageBanner from "../Components/PageBanner";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";

export default function ContactUsPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);
    if (loading)
        return (
            <div className=" h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    return (
        <div className=" relative">
            <Header />
            <PageBanner
                imageUrl={
                    "https://leadershipconsulting.com/dev/wp-content/uploads/2017/12/AdobeStock_68129542.jpg"
                }
                page_link={"/contact-us"}
                page_link_text={"Contact Us"}
            />
            <main className="p-6 max-w-[1200px] m-auto mt-4 ">
                <ContactUs />
            </main>

            <Footer />
        </div>
    );
}
