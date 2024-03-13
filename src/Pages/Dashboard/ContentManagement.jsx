import { useQuery } from '@tanstack/react-query';
import BlogCard from '../../components/BlogCard/BlogCard';
import axiosSecure from '../../hooks/useAxiosSecure';
import { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import addAnimation from '../../assets/animations/addAnimation.json'
import Lottie from 'lottie-react';
import Buttons from '../../sharedComponents/Buttons/Buttons';

const ContentManagement = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');


    // tanstack query for updated data get 
    const { data: allBlogs = [], isLoading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs`);
            return res.data.reverse();
        }
    })

    // handle filter change
    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    // filter blogs based on selected filter
    const filteredBlogs = selectedFilter === 'all' ? allBlogs :
        allBlogs.filter(blog => blog.blogStatus === selectedFilter);

    // console.log(allBlogs.slice().reverse());
    // console.log(selectedFilter);
    return (
        <div className=''>
            <div className='flex flex-row-reverse mb-5 items-center  justify-between py-3  border-y-2  border-y-red-500'>
                <Buttons buttonText={"Add Blog Now"} route={'/dashboard/content-management/add-blog'} icon={<Lottie animationData={addAnimation} />} />
                <div className='flex items-center gap-5'>
                    <h3 className='text-center text-3xl font-bold my-5 uppercase'>Write Your Blogs </h3>
                    <FaArrowAltCircleRight className='text-3xl' />
                </div>

            </div>

            <div className='my-5 space-y-3'>
                <h3 className='text-5xl font-bold text-center uppercase'>List Of Blogs</h3>
                <p className='text-xl text-center'>Update Blogs For Publish/Unpublish, Delete</p>
            </div>

            {/* will do in future  */}
            {/* <div className="my-5 text-black mr-8 ml-5 lg:ml-0 flex gap-3 items-center ">
                <div className="text-lg mt-2 lg:mt-0 text-red-500 font-bold ">Filter By User Staus:</div>

                <select className="rounded p-1 ml-5 lg:ml-0 mt-5 lg:mt-0 bg-red-500 text-white lg:text-lg " name="filter" id="filter"
                   value={selectedFilter}
                   onChange={handleFilterChange}
                >
                    <option value="all">All</option>
                    <option value="publish">Published</option>
                    <option value="draft">Draft</option>
                </select>
            </div> */}

            <div className='grid grid-cols-1 gap-10'>
                {

                    allBlogs.length > 0 ? (
                        allBlogs.slice().reverse().map(blog => (
                            <BlogCard key={blog._id}
                                blog={blog}
                                refetch={refetch}
                                setFilter={setSelectedFilter}
                            ></BlogCard>
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