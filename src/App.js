import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Container} from 'react-bootstrap'
import About from "./components/About";
import Education from "./components/Education";

const App = () => (
  <div className="App">

    <Container>
    <Education />
    <About />
    </Container>
    
  </div>
);

export default App;
