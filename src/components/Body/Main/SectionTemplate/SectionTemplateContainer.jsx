import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const SectionTemplateContainer = ( props ) => {
    return ( 
            <Container>
                <Row >
                    <Col>
                        { props.children }
                    </Col>
                </Row>
            </Container>
     );
}
 
export default SectionTemplateContainer;