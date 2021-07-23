import React from 'react';
import TemplateModal from '../TemplateModal/TemplateModal';

const HeaderModal = ( props ) => {
    return (
        <> 
        <TemplateModal {...props}>
            {props.children}
            
        </TemplateModal>
        </>
     );
}
 
export default HeaderModal;