import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";
import axiosSecure from "../../Hooks/useAxiosSecure";
import PublicPendingDonationCard from "../../components/PublicPendingDonationCard/PublicPendingDonationCard";


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
        <div className='py-32 bg-gray-800 text-white min-h-screen'>
            <div className=" max-w-6xl mx-auto">
                <h3 className='text-3xl font-semibold text-red-500 text-center'>My Donation Requests</h3>

                {
                    pendingDonationRequests.length > 0 ?
                        <div className=" py-10 relative">
                            <table className="table table-xs border">
                                {/* head */}
                                <thead>
                                    <tr className='text-red-500 text-lg'>
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
                                <tbody className='font-semibold'>

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