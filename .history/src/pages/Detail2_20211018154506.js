import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    console.log(JSON.parse(data))
    return (
        <div>
            Detail2
        </div>
    )
}
