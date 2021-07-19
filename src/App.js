
import './App.css';
import SideViewedProfile from './components/SideViewedProfile'
import { Container , Row ,Col } from 'react-bootstrap'

function App() {
  return (
    <Container className="my-5">
      <Row className='justify-content-end'>
        <Col md={4} >
    
      <SideViewedProfile />
    
    </Col>
    </Row>
    </Container>
  );
}

export default App;
