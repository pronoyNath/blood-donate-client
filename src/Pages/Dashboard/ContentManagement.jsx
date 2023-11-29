import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import BlogCard from '../../components/BlogCard/BlogCard';
import axiosSecure from '../../hooks/useAxiosSecure';

const ContentManagement = () => {
    const {user} = useAuth();

    // tanstack query for updated data get 
    const { data: blogs = [], isLoading,refetch } = useQuery({
        queryKey: ['blogs',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs`);
            return res.data.reverse();
        }
    })


    return (
        <div className=''>
          <div className='flex flex-row-reverse mb-5 items-center  justify-between py-3  border-y-2  border-y-red-500'>
          <Link to='/dashboard/content-management/add-blog'>
            <button className='btn btn-lg bg-red-500 text-white uppercase relative right-0'>Add Blog Now</button>
            </Link>
            <h3 className='text-center text-3xl font-bold my-5 uppercase'>Your All Blogs</h3>

          </div>

            <div className='grid grid-cols-1 gap-10'>
                
                {
                   blogs.length>0 ? blogs.map(blog=><BlogCard refetch={refetch}
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>) 
                    : <div className='h-screen'><h3 className='text-red-500 text-4xl text-center my-10'>Opps!!! No Blog Posted Yet</h3></div>
                }
            </div>
        </div>
    );
};

export default ContentManagement;