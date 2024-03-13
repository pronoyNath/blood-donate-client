import { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const FeaturesCard = ({ title, des, animation, parallel }) => {
    const playerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        playerRef.current?.play();
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        playerRef.current?.stop();
        setIsHovered(false);
    };

    return (
        <div
            className={`${parallel && 'flex items-center'} items-center shadow-2xl bg-white cursor-pointer rounded-xl transition-transform transform hover:scale-120 ease-in-out ${isHovered ? "scale-110" : "scale-100"
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => document.getElementById("my_modal_5").showModal()}
        >
            <figure className={`w-[80%] h-[200px] m-auto overflow-hidden ${parallel && 'md:h-[350px] w-full'} `}>
                <Player loop src={animation} className={`h-full w-full ${parallel && 'md:h-[350px] w-full '}`} ref={playerRef}></Player>
            </figure>
            <div className="py-6 px-4">
                <h2 className={`text-center text-4xl font-bold uppercase text-red-500 ${parallel && "text-5xl"}`}>{title}</h2>
                <p className="text-center text-sm mt-2">{des}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;
