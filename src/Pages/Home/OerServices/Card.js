import React from 'react';

const Card = ({service}) => {
    const {name, image, description} = service;
    return (
        <div className='flex  flex-col items-center w-full shadow-lg rounded-xl py-20 px-5'>
            <img className='w-20' src={image} alt="" />
            <div>
                <h2 className="text-xl font-semibold my-3">{name}</h2>
                <p className='font-semibold'>{description}</p>
            </div>
        </div>
    );
};

export default Card;