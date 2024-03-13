import { useRef } from 'react';
import beatAnimation from '../../assets/animations/pulseRateNav.json'
import Lottie from 'lottie-react';
import { Player } from '@lottiefiles/react-lottie-player';
const HeartBeat = () => {
    // const playerRef = useRef(null);

    // const handleMouseEnter = () => {
    //   playerRef.current?.play();

    // };

    // const handleMouseLeave = () => {
    //   playerRef.current?.stop();

    // };

    return (
        <div className='pb-10'
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            <Lottie animationData={beatAnimation} />
            {/* <Player loop src={beatAnimation} ref={playerRef}/> */}
        </div>
    );
};
export default HeartBeat;