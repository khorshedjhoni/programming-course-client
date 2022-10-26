import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCart from '../CourseCart/CourseCart';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div className='ms-lg-4 me-lg-4 b-5'>
            <Row>
                <Col className='d-block col-12 col-lg-2 d-lg-flex justify-content-center '>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col className='d-block col-12 col-lg-10 d-lg-flex justify-content-center'>
                    <CourseCart></CourseCart>
                </Col>
            </Row>
            
        </div>
    );
};

export default Courses;