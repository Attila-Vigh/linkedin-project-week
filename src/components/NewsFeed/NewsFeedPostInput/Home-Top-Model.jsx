import { Modal, Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { GiMeshBall } from 'react-icons/gi'
import { BiCaretDown } from 'react-icons/bi'
import { BsImage } from 'react-icons/bs'

function HomeTopModel() {
    const [show, setShow] = useState(false);
    const [postApi, setPostApi] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const method = postId? 'PUT' : 'POST'
    // const url = postId?  'https://striveschool-api.herokuapp.com/api/posts/' + postId : 'https://striveschool-api.herokuapp.com/api/posts/'


    const fetchPost = async () => {

        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                method: 'POST',
                body: JSON.stringify({text:postApi}),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2M4NWNlYWY0ODAwMTVjOTE4NjgiLCJpYXQiOjE2MjY3MDEzNzAsImV4cCI6MTYyNzkxMDk3MH0.IM9cEo_PuSRIB7l1erCyKvf0jtzAUGi2Vr_ARs71CME`
                },
            })
            if (response.ok) {
                alert('Sucessfully Posted!')
                setPostApi('')

            } else {
                alert('No fun today!')
            }
        } catch (error) {
            console.log(error);
        }

    }

    const submitPost = (e) => {
        e.preventDefault()
        fetchPost()

    }


    return (
        <>
            <Button id='modalbutton' onClick={handleShow}> Start a post </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex'>
                        <img style={{ borderRadius: '52px', width: '52px' }} src='https://picsum.photos/200' height='50' alt="" />
                        <div className='ml-4'>
                            <h6>Sai Krishna Goka</h6>
                            <Button style={{}}
                                style={{
                                    padding: '0 0.4rem',
                                    borderColor: 'black',
                                    borderRadius: '50px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',

                                }}
                                variant='transparent'
                            >
                                <GiMeshBall /> Anyone <BiCaretDown /></Button>
                        </div>
                    </div>
                    <Form onSumbit={submitPost} className='mt-2'>
                        <Form.Group controlId="exampleForm.ControlTextarea1">

                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder='What do you want to write?'
                                style={{ border: 'none' }}
                                value={postApi.text}
                                onChange={(e) => setPostApi(e.target.value)}
                            />
                        </Form.Group>
                    </Form>


                </Modal.Body>
                <Modal.Footer style={{ justifyContent: 'space-between' }} className='d-flex'>

                    <BsImage style={{ fontSize: '1.5rem', color: 'skyblue' }} />
                    <Button
                        style={{ borderRadius: '50px', padding: '5px 12px' }} variant="primary" onClick={submitPost}>
                        Post
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default HomeTopModel
