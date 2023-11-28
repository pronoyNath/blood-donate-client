import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';

const AddBlog = () => {
    const editor = useRef(null);
	const [content, setContent] = useState('');

    return (
        <div className=''>
            <h3 className='text-3xl text-center text-red-500 font-bold mt-5 mb-10'>Write Your Blog Here</h3>

            <JoditEditor
			ref={editor}
			value={content}
            onChange={newContent => setContent(newContent)}
		/>

        {content}
        </div>
    );
};

export default AddBlog;