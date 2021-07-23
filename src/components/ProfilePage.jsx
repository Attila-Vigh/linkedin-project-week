import React from 'react'
import { AUTHORIZATION } from '../hidden/credentials'
import useFetch from '../util/useFetch';
import { Container, Row, Col } from 'react-bootstrap'
import Activity from './Activity/Activity'
import Header from './Header/Header'
import SidebarOptionalMenue from './AsideProfilesListItems/SidebarOptionalMenue'
import Interests from './Interests/Interests.jsx'
import ViewedProfile from './AsideProfilesListItems/ViewedProfile'
import ExperienceList from './Experience/ExperienceList'
import Dashboard from './DashBoardAndAbout/DashBoard'
import About from './DashBoardAndAbout/About'
import Education_Edit from './Education_Edit'

export default function ProfilePage() {

    const URL = 'https://striveschool-api.herokuapp.com/api/profile/me'
    const userFetch = useFetch( URL, AUTHORIZATION )
    console.log(userFetch);

    return (
        <Container id='profilepage' className='mt-3'>
            <Row>
                <Col className='col-md-8 ordder-md-1 pr-2'>
                    <Header { ...userFetch } />
                    <Dashboard/>
                    <About/>
                    <Activity/>
                    <ExperienceList/>
                    {/* <Education_Edit/> */}
                    <Interests/>
                    
                </Col>
                <Col className='col-md-4 ordder-md-2 pl-3'>
                    <SidebarOptionalMenue/>
                    <ViewedProfile title='People also viewed'/>
                    <ViewedProfile title='People you may know'/>
                </Col>
            </Row>
        </Container>
    )
}
