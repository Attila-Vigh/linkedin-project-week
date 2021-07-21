import React from 'react'
import { Card, Image, Button } from 'react-bootstrap';

const AsideUserList = ({ profile: { image, name, surname, title, } }) => {
    return (
        <Card className="d-flex flex-row p-3 border-0">
            <Image 
                className="m-2"
                src={ image }  
                roundedCircle style={{
                    width  : '48px',
                    height : '48px',
                }}/>
            <Card.Body className='p-0'>
                <Card.Title as={ 'h6' } >{ name }  { surname }</Card.Title>
                <Card.Text> { title } </Card.Text>
                <Button variant="btn btn-outline-secondary badge-pill">Message</Button>
            </Card.Body>
        </Card>
    )
}

export default AsideUserList