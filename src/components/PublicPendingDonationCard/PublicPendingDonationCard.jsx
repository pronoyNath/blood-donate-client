import React from 'react';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PublicPendingDonationCard = ({ userRole,pendingDonationReq}) => {
// console.log(pendingDonationReq);
    // console.log(Object.keys(donationReq).join(','));
    const { _id, requesterName, requesterEmail, recieptName, address, hospitalName, bloodGroup, time, date, district, upazila, requestMessage, donationStatus } = pendingDonationReq;



    return (
        <tr className='border border-red-500'>
            <td>
                <p>{recieptName}</p>
            </td>
            <td >
                <div>
                    <p>{address},{upazila},{district}</p>
                </div>
            </td>
            <td>

                <p>{date}</p>
            </td>
            <td>

                <p>{time}</p>
            </td>

            <td className={`${donationStatus == 'pending' && "bg-red-300"} ${donationStatus == 'inprogress' && "bg-orange-400"}  ${donationStatus == 'done' && "bg-green-300"}
            ${donationStatus == 'canceled' && "bg-red-600"} text-black`}>
                {donationStatus}
                {donationStatus == 'inprogress' && (<div className='mt-2'>
                    <button  className='btn btn-xs bg-green-500 border-none text-white'>Done</button> <button className='btn btn-xs bg-red-500 border-none text-white'>Cancel</button></div>)}

            </td>

            {/* <td className='text-sm'>
                {donationStatus == 'pending' ? '----' : <>Name: {requesterName} <br /> Email:{requesterEmail}</> }

            </td> */}

            {/* <td className='flex items-center gap-3'>

             { userRole === 'admin' | userRole === 'donor' &&
                   <><div className="dropdown dropdown-top dropdown-end">
                   <Link to={`/update-donation-info/${_id}`}>
                       <label tabIndex={0} className="btn m-1">
                           <FaPencil className="text-base" />
                       </label>
                   </Link>

               </div>

               <Link >
                   <div>
                       <FaTrashCan className="hover:text-red-500 text-3xl" />
                   </div>
               </Link></> ||  userRole == 'volunteer' && '----'
             }
             
            </td> */}

            <td>
                <Link to={`/donation-details/${_id}`}>
                    <button className='btn bg-red-500 text-white border-none'>view</button>
                </Link>
            </td>
        </tr>
        
    );
};

export default PublicPendingDonationCard;