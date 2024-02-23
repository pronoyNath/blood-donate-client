

const VolunteerCard = ({ volunteer }) => {
    const { name, img, position, contactNumber } = volunteer;
    return (
        <div className="hover:scale-105 mx-auto md:mx-0 transform transition-transform duration-300 max-w-xs p-6 rounded-md bg-red-500 shadow-xl text-gray-50">
            <img src={img} alt="" className="object-fill object-center w-full rounded-md h-72 bg-gray-500" />

            <div className="mt-6 mb-2">

                <h2 className="text-xl font-semibold tracki">{name}</h2>
            </div>
            <p className="text-gray-100">{position}</p>
            <p className="text-gray-100">{contactNumber}</p>
        </div>
    );
};

export default VolunteerCard;