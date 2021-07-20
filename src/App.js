import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Education from "./components/Education";

const App = () => (
  <div className="App">

    <Education />
    <Dashboard />
    <About />
  </div>
);

export default App;
