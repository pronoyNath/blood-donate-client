import Lottie from 'lottie-react';
import conactAnimation from '../../assets/animations/contAnimation.json'

const ContactUs = () => {
    return (
        <section className="py-10 ">
            <div className="grid max-w-7xl gap-7 grid-cols-1 justify-between items-center md:text-4xl px-6 mx-auto lg:px-8 lg:grid-cols-2 " >
                <div className="py-6 md:py-0 md:px-6 mt-10" >
                    <h1 className="text-4xl md:text-7xl font-bold text-red-500">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-7" >
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>blooddoner@gmail.com</span>
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in">
                    <Lottie animationData={conactAnimation} className='hidden lg:block hover:scale-110 duration-300 border-none ease-in-out max-w-md' />
                </div>

                {/* <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="your name" className="block w-full border border-white p-5 rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="xyz@gmail.com" className="block w-full border border-white p-5 rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full border border-white p-5 rounded-md focus:ring focus:ri focus:ri bg-gray-800"></textarea>
                    </label>
                    <button type="button" className="hover:scale-105 transform transition-transform duration-300 text-white  px-8 py-3 text-lg rounded    hover:bg-red-500 bg-red-800 ">Submit</button>
                </form> */}
            </div>
        </section>
    );
};

export default ContactUs;