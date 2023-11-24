import  { useState } from 'react';
import VolunteerCard from './VolunteerCard';

const OurVolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);
    fetch('/volunteers.json')
        .then(res => res.json())
        .then(data => setVolunteers(data))


    return (
        <div className='max-w-6xl mx-auto py-10 text-center'>
            <p className='text-lg text-red-500'>Team Members</p>
            <h3 className='text-4xl font-bold'>Meet Volunteers</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 py-10'>
                {
                    volunteers.map(volunteer => <VolunteerCard key={volunteer?.contactNumber} volunteer={volunteer}></VolunteerCard>)
                }
            </div>
        </div>
    );
};

export default OurVolunteers;