import React, { useEffect } from 'react';
import { useState } from 'react';
import AllCourses from '../AllCourses/AllCourses';


const CourseCart = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('https://course-server-gamma.vercel.app/course-data')
        .then(res => res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <div className='cards'>
                    
         {
            courses.map(course=> <AllCourses 
                key={course.id}
                course={course}
            ></AllCourses>)
         }
            </div>
           
           
        </div>
    );
};

export default CourseCart;