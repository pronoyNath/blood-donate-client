import { useEffect, useState } from "react";
import axiosSecure from "../../hooks/useAxiosSecure";
import DonationRequstsTable from "../../components/DonationRequestsTable/DonationRequstsTable";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useUserRole from "../../Hooks/useUserRole";


const MyDonationRequests = () => {
    const { user } = useAuth();
    const [userRole] = useUserRole();

    const [donationRequests, setDonationRequests] = useState([]);
    // console.log("out",donationRequests.length);
    const [filteredDonationRequests, setFilteredDonationRequests] = useState(donationRequests);
const [specificData,setSpecificData] = useState([]);

    // paging code 
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const [count, setCount] = useState(0);

    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    // all req count 
    useEffect(() => {
        fetch('http://localhost:5000/donation-requst-count')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])

    // specific req count 
    useEffect(() => {
        fetch(`http://localhost:5000/donation-requst-count/${user?.email}`)
            .then(res => res.json())
            .then(data => setSpecificData(data.length))
    }, [user?.email])

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }


    //main data load
    // if(userRole == 'donor'){
            // useEffect(()=>{
            //     axiosSecure.get(`/donation-requests?page=${currentPage}&size=${itemsPerPage}&email=${userRole=='donor' && user?.email}`)
            //     .then(({ data }) => {
            //         setDonationRequests(data)
            //         if(userRole == 'donor'){
            //             setCount(donationRequests.length)
            //         }
            // })
            // },[currentPage,itemsPerPage,userRole,user?.email,donationRequests.length])
              
    // }
    // else{
    //     axiosSecure.get(`/donation-requests?page=${currentPage}&size=${itemsPerPage}`)
    //     .then(({ data }) => setDonationRequests(data))
        
    // }
    useEffect(() => {
        let requestUrl = `/donation-requests?page=${currentPage}&size=${itemsPerPage}`;

        if (userRole === 'donor') {
          // Only include email for donors
          requestUrl += `&email=${user?.email}`;
        }

        async ()=>{
           await axiosSecure.get(requestUrl)
            .then(({ data }) => {
              setDonationRequests(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      
       
      
      }, [currentPage, itemsPerPage, userRole, user?.email]);
      
      // Use another useEffect to update the count after donationRequests has been updated
      useEffect(() => {
        if (userRole === 'donor') {
          setCount(specificData);
        }
      }, [ userRole,specificData]);
   
    // useEffect(() => {
    //     setFilteredDonationRequests(donationRequests)
    // }, [donationRequests])

    // handle filter 
    // const handleFilter = async (e) => {
    //     const selectedValue = e.target.value;
    //     if (selectedValue === 'all') {
    //         // Show all data
    //         setFilteredDonationRequests(donationRequests);
    //         setCount(donationRequests.length)
    //         return;
    //     }
    //     if (selectedValue === 'active') {
    //         const activeUsers = donationRequests.filter((user) => user?.status === 'active');
    //         setFilteredDonationRequests(activeUsers);
    //         setCount(activeUsers.length);
    //         return;
    //         //   await axiosSecure.get(`/all-users?status=active`)
    //         //         .then(( {data} ) => {
    //         //             setFilteredDonationRequests(data)
    //         //             setCount(data.length)
    //         //         })
    //         //     console.log(filteredDonationRequests);
    //         //     return;
    //     }
    //     if (selectedValue === 'blocked') {
    //         const blockedUsers = donationRequests.filter((user) => user?.status === 'blocked');
    //         setFilteredDonationRequests(blockedUsers);
    //         setCount(blockedUsers.length);
    //         return;
    //         // axiosSecure.get(`/all-users?status=blocked`)
    //         //     .then(({ data }) => setFilteredDonationRequests(data))
    //         // setCount(filteredDonationRequests.length);
    //         // console.log(filteredDonationRequests);
    //         // return;
    //     }

    // };

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


    return (
        <div className='h-screen'>
            <h3 className='text-3xl font-semibold text-red-500 text-center'>My Donation Requests</h3>

            {/* <div className="text-black mr-8 ml-5 lg:ml-0 flex gap-3 items-center ">
                <div className="text-lg mt-2 lg:mt-0 text-red-500 font-bold border-b-2">Filter By User Staus:</div>

                <select onChange={handleFilter} className="rounded p-1 ml-5 lg:ml-0 mt-5 lg:mt-0 bg-red-500 text-white lg:text-lg " name="filter" id="filter"
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div> */}

            { donationRequests.length > 0 ?
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
                            donationRequests.map(donationReq => <DonationRequstsTable key={donationReq?._id}
                                donationReq={donationReq}
                                handleDelteReq={() => handleDelete(donationReq._id)}
                                handleDone={() => handleMakeDone(donationReq._id)}
                                handleCancel={() => handleMakeCancel(donationReq._id)}
                            ></DonationRequstsTable>)
                        }

                    </tbody>
                </table>



                {/* pagination style starts here  */}


                <div className='text-center my-10 font-semibold'>
                    <p className='mb-3 text-lg uppercase'>Current page: {currentPage + 1} of {numberOfPages}</p>
                    <button className='btn bg-red-500 hover:bg-red-400 text-white' onClick={handlePrevPage}>Prev</button>
                    {
                        pages.map(page => <button
                            className={`btn bg-red-500 hover:bg-red-400 text-white mx-2 ${currentPage === page ? 'selected' : undefined}`}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page + 1}</button>)
                    }
                    <button className='btn bg-red-500 hover:bg-red-400 text-white' onClick={handleNextPage}>Next</button>

                </div>


                {/* check ends here  */}
            </div>
            :
            <h3 className="mt-10 font-bold text-2xl">
                Opps!!! No Donation Request Create Yet
            </h3>
            }
        </div>
    );
};

export default MyDonationRequests;