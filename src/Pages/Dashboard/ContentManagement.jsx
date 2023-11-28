import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ContentManagement = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');

    return (
        <div className=''>
            <Link to='/dashboard/content-management/add-blog'>
            <button className='btn btn-lg bg-red-500 text-white uppercase relative right-0'>Add Blog Now</button>
            </Link>
        </div>
    );
};

export default ContentManagement;