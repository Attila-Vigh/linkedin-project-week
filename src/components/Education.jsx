import { Component } from "react";
import { Container, ListGroup,Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import "../Assets/Education.css";
class Education extends Component {
  render() {
    return (
      <Container className=" mt-4 eduPad">
          
          <ListGroup className="mt-" variant="flush">
          <div className="d-flex justify-content-between">
            <h6>Education</h6> <AiOutlinePlus />
          </div>
          <ListGroup.Item className="edu">
            <div className="d-flex justify-content-between">
              <p className="font-weight-bold">Placeholder</p> <BiPencil />
            </div>
            <p>info goes here</p>
            
          </ListGroup.Item>
          <ListGroup.Item className="edu">
              
            <p className="font-weight-bold">Placeholder</p>
            <p>info goes here</p>
          </ListGroup.Item>
          <ListGroup.Item className="edu">
            <p className="font-weight-bold">Placeholder</p>
            <p>info goes here</p>
          </ListGroup.Item>
        </ListGroup>
          
        
      </Container>
    );
  }
}

export default Education;
