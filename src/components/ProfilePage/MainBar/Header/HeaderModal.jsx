import { Container, Modal, Button, Form } from 'react-bootstrap'
import { AUTHORIZATION } from '../../../../hidden/credentials'
import { useState, useEffect } from 'react';
import './ModalStyle.scss'

function HeaderModal(props) {

    const onHideFunction = props.onHide
    const handleInputValue = props.handleInputValue
    const [updatedData, setUpdatedData] = useState({
        name: '',
        surname: '',
        email: '',
        bio: '',
        title: '',
        area: ''
    })

    useEffect((props) => {
        fetchData()
    }, [])

    const fetchData = async (props) => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AUTHORIZATION}`
                }

            })

            if (response.ok) {
                const userData = await response.json()
                setUpdatedData({
                    ...updatedData,
                    name: userData.name,
                    surname: userData.surname,
                    email: userData.username,
                    bio: userData.bio,
                    title: userData.title,
                    area: userData.area,
                })
                console.log(userData);
            } else {
                console.log('oops');
            }

        } catch (error) {
            console.log(error);
        }
    }


    const fetchPutData = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AUTHORIZATION}`
                },
                body: JSON.stringify(updatedData),
                method: 'PUT',
            })
            if (response.ok) {
                // alert('it rocks')
                onHideFunction()
                fetchData()

            }
        } catch (error) {
            console.log(error)
        }
    }

    const updateChange = (key, value) => {
        setUpdatedData({
            ...updatedData,
            [key]: value
        })
        handleInputValue({
            ...updatedData,
            [key]:value
        })
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
                    Edit intro
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={fetchPutData}>
                    <Container>
                        <div className='d-flex'>
                            <Form.Group className='w-50 mr-2'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    value={updatedData.name}
                                    onChange={(e) => updateChange('name', e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className='w-50 ml-2'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter surname"
                                    value={updatedData.surname}
                                    onChange={(e) => updateChange('surname', e.target.value)}
                                />
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Form.Label>Pronouns</Form.Label>
                            <Form.Control as="select">
                                <option>She/Her</option>
                                <option>He/Him</option>
                                <option>They/Them</option>
                                <option>Custom</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                Let others know how to refer to you. <a href="#">Learn more</a>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={updatedData.email}
                                onChange={(e) => updateChange('email', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Headline</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                value={updatedData.bio}
                                onChange={(e) => updateChange('bio', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                rows={2}
                                value={updatedData.title}
                                onChange={(e) => updateChange('title', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Current Position</Form.Label>
                            <Form.Control as="select">
                                <option>She/Her</option>
                                <option>He/Him</option>
                                <option>They/Them</option>
                                <option>Custom</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="Show current company in my intro"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Education</Form.Label>
                            <Form.Control as="select">
                                <option>Cornell University</option>
                                <option>Harvard University</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="Show education in my intro"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Country/Region</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Country"
                                value={updatedData.area}
                                onChange={(e) => updateChange('area', e.target.value)}
                            />
                        </Form.Group>
                        <div className='d-flex'>
                            <Form.Group className='w-50 mr-2'>
                                <Form.Label>Postal code</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder=""

                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1" className='w-100 ml-2'>
                                <Form.Label>Location within this area</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <Form.Group>
                            <Form.Label>Industry</Form.Label>
                            <Form.Control 
                                as="select"

                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Container>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className='rounded-pill bg-primary text-white-100 font-weight-bold' onClick={fetchPutData}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default HeaderModal;