import { Component } from "react";
import { Container, ListGroup,Row } from "react-bootstrap";

const Education = ({ img, title, subitle, description, icon }) =>  

    <ListGroup.Item className="edu d-flex">
        <img 
            src={ img } 
            alt="" 
            className="flex-grow-2 mr-4 mb-4 mt-3"
        
        />
        <div className="d-flex flex-column flex-grow-1  justify-content-between">
            <h4 className="font-weight-bold" > { title   } </h4>
            <h5> { subitle } </h5>
            <p> { description } </p>
        </div>
        <div className="flex-grow-2" > { icon } </div>
    
    </ListGroup.Item>


export default Education;