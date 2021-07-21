import './Header.scss'
import React from 'react';
import { AUTHORIZATION } from '../../../../hidden/credentials'
// import Error    from '../../../util/Error';
// import Pending  from '../../../util/Pending';
import useFetch from '../../../util/useFetch';
import HeaderButtons    from './HeaderButtons';
import HeaderEditIntro  from './HeaderEditIntro';
import HeaderJumbotron  from './HeaderJumbotron';
import HeaderIntro      from './HeaderIntro';
import HeaderOpenToWork from './HeaderOpenToWork';
import SectionContainer from '../SectionTemplate/SectionTemplateContainer';
import CheckForErrorAndPending from '../../../util/CheckForErrorAndPending';

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

const Header = ({  }) => {

    const URL = 'https://striveschool-api.herokuapp.com/api/profile/me'
    const { dataList: user, isPending, isError } = useFetch( URL, AUTHORIZATION )

    return (
    
        <SectionContainer>

                <CheckForErrorAndPending isError={ isError } isPending={ isPending } />   

                    { user &&    
                        <header key={ user._id }>
                            <HeaderJumbotron user={ user } />
                            <HeaderEditIntro />
                            <HeaderIntro     user={ user } />
                            <HeaderButtons />
                            <HeaderOpenToWork />
                        </header>
                    }
        </SectionContainer>
    );
}

export default Header;