import React from 'react'
import './SingleProfileStyles.css'

export default function SingleProfileListItem({ name, surname, image, title, handelOnClickSingleProfileListItem}) {
    return (
        <div id="singleprofileitem" className='mb-3'>
            <div>
                <div className='mr-2'>
                    <img src={ image } alt="profile" />
                </div>
                <div>
                    <h4>{ name } { surname }</h4>
                    <p>{  title }</p>
                </div>
            </div>
            <button >Connect</button>
        </div>
    )
}
