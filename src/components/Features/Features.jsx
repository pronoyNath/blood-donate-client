import { Player } from '@lottiefiles/react-lottie-player';
import adminAnimation from '../../assets/animations/adminAnimation.json'
import volunteerAnimation from '../../assets/animations/volunteerAnimation.json'
import donerAnimation from '../../assets/animations/donorAnimation.json'
import FeaturesCard from './FeaturesCard';


const Features = () => {

    return (
        <div className={` pb-20 max-w-screen-xl mx-auto
          `}>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5' >
                <div data-aos="fade-right" data-aos-duration="2000">
                    <FeaturesCard title={"Admin"} des={"Admin-exclusive features such as managing users, blood donation requests, and handle-content."} animation={adminAnimation} />
                </div>
                <div data-aos="zoom-in" data-aos-duration="2000" className='space-y-5 mt-20'>
                    <h3 className='text-center text-5xl uppercase font-bold'>Three Types  <br />
                        <span className='text-red-500'>Of Role</span> </h3>
                    <p className='font-light text-xl text-center'>Different dashboards for <br /> Admin, Donor, and Volunteer roles <br /> with role-specific functionalities.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000">
                    <FeaturesCard title={"Volunteer "} des={"Volunteer-exclusive features such as managing users, blood donation requests, and writing-content."} animation={volunteerAnimation} />
                </div>
            </div>
            <div data-aos="zoom-in" className='max-w-2xl mx-auto mt-10'>
                <FeaturesCard parallel={true} title={"Donor"} des={"Donor-exclusive features Ability to create, edit, and delete donation requests with real-time status updates."} animation={donerAnimation} />
            </div>
        </div>
    );
};

export default Features;