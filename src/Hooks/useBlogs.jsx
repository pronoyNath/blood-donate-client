import React from 'react';
import axiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useBlogs = () => {

    const { data: blogs = [], isLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs`);
            return res.data.reverse();
        }
    })
    return [blogs,isLoading,refetch];
};

export default useBlogs;

