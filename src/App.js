import Footer from './components/Footer';
import { AUTHORIZATION } from '../src/hidden/credentials'
import useFetch from '../src/util/useFetch';
import TopNavbar from './components/Navbar/TopNavbar';
import ProfilePage from '../src/components/ProfilePage/ProfilePage'
import HomePage from './components/NewsFeed/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'



function App() {

    const URL = 'https://striveschool-api.herokuapp.com/api/profile/me'
    const userFetch = useFetch( URL, AUTHORIZATION )

   
    return (
        <div className="App">
            <Router>
                <TopNavbar />
                <Route  path='/' exact render={() => <ProfilePage {...userFetch}/>} />
                <Route  path='/home' exact render={() => <HomePage {...userFetch} />} />
                <Footer />
            </Router>
        </div>
    );

}


export default App;
