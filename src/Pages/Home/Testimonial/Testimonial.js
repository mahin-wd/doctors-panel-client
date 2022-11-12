import React from 'react';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import icon from '../../../assets//icons/quote.svg'
import Card from './Card';

const Testimonial = () => {

    const testimonoalData = [
        {
            id: 1,
            name: 'John Smith',
            email: 'john@smith.com',
            image: person1,
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fugiat sit veritatis earum mollitia iste error provident placeat hic atque voluptatibus alias cumque assumenda perferendis eligendi natus porro optio, obcaecati fugit explicabo quibusdam quasi. Eveniet veritatis non provident."
        },
        {
            id: 2,
            name: 'Liza Kiza',
            email: 'lizakiza@gmail.com',
            image: person2,
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fugiat sit veritatis earum mollitia iste error provident placeat hic atque voluptatibus alias cumque assumenda perferendis eligendi natus porro optio, obcaecati fugit explicabo quibusdam quasi. Eveniet veritatis non provident."
        },
        {
            id: 3,
            name: 'Jordan Bronge',
            email: 'jordan@bronge.com',
            image: person3,
            comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fugiat sit veritatis earum mollitia iste error provident placeat hic atque voluptatibus alias cumque assumenda perferendis eligendi natus porro optio, obcaecati fugit explicabo quibusdam quasi. Eveniet veritatis non provident."
        }
    ]

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='text-start ml-5 my-20'>
                    <p className="text-2xl font-bold text-secondary">Testimonial</p>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>

                <div>
                    <img className='w-1/2' src={icon} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 mx-10'>
                {
                    testimonoalData.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Testimonial;