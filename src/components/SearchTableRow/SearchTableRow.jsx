import React from 'react';

const SearchTableRow = ({donor,idx}) => {
    console.log(donor);
    return (
        <tr className='hover'>
        <th>{idx+ 1}</th>
        <td className='text-red-500 uppercase'>{donor?.name}</td>
        <td>{donor?.email}</td>
    </tr>
    );
};

export default SearchTableRow;