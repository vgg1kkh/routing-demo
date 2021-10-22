import React from 'react'

export const Detail3 = ({location}) => {
    const data = location.search
    console.log(location);
    console.log("data=",data);
    console.log(data.slice(1))
    return (
        <div>
            Detail3
        </div>
    )
}
