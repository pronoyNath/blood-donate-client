import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import UserDataTable from '../../components/UserDataTable/UserDataTable';

const AllUser = () => {
    const axiosPublic = useAxiosPublic();
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axiosPublic.get('/all-users')
            .then(({ data }) => setAllUsers(data))
    }, [axiosPublic])

    return (
        <div>
            <h3 className='text-3xl font-semibold text-red-500 text-center'>All Users Data</h3>


            <div className="overflow-x-auto mx-w-3xl py-10">
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
                            allUsers.map(user=><UserDataTable key={user._id} user={user}></UserDataTable>)
                        }

                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default AllUser;