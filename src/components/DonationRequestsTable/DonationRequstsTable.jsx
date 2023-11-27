import React from 'react';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const DonationRequstsTable = ({donationReq,handleDelteReq}) => {
   
    // console.log(Object.keys(donationReq).join(','));
    const {_id,requesterName,requesterEmail,recieptName,address,hospitalName,bloodGroup,time,date,district,upazila,requestMessage,donationStatus} = donationReq;

    

    return (
        <tr>
            <td>
                <p>{recieptName}</p>
            </td>
            <td >
                <div>
                    <p>{address},{upazila},{district}</p>
                </div>
            </td>
            <td>

                <p>{`${date}/${time}`}</p>
            </td>
            <td className={`${donationStatus=='pending' && "bg-red-300"} ${donationStatus=='inprogress' && "bg-orange-400"}`}>{donationStatus}</td>
            <td className='text-sm'>Name: {requesterName} <br /> Email:{requesterEmail}</td> 
          
            <td className='flex items-center gap-3'>
                    
                        <div className="dropdown dropdown-top dropdown-end">
                            <label tabIndex={0}
                           
                             className="btn m-1">
                            <FaPencil className="text-base"/>

                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                    <a >Make Admin</a>
                                </li>
                                <li>
                                    <a >Make Volunteer</a>
                                </li>
                            </ul>
                        </div>

                        <Link onClick={handleDelteReq}>
                        <div>
                        <FaTrashCan  className="hover:text-red-500 text-3xl"/>
                        </div>
                        </Link>
            </td>

            <td>
                <Link to={`/donation-details/${_id}`}>
                <button className='btn bg-red-500 text-white'>view</button>
                </Link>
                </td>
        </tr>
    );
};

export default DonationRequstsTable;