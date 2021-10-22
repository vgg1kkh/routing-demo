import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    if(typeof data==='obj')
    return (
        <div>
            Detail{}
        </div>
    )
}
