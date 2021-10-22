import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    console.log(typeof data);
    return (
        <div>
            Detail{data}
        </div>
    )
}
