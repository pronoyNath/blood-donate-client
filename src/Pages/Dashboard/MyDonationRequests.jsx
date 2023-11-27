import { useEffect, useState } from "react";
import axiosSecure from "../../hooks/useAxiosSecure";
import DonationRequstsTable from "../../components/DonationRequestsTable/DonationRequstsTable";


const MyDonationRequests = () => {
    const [donationRequests, setDonationRequests] = useState([]);
    const [filteredDonationRequests, setFilteredDonationRequests] = useState(donationRequests);


    // paging code 
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const [count, setCount] = useState(0);

    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch('http://localhost:5000/donation-requst-count')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])

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

 useEffect(() => {
    axiosSecure.get(`/donation-requests?page=${currentPage}&size=${itemsPerPage}`)
        .then(({ data }) => setDonationRequests(data))
}, [currentPage, itemsPerPage])

    useEffect(() => {
        setFilteredDonationRequests(donationRequests)
    }, [donationRequests])

    // handle filter 
    const handleFilter = async (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'all') {
            // Show all data
            setFilteredDonationRequests(donationRequests);
            setCount(donationRequests.length)
            return;
        }
        if (selectedValue === 'active') {
            const activeUsers = donationRequests.filter((user) => user?.status === 'active');
            setFilteredDonationRequests(activeUsers);
            setCount(activeUsers.length);
            return;
            //   await axiosSecure.get(`/all-users?status=active`)
            //         .then(( {data} ) => {
            //             setFilteredDonationRequests(data)
            //             setCount(data.length)
            //         })
            //     console.log(filteredDonationRequests);
            //     return;
        }
        if (selectedValue === 'blocked') {
            const blockedUsers = donationRequests.filter((user) => user?.status === 'blocked');
            setFilteredDonationRequests(blockedUsers);
            setCount(blockedUsers.length);
            return;
            // axiosSecure.get(`/all-users?status=blocked`)
            //     .then(({ data }) => setFilteredDonationRequests(data))
            // setCount(filteredDonationRequests.length);
            // console.log(filteredDonationRequests);
            // return;
        }

    };






    return (
        <div className=''>
            <h3 className='text-3xl font-semibold text-red-500 text-center'>My Donation Requests</h3>

            <div className="text-black mr-8 ml-5 lg:ml-0 flex gap-3 items-center ">
                <div className="text-lg mt-2 lg:mt-0 text-red-500 font-bold border-b-2">Filter By User Staus:</div>

                <select onChange={handleFilter} className="rounded p-1 ml-5 lg:ml-0 mt-5 lg:mt-0 bg-red-500 text-white lg:text-lg " name="filter" id="filter"
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div>

            <div className=" py-10 relative">
                <table className="table border max-w-lg">
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
                            filteredDonationRequests.map(donationReq => <DonationRequstsTable key={donationReq?._id} donationReq={donationReq}></DonationRequstsTable>)
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
        </div>
    );
};

export default MyDonationRequests;