import React from 'react';
import {
    FaRegImage,
    FaRegListAlt,
    FaRegSmile,
    FaCalendarCheck,
} from 'react-icons/fa';

const CreateTweet = () => {
    return (
        <div className='create'>
            <div className='create__first'>
                <div className='create__img'>
                    <img src='/images/nilesh1.jpg' alt='profile img' />
                </div>
                <div className='creact__input'>
                    <input
                        type='text'
                        className='create__control'
                        placeholder="what's happing?"
                    />
                </div>
            </div>
            <div className='create__second'>
                <div className='create__icon'>
                    <FaRegImage className='ic' />
                    <FaRegListAlt className='ic' />
                    <FaRegSmile className='ic' />
                    <FaCalendarCheck className='ic' />
                </div>
                <div className='create__btn'>
                    <a href=''>Tweet</a>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;
