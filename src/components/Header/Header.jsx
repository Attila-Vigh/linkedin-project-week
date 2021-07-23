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