import React from 'react';
import { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { AUTHORIZATION } from '../../hidden/credentials';


const TemplateModal = ( props ) => {
    
    const user = props.user

    const initUserDataSet = {
        name    : user.name    ,
        surname : user.surname ,
        email   : user.email   ,
        area    : user.area    ,
        title   : user.title   ,
        bio     : user.bio     ,
    }
    
    const [dataToPost, setUserData] = useState( initUserDataSet )

    const submitUserData = ev => {
        ev.preventDefault()
        console.table( dataToPost )

        const URL = 'https://striveschool-api.herokuapp.com/api/profile'
        
        const requestOptions = {
            
            method  : 'PUT',
            body    : JSON.stringify( dataToPost ),
            headers : { 
                'Content-Type'  : 'application/json',
                'Authorization' :  AUTHORIZATION
            }
        }
    
        fetch( URL , requestOptions )
            .then( response => {
                if (response.ok){
                    alert('UserData SAVED')
                    setUserData( dataToPost )
                    props.onHide()
                }
                else
                    throw new Error( `HTTP error! status: ${ response.status }` );
            })
            .catch( error => console.error(error))

    }

        const handleDataToPostOnChange = ( key, ev, value='value' ) => {
            setUserData({ ...dataToPost, [ key ] : ev.target[ value ] })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <h4>Add experience</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitUserData}>
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            value={dataToPost.name}
                            onChange={(e) => handleDataToPostOnChange( 'name', e, 'value' )}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Surname"
                            value={dataToPost.surname}
                            onChange={(e) => handleDataToPostOnChange( 'surname', e, 'value' )}
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            value={dataToPost.email}
                            onChange={(e) => handleDataToPostOnChange( 'email', e, 'value' )}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type        = "text"
                            placeholder = "Ex: Retail Sales Manager"
                            value       = { dataToPost.title }
                            onChange    = { (e) => handleDataToPostOnChange( 'title', e, 'value' ) }
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location *</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ex: London, United Kingdom"
                            value={dataToPost.area}
                            onChange={(e) => handleDataToPostOnChange( 'area', e, 'value' )}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Biography *</Form.Label>
                        <Form.Control
                        as="textarea"
                        rows={5}
                        value={dataToPost.bio}
                        onChange={(e) => handleDataToPostOnChange( 'bio', e, 'value' )}
                    />
                    </Form.Group>
                </Form>
            </Modal.Body>
            {
                <Modal.Footer>
                    <Button className='modalbuttons' onClick={submitUserData}>Save</Button>
                </Modal.Footer>
            }
        </Modal>
     );
}
 
export default TemplateModal;