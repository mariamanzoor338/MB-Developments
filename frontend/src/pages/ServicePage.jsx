import { useEffect, useState } from "react";
import AllServices from "../Components/AllServices";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import PageBanner from "../Components/PageBanner";
import Loader from "../Components/Loader";

export default function ServicePage() {
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
                    "https://www.nttdata.com/my/en/-/media/nttdataapac/ndmy/services/infrastructure-services/infrastructure_services-header-2732x1536_1.jpg?h=1536&iar=0&w=2732&rev=d771f81edccc4725bef0dd18938d4312"
                }
                page_link={"/services"}
                page_link_text={"Services"}
            />
            <AllServices />
            <Footer />
        </div>
    );
}
