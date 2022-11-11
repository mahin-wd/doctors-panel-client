import React from 'react';

const Card = ({ data }) => {
    const { name, email, image, comment } = data;
    return (
        <div className='flex flex-col text-start shadow-xl rounded-xl p-10'>
            <div>
                {comment}
            </div>
            <div className='flex items-center mt-5'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className='ml-5 text-start'>
                    <h2 className="text-xl">{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;