import { Component } from "react";
import { Container, ListGroup,Row } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import "../Assets/Education.css";
import EducationBodyItem from "./EducationBodyItem";

class Education extends Component {
  render() {
    return (
      <Container className=" mt-4 eduPad">
        {/* SectionHeader */}
        <Row className="eduPad-section"></Row>
          
          <ListGroup className="" variant="flush">
            <img src="" alt=""></img>
          <div className="d-flex justify-content-between">
            <h6>Education</h6> <AiOutlinePlus />
          </div>
          <EducationBodyItem 
            img     = 'https://picsum.photos/100'
            icon    = {  <BiPencil /> }
            title   = 'title'
            subitle = 'subitle'
            description    = 'description'
          />
          <EducationBodyItem 
            img     = 'https://picsum.photos/100'
            title   = 'title'
            subitle = 'subitle'
            description    = 'description'
          />
        </ListGroup>
          
        
      </Container>
    );
  }
}

export default Education;
