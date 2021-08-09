import React from 'react';
import { Button, Row, } from 'react-bootstrap';
import { HiDotsHorizontal } from 'react-icons/hi';

const HeaderButtons = () => {
    return (
        <Row>
            <Button className="rounded-pill font-weight-bold-flex"> Open to </Button>
            <Button className="rounded-pill bg-white text-black-50 font-weight-bold"> Add section </Button>
            <Button className="rounded-pill bg-white text-black-50 font-weight-bold"> {window.innerWidth < 576 ? <HiDotsHorizontal /> : 'More'} </Button>
        </Row>
    );
}

export default HeaderButtons;