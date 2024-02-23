import { useState } from "react";
import { useEffect } from "react";

const AdminDashboard = () => {

    const [toatalUsers, setTotalUsers] = useState(0);
    const [totalFunds, setTotalFunds] = useState(0);
    const [totalDonationReq, setTotalDonationReq] = useState(0);

    // total user count 
    useEffect(() => {
        fetch('https://blood-donate-server.vercel.app/user-count')
            .then(res => res.json())
            .then(data => setTotalUsers(data.count))
    }, [])

    //total funds
    useEffect(() => {
        fetch('https://blood-donate-server.vercel.app/fund-count')
            .then(res => res.json())
            .then(data => setTotalFunds(data?.totalPrice))
    }, [])

    //total donation req count
    useEffect(() => {
        fetch('https://blood-donate-server.vercel.app/doantion-req-count')
            .then(res => res.json())
            .then(data => setTotalDonationReq(data.count))
    }, [])


    console.log(totalFunds);
    return (
        <div className="flex fexl-col justify-center items-center mt-16 p-5">

            <div className="stats shadow-xl  shadow-red-200">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img src="https://i.ibb.co/j5MMbNg/man.png" alt="" className="w-[100px]" />
                    </div>
                    <div className="stat-title">Total User</div>
                    <div className="stat-value">{toatalUsers}</div>
                </div>

                <div className="stat text-green-500">
                    <div className="stat-figure text-secondary">
                        <img src="https://i.ibb.co/JxyWFsr/emergency.png" alt="" className="w-[100px]" />
                    </div>
                    <div className="stat-title ">Total Funding</div>
                    <div className="stat-value">{totalFunds}$</div>
                </div>

                <div className="stat text-red-500">
                    <div className="stat-figure text-secondary">
                        <img src="https://i.ibb.co/2g9tLFg/blood-donation.png" alt="" className="w-[100px]" />
                    </div>
                    <div className="stat-title">Total Blood Donation Request</div>
                    <div className="stat-value">{totalDonationReq}</div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;