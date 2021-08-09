import './HeaderJumbotron.scss'
import { Jumbotron } from 'react-bootstrap';
import { MdPhotoCamera } from 'react-icons/md';
import PictureModal from './PictureModal'
import { useState } from 'react'

function HeaderJumbotron({ user: { image, profile, _id } }) {

    const [modalShow, setModalShow] = useState(false);

    return (

        <Jumbotron className="jumbo">
            <MdPhotoCamera className="MdPhotoCamera" />
            <img
                className="image"
                src={image}
                alt={profile}
                onClick={() => setModalShow(true)}
            />
            <PictureModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                image={image}
                userId = {_id}

            />
        </Jumbotron>
    )


}

export default HeaderJumbotron;