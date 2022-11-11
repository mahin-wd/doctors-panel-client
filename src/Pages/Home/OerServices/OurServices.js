import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import Card from './Card';

const OurServices = () => {

    const cardData = [
        {
            id: 1,
            image: fluoride,
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti?"
        },
        {
            id: 2,
            image: cavity,
            name: "Cavity Filling",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti?"
        },
        {
            id: 3,
            image: whitening,
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti?"
        }
    ]

    return (

        <div className='mt-20'>
            <p className="text-2xl text-secondary font-bold">Our Services</p>
            <h3 className="text-4xl my-3">Services We Provide</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    cardData.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>

        </div>
    );
};

export default OurServices;