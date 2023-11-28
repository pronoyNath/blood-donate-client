import parse from 'html-react-parser';
import useAuth from "../../Hooks/useAuth";

const BlogCard = ({blog}) => {
    // console.log(Object.keys(blog).join(","));

    const {user} = useAuth();
    // console.log(user);
    const {_id,blogTitle,imageURL,content,email,blogStatus} = blog;
    return (
        <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src={user?.photoURL} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{user?.displayName}</a>
                    <span className={`text-md uppercase ${blogStatus == 'draft' && 'text-red-500'}`}>{blogStatus}</span>
                </div>
            </div>
            <div>
                <img src={imageURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{blogTitle}</h2>
                <p className="text-sm dark:text-gray-400">{parse(content)}</p>{console.log(content)}
            </div>
        </div>
    );
};

export default BlogCard;