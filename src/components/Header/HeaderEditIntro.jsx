import './HeaderEditIntro.scss'
import React from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { BiPencil          } from 'react-icons/bi';

const HeaderEditIntro = ({ setModalShow }) => {
    return ( 
        <div className='header-icons d-flex justify-content-end'>
            <RiLinkedinBoxFill className="RiLinkedinBoxFill"   />
            <BiPencil
                className="BiPencil "
                onClick={() => setModalShow(true)}
            />
        </div>

     );
}
 
export default HeaderEditIntro;