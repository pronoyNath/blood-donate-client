import Lottie from 'lottie-react';
import scrollAnimation from '../../assets/animations/scrollAnimation.json'
import Example from '../Example/Example';

const Gallary3d = () => {
    return (
        <div className=''>
            <div className='flex gap-4 justify-center items-center -mt-10 m'>
                <h3 className='font-bold text-5xl text-center'>
                    Hover Over The Galley and <span className='text-red-500'>Scroll Your Mouse</span>
                </h3>
                <Lottie animationData={scrollAnimation} className='h-[300px] -mb-12' />
            </div>
            <Example />

        </div>
    );
};

export default Gallary3d;