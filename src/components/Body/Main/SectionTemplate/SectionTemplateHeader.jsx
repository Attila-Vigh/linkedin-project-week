import React from 'react'
import { BiPencil, BiPlus } from 'react-icons/bi';
import { FiAlignJustify } from 'react-icons/fi';
import { Card, Button, } from 'react-bootstrap';
import SectionContainer from './SectionTemplateContainer';

const SectionTemplateHeader = ({ header:{ title, crud, add="" }}) => {
    return (
        <SectionContainer>
            <Card className="d-flex flex-row p-3 border-0">
                    <Card.Title 
                        as={ 'h3' } 
                        className="flex-grow-1"    
                    >
                        { title } 
                    </Card.Title>
                    {
                        add && 
                        <Button 
                            variant="light" 
                            onClick={() => console.log("Light")}
                            className="mr-4"
                        >
                            { add }
                        </Button>
                    }
                    
                    {   crud === "edit" && <BiPencil         className="header-icon BiPencil mt-1" />    }
                    {   crud === "add"  && <BiPlus           className="header-icon BiPencil mt-1" />    }
                    {   crud === "move" && <FiAlignJustify   className="header-icon BiPencil mt-1" />    }
            </Card>
        </SectionContainer>
    )
}

export default SectionTemplateHeader