import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import axiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();

    const { data: payments = [],refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    
    // console.log(payments);
    // let currentDate = new Date();
    // // console.log(currentDate.toLocaleString());

    
    return (
        <div>
            <h2 className="text-xl text-white mb-5">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead className="text-white bg-red-500">
                        <tr>
                            <th>#</th>
                            <th>Doner Name</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <th>{user?.displayName}</th>
                            <td>${payment.price}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;