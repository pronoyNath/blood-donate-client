import parse from 'html-react-parser';
import useAuth from "../../Hooks/useAuth";

const PublicBlogCard = ({ blog }) => {
    // console.log(Object.keys(blog).join(","));

    const { _id, blogTitle, imageURL, content, email, blogStatus, userName, userImg } = blog;

    return (
        <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
            <div className="flex items-center space-x-4">
                <img alt="" src={userImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{userName}</a>
                    {email}
                </div>
            </div>
            <div>
                <img src={imageURL} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{blogTitle}</h2>
                <p className="text-sm text-gray-400">{parse(content)}</p>
            </div>
        </div>
    );
};

export default PublicBlogCard;