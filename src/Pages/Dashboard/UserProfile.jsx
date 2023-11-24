import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const UserProfile = () => {
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic();
    const [userInfo, setUserInfo] = useState([]);

    axiosPublic.get(`/user/${user?.email}`)
        .then(({ data }) => setUserInfo(data))

    return (
        <>
            <div className="flex flex-col justify-center  p-6  shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                <img src={userInfo?.imageURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{userInfo?.name}</h2>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400 uppercase">Role: <span className="text-orange-400"> {userInfo?.role}</span></p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400"> Status: <span className={`${userInfo?.status == 'active' ? "text-green-500" :
                            " text-red-500 "} uppercase`}>{userInfo?.status}</span></p>

                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Email: {userInfo?.email}</p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Blood-Group: {userInfo?.bloodGroup}</p>
                        <p className="px-5 text-xs sm:text-base dark:text-gray-400">Address:
                          {userInfo?.upazila},{userInfo?.district}</p>

                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">

                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;