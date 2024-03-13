import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import PaymentHistory from './PaymentHistory';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const GiveFund = () => {
    //     let currentDate = new Date();
    // console.log(currentDate.toLocaleString());

    return (
        <div className='bg-gray-800 h-[1200px] overflow-hidden  '>
            <div className='mt-44'>
                <div className='mb-10 '>
                    <h3 className='text-lg md:text-2xl text-red-500 text-center'><span className='text-green-500'>Empower Life:</span> Support Our Cause with a <span className='text-green-500'>$100</span> Donation – Every Drop Counts!</h3>
                </div>
                <div className='max-w-xl mx-auto'>
                    <Elements stripe={stripePromise}>
                        <PaymentForm></PaymentForm>
                    </Elements>
                </div>
                <div className='py-16 max-w-3xl mx-auto'>
                    <PaymentHistory></PaymentHistory>
                </div>
            </div>
        </div>
    );
};

export default GiveFund;