import { useEffect, useState } from 'react';
import UserDataTable from '../../components/UserDataTable/UserDataTable';
import axiosSecure from '../../hooks/useAxiosSecure';
import './AllUser.css'
const AllUser = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [filteredUser,setFilteredUser] = useState(allUsers);


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

    useEffect(()=>{
        setFilteredUser(allUsers)
    },[allUsers])

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
         if (selectedValue === 'all') {
            // Show all data
            setFilteredUser(allUsers);
            setCount(allUsers.length)
            return;
        }
        if (selectedValue === 'active') {
            const activeUsers = allUsers.filter((user) => user?.status === 'active');
            setFilteredUser(activeUsers);
            setCount(activeUsers.length);
            return;
        }
        if (selectedValue === 'blocked') {
            const blockedUsers = allUsers.filter((user) => user?.status === 'blocked');
            setFilteredUser(blockedUsers);
            setCount(blockedUsers.length);
            return;
        }
       
    };

    return (
        <div className='overflow-y-scroll'>
            <h3 className='text-3xl font-semibold text-red-500 text-center'>All Users Data</h3>
           
            <div className="text-black mr-8 ml-5 lg:ml-0 flex gap-3 items-center ">
                <div className="text-lg mt-2 lg:mt-0 text-red-500 font-bold border-b-2">Filter By User Staus:</div>

                <select onChange={handleFilter}  className="rounded p-1 ml-5 lg:ml-0 mt-5 lg:mt-0 bg-red-500 text-white lg:text-lg " name="filter" id="filter"
                >
                    <option  value="all">All</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div>

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
                            filteredUser.map(user => <UserDataTable key={user._id} user={user}></UserDataTable>)
                        }

                    </tbody>
                </table>



                {/* pagination style starts here  */}


                <div className='pagination font-semibold'>
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

export default AllUser;