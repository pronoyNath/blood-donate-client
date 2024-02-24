import { useEffect } from "react";
import axiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import DonationRequstsTable from "../../components/DonationRequestsTable/DonationRequstsTable";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";
import Lottie from "lottie-react";
import pulseAnimation from '../../assets/animations/pulseAnimation.json'


const DashboardReqts = () => {
    const [donationRequests, setDonationRequests] = useState([]);
    const [filteredDonationRequests, setFilteredDonationRequests] = useState(donationRequests);
    const [userRole] = useUserRole();
    const { user } = useAuth();
    const navigate = useNavigate();

  
    useEffect(() => {
        axiosSecure.get(`/all-donation-requests?email=${user?.email}`)
            .then(({ data }) => setDonationRequests(data))
    }, [user?.email])
    // console.log(donationRequests);
    useEffect(() => {
        setFilteredDonationRequests(donationRequests)
    }, [donationRequests])




    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/donataion-req-delete/${id}`)
                    .then(({ data }) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Donation Request has been deleted.",
                                icon: "success"
                            });
                        }
                    });

                const remaining = filteredDonationRequests.filter(product => product._id !== id)
                setFilteredDonationRequests(remaining)
            }
        })

        console.log(id);
    }


    // handle done & cancel 
    const handleMakeDone = async (id) => {
        const donationStatus = {
            donationStatus: 'done'
        }
        await axiosSecure.put(`/donation-status/${id}`,
            donationStatus
        )
            .then(({ data }) => {
                if (data?.modifiedCount > 0) {
                    navigate("/dashboard")
                    setFilteredDonationRequests((previous) => {
                        previous.forEach((itm) => {
                            if (itm._id == id) {
                                itm.donationStatus = "done"
                            }

                        })

                        return [...previous]
                    })

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Donation Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleMakeCancel = async (id) => {
        const donationStatus = {
            donationStatus: 'canceled'
        }
        await axiosSecure.put(`/donation-status/${id}`,
            donationStatus
        )
            .then(({ data }) => {
                if (data?.modifiedCount > 0) {
                    setFilteredDonationRequests((previous) => {
                        previous.forEach((itm) => {
                            if (itm._id == id) {
                                itm.donationStatus = "canceled"
                            }

                        })

                        return [...previous]
                    })

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Donation Status Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    // console.log(filteredDonationRequests.reverse());
    return (
        <div>
            {filteredDonationRequests.length > 0 ?
                <div className=''>
                    <h3 className='text-3xl font-semibold text-red-500 mt-5 border-b-2 border-b-red-500 text-center pb-5'>My Recent Donation Requests</h3>

                    <div className=" py-10 relative">
                        <table className="table table-xs">
                            {/* head */}
                            <thead>
                                <tr className='text-red-500 text-lg'>
                                    <th>Reciept Name</th>
                                    <th>Reciept Location</th>
                                    <th>Donation Date/Time</th>
                                    <th>Donation Status</th>
                                    <th>Donor Info</th>
                                    <th>Upadate/Delete</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody className='font-semibold'>

                                {
                                    filteredDonationRequests.slice(-3).reverse().map(donationReq => <DonationRequstsTable key={donationReq?._id}
                                        donationReq={donationReq}
                                        handleDelteReq={() => handleDelete(donationReq._id)}
                                        handleDone={() => handleMakeDone(donationReq._id)}
                                        handleCancel={() => handleMakeCancel(donationReq._id)}
                                        userRole={userRole}
                                    ></DonationRequstsTable>)

                                }

                            </tbody>
                        </table>
                    </div>
                    <Link to={'/dashboard/my-donation-requests'}>
                        <button className="btn w-full bg-red-800 text-white uppercase hover:scale-105 transform transition-transform duration-300 hover:bg-red-500">view my all requests</button>
                    </Link>
                </div>

                :

                <div className="flex flex-col justify-center items-center mt-10">

                <div>
                  <Lottie animationData={pulseAnimation} className="" />
                </div>
                <h3 className="text-3xl font-bold ">No Dontaion Created Yet.</h3>

              </div>
            }


        </div>
    );
};

export default DashboardReqts;