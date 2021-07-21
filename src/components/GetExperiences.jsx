import React from 'react';
import { AUTHORIZATION } from '../hidden/credentials'
import { Container, Row, Col} from 'react-bootstrap';
import Error    from './Error';
import Pending  from './Pending';
import useFetch from './useFetch';
import SectionContainer  from './Main/SectionContainer';

// https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
// https://striveschool-api.herokuapp.com/api?profile=:userId&experiences=:expId
const GetExperiences = (  ) => {
    
    const URL = 'https://striveschool-api.herokuapp.com/api/profile/?userId=60f52c190efe7800155c349c/experiences'
    const { dataList: userList, isPending, isError } = useFetch( URL, AUTHORIZATION )

    return (
        <Container>
                <Row>
                    <Col>
                    {   isError && <Error responseStatus={ isError }/>    }
                    {
                        isPending
                            ? <Pending />
                            : userList &&
                                userList
                                    .filter( user => user.name === 'Attila' )
                                    .map( ( user ) => 
                                        
                                        <header key={ user._id }>
                                            Dancing in the rain<br/>
                                            { user._id }
                                            { console.log( user ) }
                                        </header>
                                    )
                    }
                </Col>
            </Row>
            <SectionContainer>

            </SectionContainer>
        </Container>
    );
}
 
export default GetExperiences;