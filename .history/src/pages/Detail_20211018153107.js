import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    console.log();
    return (
        <div>
            Detail{data}
        </div>
    )
}
