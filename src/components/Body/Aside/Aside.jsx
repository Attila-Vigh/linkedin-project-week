import React from 'react';
import { Col } from 'react-bootstrap';

const Aside = ( props ) => {
    return ( 
        <Col xs={12} md={4}> 
            { props.children } 
        </Col>
     );
}
 
export default Aside;