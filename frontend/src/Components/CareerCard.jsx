export default function CareerCard({ heading, description }) {
    return (
        <div className=" p-5 rounded-md shadow-lg border">
            <h2 className=" text-lg font-semibold text-[#444] mb-3">
                {heading}
            </h2>
            <p>{description}</p>
        </div>
    );
}
