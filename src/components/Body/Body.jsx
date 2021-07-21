import React from 'react';
import { Container, Row, } from 'react-bootstrap'

const Body = ( props ) => {
    return ( 
        <Container id='profilepage' className='mt-5'>
            <Row>
                { props.children }
            </Row>
        </Container>
     );
}
 
export default Body;