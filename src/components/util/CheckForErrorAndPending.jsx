import React   from 'react';
import Error   from './Error';
import Pending from './Pending';


const CheckForErrorAndPending = ( { isError, isPending }) => {

    console.log( isError )
    console.log( isPending )
    return (
            isError 
                ? <Error responseStatus={ isError }/>    
                : isPending
                    ? <Pending />
                    : isError
    )

}
export default CheckForErrorAndPending