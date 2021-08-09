import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BsDot } from "react-icons/bs"
import Buttons from './HeaderButtons'
import { AUTHORIZATION } from '../../../../hidden/credentials';
import useFetch from '../../../../util/useFetch';

const HeaderIntro = ({ user: { title, name, surname, area, _id } }) => {

    const URL = `https://striveschool-api.herokuapp.com/api/profile/${_id}/experiences`
    const userFetch = useFetch(URL, AUTHORIZATION)

    return (
        <Card border="0 ml-4" >
            <Card.Body>
                <Row>
                    <Col xs={12} md={7}>
                        <div className="">{name}  {surname}</div>
                        <div className="">{title}</div>
                        <div className='d-flex align-items-center'>
                            <Card.Text className="text-black-50 mb-0"> {area} </Card.Text>
                            <BsDot className='mx-1' />
                            <Card.Link className="text-primary font-weight-bold" href="#">Contact Info</Card.Link>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        {
                            userFetch.dataList?
                            <Card.Text className="text-black-50 mb-0">
                                <img src={userFetch.dataList[0].image} alt="" />
                                <span>{userFetch.dataList[0].company}</span>
                            </Card.Text> :
                            <Card.Text className="text-black-50 mb-0">
                                <span>No Information updated</span>
                            </Card.Text>
                        }
                        {/* <Card.Text className="text-black-50 mb-0"> Study </Card.Text> */}
                    </Col>
                </Row>
                <Row>
                    <div className="text-primary my-1 font-weight-bold" href="#">500+ connections</div>
                </Row>
                <Buttons />
            </Card.Body>
        </Card>
    );
}

export default HeaderIntro;