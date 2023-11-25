import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "./useAxiosSecure";
// import useAxiosPublic from "./useAxiosPublic";



const useUserRole = () => {
    const { user, loading } = useAuth();
    // const axiosPUblic = useAxiosPublic();

    //using tanstack query
    const { data: userRole, isLoading } = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            
            return res?.data?.role;
        },
        queryKey: ['userRole']
    })
    return [userRole, isLoading]
};

export default useUserRole;