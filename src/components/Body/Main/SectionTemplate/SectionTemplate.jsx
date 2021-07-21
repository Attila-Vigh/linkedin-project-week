import React from 'react';
import SectionTemplateContainer from './SectionTemplateContainer';
import SectionTemplateHeader    from './SectionTemplateHeader';

const SectionTemplate = ( props ) => {
    return ( 
        <div className="sectionTemplateContainer overflow-hidden">

            <SectionTemplateContainer >

                <SectionTemplateHeader header={ props.props } ></SectionTemplateHeader>
                
                { props.children }
                
            </SectionTemplateContainer>
        </div>
    );
}
 
export default SectionTemplate;