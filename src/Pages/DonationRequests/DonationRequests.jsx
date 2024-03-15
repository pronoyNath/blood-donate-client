import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";
import axiosSecure from "../../Hooks/useAxiosSecure";
import PublicPendingDonationCard from "../../components/PublicPendingDonationCard/PublicPendingDonationCard";
import bloodReq from "../../assets/animations/bloodRequest.json"
import Lottie from "lottie-react";

const DonationRequsts = () => {
    const { user } = useAuth();
    const [userRole] = useUserRole();

    const [pendingDonationRequests, setPendingDonationRequests] = useState([]);


    useEffect(() => {
        axiosSecure.get(`/pending-req`)
            .then(({ data }) => {
                setPendingDonationRequests(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    return (
        <div className='pt-48 pb-10 bg-gray-800 text-white min-h-screen '>
            <div className=" max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-6 bg-white rounded-full p-2 lg:p-7 max-w-3xl mx-auto">
                    <h3 className='text-2xl lg:text-4xl font-semibold text-red-500 text-center'>All Donation Requests </h3>
                    <Lottie animationData={bloodReq} className="lg:w-[300px] lg:h-[100px] " />
                </div>

                {
                    pendingDonationRequests.length > 0 ?
                        <div className=" py-10 relative overflow-x-auto">
                            <table className="table  table-md border border-red-500 bg- rounded-none">
                                {/* head */}
                                <thead>
                                    <tr className='text-red-500 text-xl border border-red-500'>
                                        <th>Reciept Name</th>
                                        <th>Reciept Location</th>
                                        <th>Donation Date</th>
                                        <th>Donation Time</th>
                                        <th>Donation Status</th>
                                        {/* <th>Donor Info</th> */}
                                        {/* <th>Upadate/Delete</th> */}
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody className='font-semibold '>

                                    {
                                        pendingDonationRequests.map(pendingDonationReq => <PublicPendingDonationCard key={pendingDonationReq?._id}
                                            pendingDonationReq={pendingDonationReq}
                                        ></PublicPendingDonationCard>)
                                    }

                                </tbody>
                            </table>


                        </div> : <h3 className="font-bold text-2xl mt-10">No Donation Request Created Yet.</h3>
                }

            </div>
        </div>
    );
};

export default DonationRequsts;