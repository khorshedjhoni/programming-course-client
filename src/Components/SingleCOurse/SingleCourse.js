import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SingleCourse.css'
import Pdf from "react-to-pdf";
const ref = React.createRef();



const SingleCourse = () => {
    const courseData = useLoaderData();
   
    const {name,img,details,} = courseData
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
           <h3>Course Name: {name}  </h3>
           
           </div>
           
      <div ref={ref}>
      
      <img src={img} alt="" />
            <div>
                {details}
            </div>
      </div>
            
            <button><Link to='/checkout'>Premium access</Link></button>

        </div>
        </div>
    );
};

export default SingleCourse;