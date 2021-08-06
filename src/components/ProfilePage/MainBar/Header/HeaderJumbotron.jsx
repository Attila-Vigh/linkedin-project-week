import './HeaderJumbotron.scss'
import { Jumbotron } from 'react-bootstrap';
import { MdPhotoCamera} from 'react-icons/md';

const HeaderJumbotron = ({ user:{ image, profile } }) =>  
            <Jumbotron className="jumbo">
                    <MdPhotoCamera className="MdPhotoCamera"/>
                    <img
                        className="image"
                        src={ image }
                        alt={profile}
                    />
            </Jumbotron>
 
export default HeaderJumbotron;