import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    if(typeof data==='obje')
    return (
        <div>
            Detail{}
        </div>
    )
}
