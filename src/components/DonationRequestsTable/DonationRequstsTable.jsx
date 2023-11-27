import React from 'react';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';

const DonationRequstsTable = ({donationReq}) => {
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
            <td className='bg-base-300'>{donationStatus}</td>
            <td className='text-sm'>Name: {requesterName} <br /> Email:{requesterEmail}</td>
            {/* <th>
                <p className={`font-semibold uppercase
                 ${status === "blocked" && 'text-red-500'}
                 ${status === "active" && 'text-green-500'}
                 `}>{status}</p>
            </th> */}
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

                        <div>
                        <FaTrashCan  className="hover:text-red-500 text-3xl"/>
                        </div>
            </td>

            <td><button className='btn bg-red-500 text-white'>view</button></td>
        </tr>
    );
};

export default DonationRequstsTable;