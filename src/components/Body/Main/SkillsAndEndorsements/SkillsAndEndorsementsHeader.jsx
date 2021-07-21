import React from 'react';

const SkillsAndEndorsementsHeader = ({ skillList }) => {
    return ( 
        <div className="list-group list-group-flush ">
            {
                skillList.map( (skill, i) => 
                    
                    <div key={ i } className="list-group-item border-bottom font-weight-bolder text-black">

                        { skill }
                    </div> 
                    
                )
            }
        </div>
    );
}
 
export default SkillsAndEndorsementsHeader;