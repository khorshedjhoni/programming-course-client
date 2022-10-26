import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SingleCourse.css'



const SingleCourse = () => {
    const courseData = useLoaderData();
    const {name,img,details,} = courseData
    return (
        <div className='course-details'>
           <div>
           <h3>Course Name: {name}  </h3>

           </div>
            <img src={img} alt="" />
            <div>
                {details}
            </div>
            <button><Link to='/checkout'>Premium access</Link></button>

        </div>
    );
};

export default SingleCourse;