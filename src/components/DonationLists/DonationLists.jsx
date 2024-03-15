import { useState } from "react";

const DonationLists = () => {
    const [lists, setLists] = useState([]);

    fetch('donationLists.json')
        .then(response => response.json())
        .then(data => setLists(data))

    return (
        <div>
            <div className="max-w-screen-2xl min-h-screen p-5 mt-20 mx-auto z-0 text-gray-100" >
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2" >
                    {
                        lists.map(list =>
                            <div
                                // data-aos="zoom-in-down"
                                // data-aos-easing="ease-out-cubic"
                                // data-aos-duration="1000"
                                key={list?.id} className=" hover:scale-110 duration-300 ease-in-out  relative flex items-end justify-start w-full text-left bg-center bg-cover h-[700px] bg-gray-500" style={{ backgroundImage: `url(${list?.image})` }} >
                                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent from-transparent to-red-600" ></div>
                                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3" >
                                    <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined">{list?.hospitalName}</a>
                                    <div className="flex flex-col justify-start text-center text-gray-100" >
                                        <span className="text-3xl font-semibold leadi tracki">{list?.date?.day}</span>
                                        <span className="leadi uppercase">{list?.date?.month}</span>
                                    </div>
                                </div>
                                <h2 className="z-10 p-5">
                                    <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100"> {list?.details?.bloodDonationDetails}</a>
                                </h2>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default DonationLists;