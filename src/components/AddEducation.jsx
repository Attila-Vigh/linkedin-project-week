import { Modal , Button, Form , Col ,Jumbotron ,Container} from 'react-bootstrap'
import { useState ,useEffect} from "react";

function AddEducation() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Show
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <div style={{position:'fixed', backgroundColor:'#f7f9fa', width:'498px',top:'0',zIndex:'1'}}>
          <Modal.Header closeButton>
            <Modal.Title >Add education</Modal.Title>
          </Modal.Header>
          </div>
          
            <Container style={{backgroundColor:'#d7eff5',marginTop:'40px'}}>
            
            <h6 className="mt-3">Notify network</h6>
            <p>
            <span className='text-muted'>If enabled,your network may be informed of jobschanges, and work anniversaries. It may take up to 2 hours to share your job changes with your network.</span><a href="#"> Learn how these are shared and when</a>
            </p>
            </Container>
       
        
          <Modal.Body>

          <Form>
      
            <Form.Group controlId="formBasicSchool">
                <Form.Label>School *</Form.Label>
                <Form.Control type="text" required placeholder="Ex:Boston University" />
                <Form.Text className="text-muted" style={{color:'red'}}>
                School is a required field
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicDegree">
                <Form.Label>Degree </Form.Label>
                <Form.Control type="text" placeholder="Ex:Bachelor's" />
            </Form.Group>

            <Form.Group controlId="formBasicStudy">
                <Form.Label>Field of study</Form.Label>
                <Form.Control type="text" required placeholder="Ex:Business" />
            </Form.Group>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Start date </Form.Label>
                <Form.Control as="select" defaultValue="Month">
                    <option>Month</option>
                    <option>Janaury</option>
                    <option>Febraury</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label></Form.Label>
                <Form.Control as="select" style={{marginTop:'7px'}} defaultValue="Year">
                    <option>2021</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                </Form.Control>
                </Form.Group>

           </Form.Row>

           <Form.Row>
                <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>End date(or expected) </Form.Label>
                <Form.Control as="select" defaultValue="Month">
                    <option>Month</option>
                    <option>Janaury</option>
                    <option>Febraury</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label></Form.Label>
                <Form.Control as="select"  style={{marginTop:'7px'}} defaultValue="Year">
                    <option>2021</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                </Form.Control>
                </Form.Group>

           </Form.Row>

           <Form.Group controlId="formBasicGrade">
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Activities and societies</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ex:Alpha Phi Omega, Marching Band, Volleyball" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
        </Form>
        <div className='text-muted'>
          <h6>Media</h6>
          <p >Add or link to external documents, photos, sites, videos, and presentations.<a  href="#">Learn more</a></p>
          </div>
          <div className='d-flex text-muted mb-5'><i className="bi bi-plus-lg my-1 mx-2"></i> <h3 >Add media</h3></div>
          </Modal.Body>
          <Modal.Footer style={{position:'fixed', width:'498px',backgroundColor:'#f7f9fa' ,zIndex:'99',bottom:'0'}}>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default AddEducation