import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    String.json()
    return (
        <div>
            Detail{data}
        </div>
    )
}
