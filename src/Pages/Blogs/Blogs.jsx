import useBlogs from '../../Hooks/useBlogs';
import PublicBlogCard from '../../components/PublicBlogCard/PublicBlogCard';

const Blogs = () => {
    const [blogs,isLoading,refetch] = useBlogs();
    return (
        <div className=' pt-36 pb-10 bg-gray-800'>
            <div className='max-w-6xl  mx-auto'>
            <div>
                <h3 className='text-3xl mb-5 font-bold text-center text-red-500'>Read Blogs</h3>
                <p className='text-center mb-5 text-xl border-b border-b-red-500 pb-2 font-semibold text-white'>Life in Every Drop: Inspiring Tales of Blood Donation and Lifesaving Moments</p>
            </div>
             <div className='grid grid-cols-1 gap-10'>
                {blogs.length > 0 ? (
                    blogs.map(blog => (
                        <PublicBlogCard refetch={refetch} key={blog._id} blog={blog}></PublicBlogCard>
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