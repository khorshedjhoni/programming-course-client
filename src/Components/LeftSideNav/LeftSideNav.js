import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/course-data')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className='leftNav'>
           <h4>Total course: {courses.length}</h4>
           {
            courses.map(course=><div className='mb-3'
            key={course.id} >
                <Link className='link' to = {`/course/${course.id}`}>{course.name}</Link>
            </div>)
           }
        </div>
    );
};

export default LeftSideNav;