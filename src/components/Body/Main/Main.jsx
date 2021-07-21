import React from 'react';
import { Col } from 'react-bootstrap';

const Main = ( props ) => {
    return ( 
        <Col xs={12} md={8}> 
            { props.children } 
        </Col>
     );
}
 
export default Main;