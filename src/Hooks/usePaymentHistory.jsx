import useAuth from "./useAuth";
import axiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const usePaymentHistory = (URL) => {
    const { user } = useAuth();

    const { data: payments = [],refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(URL)
            return res.data;
        }
    })
    return [payments,refetch]
    
    
};

export default usePaymentHistory;



// import { useQuery } from "@tanstack/react-query";
// import useAxios from "../../Hooks/useAxios";

// const Loader = (url, query) => {
//   const axiosSecure = useAxios();
//   const { isLoading, refetch, data } = useQuery({
//     queryKey: [`${query}`],
//     queryFn: async () => {
//       const res = await axiosSecure.get(url);
//       return res.data;
//     },
//   });

//   return { isLoading, data, refetch };
// };

// export default Loader;