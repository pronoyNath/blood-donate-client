
import { Example2 } from './Example2';
// import { createRoot } from 'react-dom/client'
import './styles.css'
// import { Logo } from '@pmndrs/branding'
// import { Root } from 'postcss';

const Example = () => {
  return (
    <div className='bg-white w-full h-full -mt-28 '>
      <Example2 />
    </div>
  );
};
// createRoot(document.getElementById('root')).render(<Example2 />)
export default Example;