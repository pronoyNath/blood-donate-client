import { useEffect, useState } from 'react';
import UserDataTable from '../../components/UserDataTable/UserDataTable';
import axiosSecure from '../../hooks/useAxiosSecure';
import './AllUser.css'
const AllUser = () => {

    const [allUsers, setAllUsers] = useState([]);


    // paging code 
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const [count, setCount] = useState(0);

    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch('http://localhost:5000/user-count')
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
        axiosSecure.get(`/all-users?page=${currentPage}&size=${itemsPerPage}`)
            .then(({ data }) => setAllUsers(data))
    }, [currentPage, itemsPerPage])


    return (
        <div className=' overflow-y-scroll'>
            <h3 className='text-3xl font-semibold text-red-500 text-center'>All Users Data</h3>


            <div className="mx-w-3xl py-10 relative">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-red-500 text-xl'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th >Edit</th>
                        </tr>
                    </thead>
                    <tbody className='font-semibold'>
                        {
                            allUsers.map(user => <UserDataTable key={user._id} user={user}></UserDataTable>)
                        }

                    </tbody>
                </table>



                {/* pagination style starts here  */}


                <div className='pagination font-semibold'>
                    <p className='mb-3 text-lg uppercase'>Current page: {currentPage + 1}</p>
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

export default AllUser;