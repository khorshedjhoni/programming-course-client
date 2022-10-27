import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';import { useEffect } from 'react';
import { useState } from 'react';
import './SingleCourse.css'
import Pdf from "react-to-pdf";

const ref = React.createRef();

const SingleCourse = () => {
    const courseData = useLoaderData();
    
    const {name,img,details,id} = courseData
    return (
        <div>
            <div className='course-heading'>
                <h3>Course Info</h3>
                <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) =>  <Button onClick={toPdf} variant="secondary">Pdf to download</Button>}
      </Pdf>
            </div>
        <div className='course-details'>
           <div className='d-flex justify-content-between'>
        
           </div>     
      <div ref={ref}>
      <h3>Course Name: {name}  </h3>

      <img src={img} alt="" />
            <div>
                {details}
            </div>
      </div>
            <Button variant='outline-success'><Link to ={`/checkout/${id}`}>Premium Access</Link></Button>
           
           
        </div>
        </div>
    );
};

export default SingleCourse;