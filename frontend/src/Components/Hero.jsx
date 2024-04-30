import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./Slide";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../utils/helpers";
import Loader from "../Components/Loader";

export default function Hero() {
    const [hereos, setHeroes] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await fetchHeroes();
            setHeroes(data);
            setLoading(false);
        }

        fetchData();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        accessibility: false,
        arrows: false,
        autoplay: true,
    };

    if (loading)
        return (
            <div className=" flex items-center justify-center">
                <Loader />
            </div>
        );

    return (
        <>
            <Slider {...settings}>
                {hereos?.map((hero) => (
                    <Slide
                        imageUrl={hero.heroImage}
                        key={hero._id}
                        featureLine={hero.punchLine}
                        text={hero.description}
                    />
                ))}
            </Slider>
        </>
    );
}
