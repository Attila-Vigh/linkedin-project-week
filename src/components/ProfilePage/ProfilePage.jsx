import React from 'react'
// import useFetch from '../util/useFetch';
import { Container, Row, Col } from 'react-bootstrap'
import Activity from './MainBar/Activity/Activity'
import Header from '../ProfilePage/MainBar/Header/Header'
import SidebarOptionalMenue from './SideBar/AsideProfilesListItems/SidebarOptionalMenue'
import Interests from '../ProfilePage/MainBar/Interests/Interests'
import ViewedProfile from './SideBar/AsideProfilesListItems/ViewedProfile'
import ExperienceList from '../ProfilePage/MainBar/Experience/ExperienceList'
import Dashboard from '../ProfilePage/MainBar/DashBoardAndAbout/DashBoard'
import About from '../ProfilePage/MainBar/DashBoardAndAbout/About'
// import Education_Edit from './Education_Edit'

export default function ProfilePage({...userFetch}) {

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
