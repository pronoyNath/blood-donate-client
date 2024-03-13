import Lottie from 'lottie-react';
import scrollAnimation from '../../assets/animations/scrollAnimation.json'
import Example from '../Example/Example';

const Gallary3d = () => {
    return (
        <div className=' hidden md:block'>
            <div className='flex flex-row lg:flex-col '>
                <div className='flex gap-4 justify-center items-center lg:-mt-10 '>
                    <h3 className='font-bold text-5xl hidden lg:block text-center'>
                        Hover Over The Galley and <span className='text-red-500'>Scroll Your Mouse</span>
                    </h3>
                    <Lottie animationData={scrollAnimation} className='h-[300px] lg:-mb-12' />
                </div>
                <Example />

            </div>
        </div>
    );
};

export default Gallary3d;