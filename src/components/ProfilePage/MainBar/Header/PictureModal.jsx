
import { Row, Modal, Button, Form } from 'react-bootstrap'
import { RiDeleteBin6Fill, RiImage2Line, RiCameraFill, RiPencilFill, RiEyeFill } from "react-icons/ri";
import { AUTHORIZATION } from '../../../../hidden/credentials';
import './PictureModuleStyle.scss'

function PictureModal(props) {

    const onFileChange = async (e) => {
        // console.log(e.target.closest('input'));

        try {
            const file = e.target.closest('input').files[0]
            const formData = new FormData()
            formData.append('profile', file)
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${props.userId}/picture`, {
                method: "POST",
                body: formData,
                headers: {

                    Authorization: `Bearer ${AUTHORIZATION}`

                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                alert('all went well!')

            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            id='pictureModal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Profile photo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={props.image} alt="profile" />
                </div>
                <div>
                    <Button>
                        <RiEyeFill />
                        All Linkedin Members
                    </Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Form.Label
                        for='getdata'
                    >

                        <RiPencilFill />
                        Edit
                    </Form.Label>
                    <input
                        onChange={onFileChange}
                        type="file"
                        accept='image/png'
                        id='getdata'
                    />
                    <Button>
                        <RiCameraFill />
                        Add Photo
                    </Button>

                    <Button>
                        <RiImage2Line />
                        Frames
                    </Button>
                </Row>
                <Row>
                    <Button
                        onClick={props.onHide}
                    >
                        <RiDeleteBin6Fill />
                        <span>Delete</span>
                    </Button>
                </Row>
            </Modal.Footer >
        </Modal >
    );
}

export default PictureModal