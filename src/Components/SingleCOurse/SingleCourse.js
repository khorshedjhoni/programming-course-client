import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SingleCourse.css'


const SingleCourse = () => {
    const courseData = useLoaderData();
    const {name,img,details,id} = courseData
    return (
        <div className='course-details'>
            <h3>Course Name: {name}</h3>
            <img src={img} alt="" />
            <div>
                {details}
            </div>
            <button><Link to='/checkout'>Premium access</Link></button>

        </div>
    );
};

export default SingleCourse;