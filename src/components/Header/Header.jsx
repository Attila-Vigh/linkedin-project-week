import './Header.scss'
import React from 'react';
// import { AUTHORIZATION } from '../credentials'
import { Container, } from 'react-bootstrap';
import Error    from '../Error';
import Pending  from '../Pending';
import useFetch from '../useFetch';
import HeaderButtons from './HeaderButtons';
import HeaderEditIntro from './HeaderEditIntro';
import HeaderJumbotron from './HeaderJumbotron';
import HeaderOpenToWork from './HeaderOpenToWork';
import HeaderIntro from './HeaderIntro';

/*
    _id       : "5d84937322b7b54d848eb41b", //server generated
    name      : "Diego",
    surname   : "Banovaz",
    email     : "diego@strive.school",
    bio       : "SW ENG",
    title     : "COO @ Strive School",
    area      : "Berlin",
    image     : ..., //server generated on upload
    username  : "admin", //server generated from Auth
    createdAt : "2019-09-20T08:53:07.094Z", //server generated
    updatedAt : "2019-09-20T09:00:46.977Z", //server generated
    __v       : 0 //server generated           : "60e588767273090015d5571f"
*/

const Header = ({ title }) => {

    // console.log( "AUTHORIZATION", AUTHORIZATION );

    const URL = 'https://striveschool-api.herokuapp.com/api/profile'
    const { dataList: userList, isPending, isError } = useFetch( URL, 
        // AUTHORIZATION,
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1MmMxOTBlZmU3ODAwMTU1YzM0OWMiLCJpYXQiOjE2MjY2ODAzNDUsImV4cCI6MTYyNzg4OTk0NX0.69jB8SCH_b38GYR0FSI_P8CCK9H5V0rV9XWRcr3dEyE' 
        )

    return ( 
        //     <Row className="justify-content-center">
        //         <Col >
        <Container>
                    {   isError && <Error responseStatus={ isError }/>    }
                    {
                        isPending
                            ? <Pending />
                            : userList &&
                                userList
                                    .filter( user => user.name === 'Attila' )
                                    .map( ( user ) => 
                                        
                                        <header key={ user._id }>
                                            <HeaderJumbotron user={ user } />
                                            <HeaderEditIntro />
                                            <HeaderIntro user={ user } />
                                            <HeaderButtons />
                                            <HeaderOpenToWork />
                                        </header>
                                    )
                    }
        </Container>
        //         </Col>
        //     </Row>
    );
}

export default Header;