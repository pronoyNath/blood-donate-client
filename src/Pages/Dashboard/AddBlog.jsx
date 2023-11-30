import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import parse from 'html-react-parser';
import { imageUpload } from '../../api/ImageUploadApi';
import axiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import BlogCard from '../../components/BlogCard/BlogCard';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../Hooks/useBlogs';
const AddBlog = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const {user} = useAuth();
    const navigate = useNavigate();
    const [blogs,isLoading,refetch] = useBlogs();
    //  // tanstack query for updated data get 
    //  const { data: blogs = [], refetch } = useQuery({
    //     queryKey: ['blogs',user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/blogs/${user?.email}`);
    //         return res.data.reverse();
    //     }
    // })

    // console.log(blogs);
console.log(user);
    const handleBlog = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const blogTitle = form.get('blogTitle');
        //image uploading using hosting side (imgbb api)
        const img = e.target.img.files[0]
        const imageData = await imageUpload(img)
        //    console.log(imageData.data.display_url);
        const imageURL = imageData?.data?.display_url
        const email = user?.email;
        const userImg = user?.photoURL;
        const userName = user?.displayName; 
        const blogContent = {
            blogTitle,imageURL,content,email,
            blogStatus : 'draft',userImg,userName

        }
        // console.log(blogContent);

        axiosSecure.post('/add-blog',blogContent)
        .then(({data})=>{
            if(data?.acknowledged){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Wait For Acception By Admin",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/dashboard/content-management')

            }
        })
        .catch(err=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "sorry!!!",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }

    return (
        <div className=''>
            <h3 className='text-3xl text-center text-red-500 font-bold mt-5 mb-10'>Write Your Blog Here</h3>


            <form onSubmit={handleBlog}>
            <div>
                <div className="form-control w-full max-w-xs my-5">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Title of the blog</span>
                    </label>
                    <input type="text" name='blogTitle' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>

            <div className="" >
            <label className="label">
                        <span className="label-text font-semibold text-xl">Upload Thumbnail Tmage</span>
                    </label>
                <input type="file" id="img" name="img" accept="image/*" className="file-input file-input-bordered w-1/2  " required />
            </div>

            <div className='mt-5'>
                <label className="label">
                    <span className="label-text font-semibold text-xl">Content of the blog</span>
                </label>
                <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={newContent => setContent(newContent)}
                />
                {/* {parse(content)} */}

            </div>

            <button type='submit' className='btn btn-lg bg-red-500 text-white my-5 w-full hover:bg-red-400'>Post Blog</button>
            </form>


            {/* <div className='grid grid-cols-1 gap-10'>
                <h3 className='text-center text-3xl font-bold my-5 uppercase border-y-2 py-3 border-y-red-500'>Your All Blogs</h3>
                {
                   blogs.length>0 ? blogs.map(blog=><BlogCard 
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>) 
                    : <h3 className='text-red-500 text-4xl text-center my-10'>Opps!!! No Blog Posted Yet</h3>
                }
            </div> */}
        </div>
    );
};

export default AddBlog;