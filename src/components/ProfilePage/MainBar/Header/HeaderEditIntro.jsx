import './HeaderEditIntro.scss'
import {useState} from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import HeaderModal from './HeaderModal'

const HeaderEditIntro = (props) => {
    console.log(props);
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className='header-icons d-flex justify-content-end'>
            <RiLinkedinBoxFill className="RiLinkedinBoxFill" />
            <BiPencil onClick={() => setModalShow(true)} className="BiPencil" />
            <HeaderModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleInputValue = {props.handleInputValue}
            />
        </div>

    );
}

export default HeaderEditIntro;