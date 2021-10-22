import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    if(typeof data)
    return (
        <div>
            Detail{}
        </div>
    )
}
