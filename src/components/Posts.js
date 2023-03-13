import React from 'react';
import { FaComment, FaHeart, FaRegChartBar, FaRegCheckCircle, FaLeaf } from 'react-icons/fa';

const Posts = () => {
    return (
        <div className='postss'>
            <div className='postss__first'>
                <div className='posts__first__img'>
                    <img src='/images/nilu11.jpg' alt='profile img' />
                </div>

                <div className='posts__first__name'>
                    <strong>Nilesh Choudhary</strong> <FaRegCheckCircle className='verify'/>
                </div>
                <div className='posts__first__username'>
                    @81nilesh <span>6m</span>
                </div>
            </div>
            <div className='postss__details'>
                <div className='postss__details__msg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id 
                    iura, enim pariatur ullam eligendi vero possimus ad error nemo. Facere 
                    aliquid dolores placeat vitae accusamus exce...

                </div>
                <div className='postss__details__img'>
                    <img src='/images/cricket.jpg' alt='Post picture'/>
                </div>
                <div className='reactions'>
                    <span><FaComment className='re'/> 45</span>
                    <span><FaRegChartBar className='re'/> 4</span>
                    <span><FaHeart className='re'/> 345</span>
                    <span><FaLeaf className="re"/> 234</span>
                </div>
            </div>
        </div>
    );
};

export default Posts;
