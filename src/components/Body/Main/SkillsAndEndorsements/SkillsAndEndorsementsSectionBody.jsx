import React from 'react';
import { Col,Row } from 'react-bootstrap';

const SkillsAndEndorsementsSectionBody = ({ list }) => {
    return (     
        <Row className="w-100">
            <Col xs={ 6 } > { list.map( ( item, i ) => i%2 === 0 && <p key={ i } className='font-weight-bolder text-black'>{ item }</p> ) } </Col> 
            <Col xs={ 6 } > { list.map( ( item, i ) => i%2 !== 0 && <p key={ i } className='font-weight-bolder text-black'>{ item }</p> ) } </Col> 
        </Row>
    );
}
 
export default SkillsAndEndorsementsSectionBody;