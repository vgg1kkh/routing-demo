import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    JSON.parse(data)
    return (
        <div>
            Detail{data}
        </div>
    )
}
