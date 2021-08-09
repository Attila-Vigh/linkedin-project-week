import './Header.scss'
import React from 'react';
import {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HeaderEditIntro from './HeaderEditIntro';
import HeaderJumbotron from './HeaderJumbotron';
import HeaderIntro from './HeaderIntro';
import CheckForErrorAndPending from '../../../../util/CheckForErrorAndPending';

const Header = ({ dataList, isPending, isError }) => {
    
    const user = dataList;
    const [inputValue, setInputValue] = useState({})
    console.log(user);

   useEffect(() => {

    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <CheckForErrorAndPending isPending={isPending} isError={isError} />
                    {
                        user &&
                        <header key={user._id}>
                            <HeaderJumbotron inputValue={inputValue} user={user} />
                            <HeaderEditIntro handleInputValue={(key, value, ...inputValue) => setInputValue(key, value, ...inputValue )}/>
                            <HeaderIntro user={inputValue.name? inputValue : user} />
                        </header>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Header;