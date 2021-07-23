import './Header.scss'
import React, { useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import HeaderButtons    from './HeaderButtons';
import HeaderEditIntro  from './HeaderEditIntro';
import HeaderJumbotron  from './HeaderJumbotron';
import HeaderIntro      from './HeaderIntro';
import HeaderOpenToWork from './HeaderOpenToWork';
import HeaderModal      from './HeaderModal';
import CheckForErrorAndPending from '../../util/CheckForErrorAndPending';
import TemplateModal from '../TemplateModal/TemplateModal';

/*
    _id       : "5d84937322b7b54d848eb41b", //server generated
    name      : "Diego",
    surname   : "Banovaz",
    email     : "diego@strive.school",
    bio       : "SW ENG",
    title     : "COO @ Strive School",
    area      : "Berlin",
    image     : ..., //server generated on upload
    username  : "admin", //server generated from Auth
    createdAt : "2019-09-20T08:53:07.094Z", //server generated
    updatedAt : "2019-09-20T09:00:46.977Z", //server generated
    __v       : 0 //server generated           : "60e588767273090015d5571f"
*/

const Header = ({ dataList, isPending, isError }) => {

    const user = dataList;
    
     const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
                <Row>
                    <Col>
                    <CheckForErrorAndPending isPending={ isPending } isError={ isError } />
                    {
                        user &&
                            <header key={ user._id }>
                                <HeaderJumbotron user={ user } />
                                <HeaderEditIntro setModalShow={ setModalShow } />
                                <HeaderIntro user={ user } />
                                <HeaderButtons  />
                                <HeaderOpenToWork />
                                <HeaderModal
                                    show={ modalShow }
                                    onHide={() => setModalShow(false)}
                                    user={ user }
                                />
                            </header>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Header;