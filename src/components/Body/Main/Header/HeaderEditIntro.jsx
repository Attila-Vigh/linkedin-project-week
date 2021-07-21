import './HeaderEditIntro.scss'
import React from 'react';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { BiPencil          } from 'react-icons/bi';

const HeaderEditIntro = (  ) => {
    return ( 
        <div className='header-icons d-flex justify-content-end'>
            <RiLinkedinBoxFill className="header-icon RiLinkedinBoxFill"   />
            <BiPencil          className="header-icon BiPencil"            />
        </div>

     );
}
 
export default HeaderEditIntro;