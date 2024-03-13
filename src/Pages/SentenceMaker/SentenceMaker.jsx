import ReactFlow, { Background, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { nodes, edges } from './initialElements';
import hiAnim from '../../assets/animations/hiAnimation.json'
import Lottie from 'lottie-react';

const proOptions = { hideAttribution: true };

const SentenceMaker = () => {

    return (
        <div style={{ width: '100vw', height: '100vh' }} className='max-w-7xl mx-auto z-[999] hidden md:block'>
            <div className='flex gap-2 items-center justify-center'>
                <Lottie animationData={hiAnim} className=' h-[150px]' />
                <h3 className='  text-4xl font-bold  uppercase'>Hello Buddy You Can Play With <span className='text-red-500'>this Box's</span>
                </h3>
            </div>
            <ReactFlow

                defaultNodes={nodes}
                defaultEdges={edges}
                fitView
                proOptions={proOptions}
                nodesDraggable
            >
                <MiniMap nodeStrokeWidth={3} zoomable pannable />

                <Background />
            </ReactFlow>
        </div>
    );
};

export default SentenceMaker;