import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'


const CheckOut = () => {
    const checkOutData = useLoaderData();
    const {name,img}= checkOutData
    return (
        <div className='access-div'>
           <h2>Your access success</h2>
           <div className='div-body'>
                <h5>Your Course Name: {name}</h5>
                <img src={img} alt="" />
                <p>Course Terms and Condition</p>
                <span><i>Course Validity: 3 month</i>
                </span>


           </div>
        </div>
    );
};

export default CheckOut;