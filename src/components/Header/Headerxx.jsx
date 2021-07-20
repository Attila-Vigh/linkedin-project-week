import './Header.scss'
import React from 'react';
import { Button, Card, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { BiPencil          } from 'react-icons/bi';
import { MdPhotoCamera     } from 'react-icons/md';
import { HiDotsHorizontal  } from 'react-icons/hi';
import { ImPencil          } from 'react-icons/im';
import OpenToWork from './HeaderOpenToWork';

const Header = ({ user:{ name, surname, email, bio, title, area, image, username, createdAt, updatedAt, } }) =>  
        <header >
            {/* <Jumbotron className="jumbo">
                    <MdPhotoCamera className="MdPhotoCamera"/>
                    <img
                        className="image"
                        src={ image }
                    />
            </Jumbotron> */}
            
            {/* <div className='header-icons d-flex justify-content-end'>
                <RiLinkedinBoxFill className="RiLinkedinBoxFill" />
                <BiPencil          className="BiPencil"          />
            </div> */}

            <Row>
                <Col>
                    <Card border="0" >
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Card.Title className="bg-white border-0 m-0" as="h3">{ name  }  { surname }</Card.Title>
                                    <Card.Subtitle className="text-dark my-1 font-weight-normal">{ title }</Card.Subtitle>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card.Text className="text-black-50 mb-0"> company </Card.Text>
                                    <Card.Text className="text-black-50 mb-0"> Study </Card.Text>
                                </Col>
                            </Row>
                            <Card.Text className="text-black-50 mb-0"> { area } </Card.Text>
                            <Card.Link className="text-primary my-1 font-weight-bold" href="#">Contact Info</Card.Link>
                            <br/>
                            <Card.Link className="text-primary my-1 font-weight-bold" href="#"> 47 connections</Card.Link>
                        </Card.Body>
                    </Card>
                    {/* <Row border="0" className="p-0 m-0 ml-3 " >
                        <Col   className="d-flex p-0 m-0" xs={12} md={6} >
                            <Button className="header-btn rounded-circle font-weight-boldd-flex flex-grow-1"> Opent to </Button>
                            <Button className="header-btn rounded-circle bg-white text-black-50 font-weight-bold ml-2 flex-grow-1"> Add section </Button>
                            <Button className="header-btn rounded-circle bg-white text-black-50 font-weight-bold ml-2 flex-grow-2"> {  window.innerWidth < 576 ? <HiDotsHorizontal /> : 'More'} </Button>
                        </Col>
                    </Row> */}
                    {/* <Card border="0" style={{ backgroundColor: "#e9e5df" }} className="p-3 m-0 mt-4 ml-3 w-50" >
                        <Card.Body   className="p-0 m-0 position-relative">
                            <ImPencil 
                                className="p-0 m-0 position-absolute float-right" 
                                style={{ left: "90%" }}
                            />
                            <Card.Title className="border-0 m-0" as="h6"> Open to work</Card.Title>
                            <Card.Text  className="m-0 p-0"> Junior Web Developer roles </Card.Text>
                            <Card.Link  className="text-primary m-0 p-0 font-weight-bold" href="#">See details</Card.Link>
                        </Card.Body>
                    </Card> */}
                    
                </Col>
            </Row>

            <Row>
            </Row>
            
            <OpenToWork />

    
            




        </header>
 
export default Header;