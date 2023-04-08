import React from 'react';

const Book = ({book}) => {
    const {image, price, subtitle, title} =book
    return (
        <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={image} alt="" />
            <div className='bg-black bg-opacity-50 opacity-0 hover:opacity-50 absolute text-gray-300 inset-0 transition-opacity duration-200 p-6 flex flex-row' >
                <p>{title}</p>
                <p>{subtitle}</p>
                <p className='mt-auto'>{price}</p>
            </div>
        </div>
    );
};

export default Book;