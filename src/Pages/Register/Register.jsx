import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaCircleCheck } from 'react-icons/fa6';
import Lottie from 'lottie-react';
import bloodDonateAnimation from '../../assets/animations/bloodPressureAnimation.json'
// import PageTitle from '../../Components/PageTitle/PageTitle';
import { ImSpinner9 } from "react-icons/im";
import { imageUpload } from '../../api/ImageUploadApi';
import { FaBan } from "react-icons/fa6";
import SelectOptions from '../../components/SelectOptions/SelectOptions';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Register = () => {

    const { user, createUser, updateUserProfile, loading } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');

    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);

    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState('');

    // district data load 
    useEffect(() => {
        fetch('/districts.json')
            .then(res => res.json())
            .then(data => setDistricts(data))
    }, [])

    // upazilas data load
    useEffect(() => {
        fetch('/upazilas.json')
            .then(res => res.json())
            .then(data => setUpazilas(data))
    }, [])

    // filter selected district upazilas
    useEffect(() => {
        const filteredUpazilas = upazilas.filter(upazila => upazila.district_id === selectedDistrict);
        setFilteredUpazilas(filteredUpazilas);
    }, [selectedDistrict, upazilas]);



    const handleRegister = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');

        //image uploading using hosting side (imgbb api)
        const img = e.target.img.files[0]
        const imageData = await imageUpload(img)
        //    console.log(imageData.data.display_url);
        const imageURL = imageData?.data?.display_url

        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        const bloodGroup = form.get('bloodGroup');
        const district = form.get('district');
        const upazila = form.get('upazila');

        // const currentUser = {
        //     name,
        //     email,
        //     role: 'donor',
        //     status: 'active',
        //     imageURL, bloodGroup,
        //     district: districts.find(district => district.id === selectedDistrict)?.name,
        //     upazila: upazilas.find(upazila => upazila.id === selectedUpazila)?.name
        // }
        // console.log(currentUser);

        if (!bloodGroup || !district || !upazila) {
            setRegisterError("Please fill the form properly.")
            return
        }
        if (password !== confirmPassword) {
            setRegisterError("Confirm Password is not matching")
            return
        }

        // console.log(name, imageURL, email, password, confirmPassword, bloodGroup, district, upazila);


        setRegisterError('');
        // console.log(img);
        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password should have at least one capital letter");
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setRegisterError("Password should have at least one special character (#,*,&...etc)");
            return;
        }


        //creating user
        createUser(email, password)
            .then(async (res) => {
                const currentUser = {
                    name,
                    email,
                    role: 'donor',
                    status: 'active',
                    imageURL, bloodGroup,
                    district: districts.find(district => district.id === selectedDistrict)?.name,
                    upazila: upazilas.find(upazila => upazila.id === selectedUpazila)?.name
                }
                const { data } = await axiosPublic.post('/user-info', currentUser)
                console.log("responseee", data);
                // Registration successful, update user profile
                return updateUserProfile(name, imageURL);
            })
            .then(() => {
                //  toast pop-up

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/');

            })
            .catch((err) => {
                console.error(err);
                setRegisterError(err.message);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Fill the Form Correctly!",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    return (
        <>


            <div className="hero -mt-12 min-h-[900px] overflow-x-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/bryRbkv/nguy-n-hi-p-2r-NHli-X6-XHk-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-6xl flex items-center gap-32">
                        <div className="hidden md:block">
                            <Lottie animationData={bloodDonateAnimation} className='h-96 w-96'></Lottie>
                        </div>

                        <div className="w-full max-w-xl p-4 rounded-md shadow sm:p-8 bg-gray-800 text-gray-100" >
                            <h2 className="mb-3 text-3xl font-semibold text-center">Register Your Account</h2>
                            <p className="text-sm text-center text-gray-400 hover:scale-110 transform transition-transform duration-300">Already have account?
                                <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline ml-5 text-red-500 text-xl">Login here</Link>
                            </p>
                            <form onSubmit={handleRegister} action="" className="space-y-8 mt-10">
                                <div className="space-y-4" >
                                    <div className='flex gap-5'>
                                        <div className="space-y-2 flex-1" >
                                            <label className="block text-sm text-left">Your name</label>
                                            <input required type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-3 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                                        </div>
                                        <div className="space-y-2 flex-1" >

                                            <label className="block text-sm text-left">Upload Profile Image*</label>
                                            <input type="file" id="img" name="img" accept="image/*" className="file-input file-input-bordered w-full bg-gray-800 border-red-500" required />
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div className="space-y-2 flex-1" >
                                            <label className="block text-sm text-left">Email address</label>
                                            <input required type="email" name="email" id="email" placeholder="xyz@gmail.com" className="w-full px-3 py-3 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                                        </div>


                                        <div className="space-y-2 flex-1" >
                                            <div className="flex justify-between" >
                                                <label className="text-sm">Blood Group*</label>
                                            </div>
                                            <select name="bloodGroup" className="select select-error w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100" required>
                                                <option disabled selected>Select Your Blood Group</option>
                                                <option>A+</option>
                                                <option>A-</option>
                                                <option>B+</option>
                                                <option>B-</option>
                                                <option>AB+</option>
                                                <option>AB-</option>
                                                <option>O+</option>
                                                <option>O-</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex gap-5'>

                                        <div className="space-y-2 flex-1">
                                            <div className="flex justify-between">
                                                <label className="text-sm">District*</label>
                                            </div>
                                            <select
                                                name="district"
                                                value={selectedDistrict}
                                                onChange={(e) => {
                                                    setSelectedDistrict(e.target.value);
                                                }}

                                                required
                                                className="select select-error w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 "
                                            >
                                                <option disabled value="">Select Your District</option>
                                                {districts.map((district) => (
                                                    <SelectOptions key={district?.id} district={district}></SelectOptions>
                                                ))}
                                            </select>
                                        </div>



                                        <div className="space-y-2 flex-1">
                                            <div className="flex justify-between">
                                                <label className="text-sm">Upazila*</label>
                                            </div>
                                            <select
                                                name="upazila"
                                                value={selectedUpazila}
                                                onChange={(e) => {
                                                    setSelectedUpazila(e.target.value);
                                                }}
                                                required
                                                className="select select-error w-full px-3 py-2 border rounded-md bg-gray-800 text-gray-100 "
                                            >
                                                <option disabled value="">Select Your Upazila</option>
                                                {filteredUpazilas.map((upazila) => (
                                                    <option key={upazila?.id} value={upazila.id}>
                                                        {upazila.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5'>
                                    <div className="space-y-2 flex-1" >
                                        <div className="flex justify-between" >
                                            <label name="password" className="text-sm">Password</label>
                                        </div>
                                        <input required type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                                    </div>
                                    <div className="space-y-2 flex-1" >
                                        <div className="flex justify-between" >
                                            <label name="confirmPassword" className="text-sm">Confirm Password*</label>
                                        </div>
                                        <input required type="password" name="confirmPassword" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-red-500 bg-gray-800 text-gray-100 focus:border-violet-400" />
                                    </div>
                                </div>


                                {
                                    registerError && <div className='text-red-500 flex items-center justify-center gap-2'><FaBan /> {registerError}</div>
                                }

                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-red-800 hover:scale-105 transform transition-transform duration-300 hover:bg-red-500 text-white">
                                    {
                                        loading ? <ImSpinner9 className='mx-auto animate-spin text-xl'></ImSpinner9> :
                                            'Register'
                                    }
                                </button>



                                <div>
                                    <h3 className='text-yellow-300'>For Demo Login, please visit login page</h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;