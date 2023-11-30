import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import BlogCard from '../../components/BlogCard/BlogCard';
import axiosSecure from '../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import useLoader from '../../Hooks/useLoader';
import useBlogs from '../../Hooks/useBlogs';

const ContentManagement = () => {


    // tanstack query for updated data get 
    // const { data: blogs = [], isLoading, refetch } = useQuery({
    //     queryKey: ['blogs'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/blogs`);
    //         return res.data.reverse();
    //     }
    // })
    // const [blogs, isLoading, refetch] = useBlogs();
    const [allBlogs,setAllBlogs] = useState([]);

    // const [filteredBlogs, setFilteredBlogs] = useState(blogs);

    // const loader = useLoader(isLoading);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const allData = async()=>{
            const res = await axiosSecure.get(`/blogs`);
            if(filter === 'all'){
                // console.log(res.data);
                setAllBlogs(res.data)
            }
            // return res.data.reverse();
            // console.log(res);
            // console.log(filter);
            else{
                const filtered = res.data.filter(blg => blg.blogStatus === filter)
                // console.log(filtered);
                setAllBlogs(filtered)
            }
            
    }
        allData();
    }, [filter])

    const handleFilter = async (e) => {
        // const selectedValue = e.target.value;
        // console.log(selectedValue);
        setFilter(e.target.value)
        // // Filter blogs based on the selected donation status
        // // const filtered = blogs.filter(blg => {
        // //     if (selectedValue === 'all') {
        // //         return true;
        // //     } else {
        // //         return blg.blogStatus === selectedValue;
        // //     }
        // // });
        // // console.log(filtered);
        // setFilteredBlogs(filtered);
    };

    // if (isLoading) {
    //     return loader;
    // }
console.log( allBlogs.slice().reverse());
    return (
        <div className=''>
            <div className='flex flex-row-reverse mb-5 items-center  justify-between py-3  border-y-2  border-y-red-500'>
                <Link to='/dashboard/content-management/add-blog'>
                    <button className='btn btn-lg bg-red-500 text-white uppercase relative right-0'>Add Blog Now</button>
                </Link>
                <h3 className='text-center text-3xl font-bold my-5 uppercase'>Your All Blogs</h3>

            </div>
            <div className="my-5 text-black mr-8 ml-5 lg:ml-0 flex gap-3 items-center ">
                <div className="text-lg mt-2 lg:mt-0 text-red-500 font-bold ">Filter By User Staus:</div>

                <select onChange={handleFilter} className="rounded p-1 ml-5 lg:ml-0 mt-5 lg:mt-0 bg-red-500 text-white lg:text-lg " name="filter" id="filter"
                >
                    <option value="all">All</option>
                    <option value="publish">Published</option>
                    <option value="draft">Draft</option>
                </select>
            </div>

            <div className='grid grid-cols-1 gap-10'>
                {
                    // filteredBlogs.length > 0 ? (
                    //     filteredBlogs.map(blog => (
                    //         <BlogCard refetch={refetch} key={blog._id} blog={blog}></BlogCard>
                    //     ))
                    // )
                    //     // :
                         allBlogs.length > 0 ? (
                            allBlogs.slice().reverse().map(blog => (
                                <BlogCard setFilter={setFilter}  key={blog._id} blog={blog}></BlogCard>
                            ))
                        ) 
                        : (
                            <div className='h-screen'>
                                <h3 className='text-red-500 text-4xl text-center my-10'>Opps!!! No Blog Posted Yet</h3>
                            </div>
                        )}
            </div>
        </div>
    );
};

export default ContentManagement;