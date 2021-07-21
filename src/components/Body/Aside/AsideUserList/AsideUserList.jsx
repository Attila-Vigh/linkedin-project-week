import React, { useState } from 'react';
import { AUTHORIZATION } from '../../../../hidden/credentials'
import Error    from '../../../util/Error';
import Pending  from '../../../util/Pending';
import useFetch from '../../../util/useFetch';
import { Container,     } from 'react-bootstrap'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp   } from 'react-icons/io'
import AsideUserListItem from './AsideUserListItem'
import CheckForErrorAndPending from '../../../util/CheckForErrorAndPending';


const AsideUserList = ({ title }) => {

    const URL = 'https://striveschool-api.herokuapp.com/api/profile'
    const { dataList: profiles, isPending, isError } = useFetch( URL, AUTHORIZATION )

    const [ showValue, setShowValue ] = useState( false );

    const moreProfiles = ( profiles, num ) => profiles.slice( 0, num ).map( profile => <AsideUserListItem key={profile._id} profile={ profile } /> )

    const moreOrLess   = ( text , icon ) => <div className="mr-2 mb-3 "> { text } { icon }</div>

        return (
            <div id='viewedprofile' className='mb-3'>
            {/* {   isError && <Error responseStatus={ isError }/>    }
            {
                isPending
                      ? <Pending /> */}
                      {/* :  */}
                      <CheckForErrorAndPending isError={ isError } isPending={ isPending } /> 
                      { profiles &&
                      <Container className="bg-white p-0 rounded">
                            <h5 className="px-3 pt-4">{ title }</h5>

                            {
                                showValue 
                                    ? moreProfiles( profiles, 8 )
                                    : moreProfiles( profiles, 4 )
                            }
                            <button
                                className="btn btn-light w-100 border-top" 
                                onClick={() => setShowValue( !showValue )}>
                                {
                                    showValue
                                    ? moreOrLess( 'Show less', <IoIosArrowUp   /> )
                                    : moreOrLess( 'Show more', <IoIosArrowDown /> )
                                }
                            </button>

                        </Container>
                    }
            </div>
        )

}
export default AsideUserList