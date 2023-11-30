import { useQuery } from '@tanstack/react-query';
import useBlogs from '../../Hooks/useBlogs';
import useLoader from '../../Hooks/useLoader';
import PublicBlogCard from '../../components/PublicBlogCard/PublicBlogCard';
import axios from 'axios';
import { useEffect } from 'react';

const Blogs = () => {
    // const [blogs,isLoading,refetch] = useBlogs();

    const { data: blogs = [], isLoading, refetch } = useQuery({
            queryKey: ['blogs'],
            queryFn: async () => {
                const res = await axios.get(`http://localhost:5000/blogs`);
                return res.data.reverse();
            }
        })

    const loader = useLoader(isLoading);

    const publishedBlogs = blogs.filter(blog=>blog.blogStatus === 'publish')

    if(isLoading){
        return loader;
    }
    return (
        <div className=' pt-36 pb-10 bg-gray-800'>
            <div className='max-w-6xl  mx-auto'>
            <div>
                <h3 className='text-3xl mb-5 font-bold text-center text-red-500'>Read Blogs</h3>
                <p className='text-center mb-5 text-xl border-b border-b-red-500 pb-2 font-semibold text-white'>Life in Every Drop: Inspiring Tales of Blood Donation and Lifesaving Moments</p>
            </div>
             <div className='grid grid-cols-1 gap-10'>
                {publishedBlogs.length > 0 ? (
                    publishedBlogs.map(blog => (
                        <PublicBlogCard  key={blog._id} blog={blog}></PublicBlogCard>
                    ))
                ) : (
                    <div className='h-screen'>
                        <h3 className='text-red-500 text-4xl text-center my-10'>Opps!!! No Blog Posted Yet</h3>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Blogs;