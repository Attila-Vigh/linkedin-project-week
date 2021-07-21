import React from 'react';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import SkillsAndEndorsementsHeader from './SkillsAndEndorsementsHeader';
import SkillsAndEndorsementsSection from './SkillsAndEndorsementsSection';

const SkillsAndEndorsements = ( props ) => {
    return ( 
        <SectionTemplate props={props} >
            <div className="p-4" >
                <SkillsAndEndorsementsHeader  skillList={ [ 'JavaScript', 'HTML5', 'Cascading Style Sheets (CSS)' ] } />
            </div>

                <div className="border-bottom border-top p-4">
                    <SkillsAndEndorsementsSection title='Industry Knowledge'   list={[ 'Web Development', 'Software Engineering', 'User Experience Design (UED)', 'Interaction Design', 'Software Design', 'Information Architecture', 'Responsive Web Design', 'Front-end Development', 'Usability', 'Usability Testing', 'Object-Oriented Programming (OOP)', 'Agile Project Management', 'Agile Methodologies', 'Software Development Life Cycle (SDLC)', 'Software Project Management', 'Object Oriented Design', 'Software Architecture', 'Software Development', 'Software Testing', 'Version Control', 'Cloud Computing', ]} />
                    <SkillsAndEndorsementsSection title='Tools & Technologies' list={[ 'jQuery', 'AJAX', 'Git', 'Node.js', 'HTML', 'Content Management Systems (CMS)', 'WordPress', 'MySQL', 'PHP', 'Databases', 'Python (Programming Language)', 'Powershell', 'Unified Modeling Language (UML)', 'MongoDB', 'Docker Products', ]} />
                    <SkillsAndEndorsementsSection title='Interpersonal Skills' list={[ 'Career Development', ]} />
                    <SkillsAndEndorsementsSection title='Other Skills'         list={[ 'Mobile Web Design', 'Web Standards', 'Back-End Web Development', 'Database Development', 'IT Automation', 'DevOps', 'Domain-Driven Design (DDD)', 'JMeter', 'Load Testing', 'Cloud Development', ]} />
                </div>
        </SectionTemplate>
    );
} 
export default SkillsAndEndorsements;
