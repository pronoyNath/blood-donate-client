import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { FaCircleCheck } from "react-icons/fa6";
import loginAnimation from '../../assets/animations/loginAnimation.json'
import Lottie from "lottie-react";
// import PageTitle from "../../Components/PageTitle/PageTitle";
import { ImSpinner9 } from "react-icons/im";
import Swal from "sweetalert2";

const Login = () => {

    const { user, signIn, googleSignIn, loading, setLoading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        //clear error
        setLoginError('')


        // log in 
        signIn(email, password)
            .then(result => {
                // console.log(result);
                setLoading(false);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message)
                setLoading(false);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Sorry, Try Again!",
                    showConfirmButton: false,
                    timer: 1500
                });

            })

    }



    return (
        <>
            <div className="hero  min-h-screen  overflow-x-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/GdTntPk/R-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-6xl flex items-center">

                        <div className="hidden md:block flex-1">
                            <Lottie animationData={loginAnimation} className=""></Lottie>
                        </div>

                        <div className="w-full flex-1 max-w-xl rounded-md shadow p-5 sm:p-8 bg-gray-800 text-gray-100" >
                            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                            <p className="text-sm text-center text-gray-400 hover:scale-110 transform transition-transform duration-300">Dont have account?
                                <Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline ml-5 text-red-500 text-xl">Register here</Link>
                            </p>

                            <form onSubmit={handleLogin} action="" className="space-y-8">
                                <div className="space-y-4" >
                                    <div className="space-y-2" >
                                        <label className="block text-sm text-left">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="xyz@gmail.com" className="w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                                    </div>
                                    <div className="space-y-2" >
                                        <div className="flex justify-between" >
                                            <label name="password" className="text-sm">Password</label>

                                        </div>
                                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                                    </div>
                                    <p className='text-red-500'>{loginError}</p>
                                </div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-red-500 text-white hover:scale-105 transform transition-transform duration-300">
                                    {
                                        loading ? <ImSpinner9 className='mx-auto animate-spin text-xl'></ImSpinner9> : 'Login'
                                    }
                                </button>

                                <div className="text-yellow-300">
                                    <h3>Admin-Email: a@b.com , Admin-Password: 121212A#</h3>
                                    <h3>Volunteer-Email: n@y.com , Volunteer-Password: 121212A#</h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;