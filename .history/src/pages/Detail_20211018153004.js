import React from 'react'

export const Detail = ({match}) => {
    const data = match.params.id
    data.json()
    return (
        <div>
            Detail{}
        </div>
    )
}
