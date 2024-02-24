import { FaHeartCirclePlus, FaSearchengin } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Buttons from "../../sharedComponents/Buttons/Buttons";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-[200px]">
            <div className="hero min-h-[705px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/rpqh1gd/nguy-n-hi-p-ufw-C2cmbaa-I-unsplash.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md md:max-w-2xl mt-10">
                        <h1 className="mb-5 text-5xl font-bold text-red-500">Be a Lifesaver</h1>
                        <p className="mb-5"> Join Our Blood Donor Community Today! Your commitment can make a world of difference. Register now and become a vital part of our mission to save lives through the gift of blood</p>

                        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 items-center mt-10" >
                            {/* <Link to={'/register'}> */}
                            {/* <button onClick={() => navigate('/register')} className="btn px-10 hover:bg-red-500 bg-red-800 border-none text-white uppercase hover:scale-110 transform transition-transform duration-300">Join as a donor <FaHeartCirclePlus className="text-3xl animate-pulse" /></button> */}
                            {/* </Link> */}
                            {/* <button onClick={() => navigate('/search-donor')} className="btn px-10 hover:bg-red-500 bg-red-800 border-none text-white uppercase hover:scale-110 transform transition-transform duration-300">Search Donor</button> */}
                            <Buttons buttonText={"Join as a donor"} route={'/register'} icon={<FaHeartCirclePlus className="text-3xl animate-pulse ml-2 text-yellow-400" />}
                            />
                            <Buttons buttonText={"Search Donor"} route={'/search-donor'} icon={<FaSearchengin className="text-3xl  ml-2 text-yellow-400" />}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;