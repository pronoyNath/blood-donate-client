import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { FaCircleCheck } from "react-icons/fa6";
import loginAnimation from '../../assets/animations/loginAnimation.json'
import Lottie from "lottie-react";
// import PageTitle from "../../Components/PageTitle/PageTitle";
import { ImSpinner9 } from "react-icons/im";
import { FcGoogle } from 'react-icons/fc'
import toast, { Toaster } from "react-hot-toast";

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
                console.log(result);
                setLoading(false);
                toast.success('Logged in Successfully!')
                // navigate(location?.state ? location?.state : '/')
                // alert("okk")
                //toast pop-up
            //    toast.custom((t) => (
            //         <div
            //             className={`${t.visible ? 'animate-enter' : 'animate-leave'
            //                 } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            //         >
            //             <div className="flex-1 w-0 p-4">
            //                 <div className="flex items-start">
            //                     <div className="flex pt-0.5 items-center">
            //                         <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
            //                     </div>
            //                     <div className="ml-3 flex-1">
            //                         <p className="text-sm font-medium text-gray-900">
            //                             WoW!!!
            //                         </p>
            //                         <p className="mt-1 text-sm text-gray-500">
            //                             Account loged in!
            //                         </p>
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="flex border-l border-blue-200">



            //                 <Link to={`${location?.state ? location.state : '/'}`}>
            //                     <button
            //                         onClick={() => {
            //                             navigate(location?.state ? location?.state : '/')
            //                             toast.dismiss(t.id)
            //                         }
            //                         }
            //                         className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            //                     >
            //                         Close
            //                     </button>
            //                 </Link>
            //             </div>

            //         </div>
            //     ))

            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message)
                setLoading(false);

            })

    }

    //login by google
    const handleGoogle = () => {
        googleSignIn()
            .then(async res => {
                // console.log("hello___>",res?.user?.email);
                
                
                //toast pop-up
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter ' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 `}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex pt-0.5 items-center">
                                    <FaCircleCheck className=' h-[40px] w-[40px] text-green-500'></FaCircleCheck>
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        WoW!!!
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Account loged in!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-l border-blue-200">
                            <Link to={`${location?.state ? location.state : '/'}`}>
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="w-full h-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    Close
                                </button>
                            </Link>
                        </div>

                    </div>
                ))
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message)
            })
    }


    return (
        <>
            {/* <PageTitle title={"Login | Grand Hotel"}></PageTitle> */}
            <div><Toaster/></div>
            <div className="hero -mt-10 min-h-[800px] overflow-x-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/GdTntPk/R-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-6xl flex items-center">

                        <div className="hidden md:block flex-1">
                            <Lottie animationData={loginAnimation} className=""></Lottie>
                        </div>

                        <div className="w-full flex-1 max-w-xl rounded-md shadow p-5 sm:p-8 dark:bg-gray-800 dark:text-gray-100" >
                            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                            <p className="text-sm text-center dark:text-gray-400 hover:scale-110 transform transition-transform duration-300">Dont have account?
                                <Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline ml-5 text-red-500 text-xl">Register here</Link>
                            </p>
                            <div className="mt-10 space-y-4" >
                                <button onClick={handleGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-red-500 focus:ri">

                                    <FcGoogle size={32} />
                                    <p>Login with Google</p>
                                </button>
                            </div>
                            <div className="flex items-center w-full my-4" >
                                <hr className="w-full text-red-500" />
                                <p className="px-3 dark:text-gray-400">OR</p>
                                <hr className="w-full text-red-500" />
                            </div>
                            <form onSubmit={handleLogin} action="" className="space-y-8">
                                <div className="space-y-4" >
                                    <div className="space-y-2" >
                                        <label className="block text-sm text-left">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="xyz@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-red-500 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <div className="space-y-2" >
                                        <div className="flex justify-between" >
                                            <label name="password" className="text-sm">Password</label>

                                        </div>
                                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-red-500 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-violet-400" />
                                    </div>
                                    <p className='text-red-500'>{loginError}</p>
                                </div>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-red-500 dark:text-white hover:scale-105 transform transition-transform duration-300">
                                    {
                                        loading ? <ImSpinner9 className='mx-auto animate-spin text-xl'></ImSpinner9> : 'Login'
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;