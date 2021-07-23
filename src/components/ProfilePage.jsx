import React from 'react'
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
    return (
        <Container id='profilepage' className='mt-5'>
            <Row>
                <Col className='col-md-8 ordder-md-1 pr-2'>
                    <Header/>
                    <Dashboard/>
                    <About/>
                    <Activity/>
                    <ExperienceList/>
                    <Education_Edit/>
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
