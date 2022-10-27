import React from 'react';

import { Link } from 'react-router-dom';
import './Allcourses.css'

const AllCourses = ({course}) => {
    const {id,name,img,details} = course
    return (

        <div>
            <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h2>{name}</h2>
          <p>
            {
                details.length>250?
                <>{details.slice(0,250) + '....' } <Link to = {`/course/${id}`}>Read more</Link>
                  
                </>
                :details
            }
          </p>
         
        </div>
      </div>
        </div>

       

    );
};

export default AllCourses;