import { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { allServices } from "../data";

export default function AllServices() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on load
    }, []);

    return (
        <main className="p-6 max-w-[1200px] m-auto mt-4 flex flex-col gap-5">
            <div className="p-2 font-inter text-[#444]">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                    Our Services
                </h2>
                <p className=" text-base md:text-lg ">
                    At MB Developments, we offer a spectrum of services that
                    span the entire software development lifecycle. From
                    conceptualization to deployment and beyond, we specialize
                    in:
                </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-3">
                {allServices.map((service, i) => (
                    <ServiceCard
                        key={i}
                        name={service.name}
                        listItems={service.list_items}
                        imageUrl={service.imageUrl}
                    />
                ))}
            </div>
        </main>
    );
}
