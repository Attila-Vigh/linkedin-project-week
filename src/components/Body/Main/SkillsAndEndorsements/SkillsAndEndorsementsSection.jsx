import React from 'react';
import SkillsAndEndorsementsSectionBody from './SkillsAndEndorsementsSectionBody';
import SkillsAndEndorsementsSectionHeader from './SkillsAndEndorsementsSectionHeader';

const SkillsAndEndorsementsSection = ({ title, list }) => {
    return ( 
        <div> 
            <SkillsAndEndorsementsSectionHeader title={ title } />
            <SkillsAndEndorsementsSectionBody   list={  list  } />
        </div>
    );
}
 
export default SkillsAndEndorsementsSection;