import React from 'react'

export const Detail = ({match}) => {
    return (
        <div>
            Detail{match.params.id}
        </div>
    )
}
