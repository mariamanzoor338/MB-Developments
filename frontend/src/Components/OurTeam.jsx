import { teamData } from "../data";
import TeamCard from "./TeamCard";

export default function OurTeam() {
    return (
        <section id="team" className=" my-3">
            <div className="p-2 text-[#444]">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                    Our Team
                </h2>
                <p className="text-base md:text-lg">
                    Your success is our priority. We believe in establishing
                    strong, long-term partnerships with our clients. Our team is
                    not just focused on delivering a product; we are committed
                    to understanding your business goals, collaborating closely
                    with you, and providing ongoing support to ensure the
                    continued success of your digital initiatives.
                </p>
            </div>

            <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3">
                {teamData.map((emp, i) => (
                    <TeamCard
                        key={i}
                        imageUrl={emp.imageURL}
                        name={emp.name}
                        designation={emp.designation}
                    />
                ))}
            </div>
        </section>
    );
}
