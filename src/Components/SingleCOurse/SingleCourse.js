import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SingleCourse.css'

const SingleCourse = () => {
    const courseData = useLoaderData();
    const {name,img,details} = courseData
    return (
        <div className='course-details'>
            <h3>Course Name: {name}</h3>
            <img src={img} alt="" />
            <div>
                {details}
            </div>

        </div>
    );
};

export default SingleCourse;