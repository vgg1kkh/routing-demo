import React from 'react'
import { NavLink,BrowserRouter,Route,Switch } from 'react-router-dom'




export const History = () => {
    return (
        <div>
            History of 2000Years...
        </div>
    )
}

export const Culture = () => {
    return (
        <div>
            Diversity
        </div>
    )
}

export const Contact = () => {
    return (
        <div>
            Tel: 13822222
        </div>
    )
}


export const JoinUs = () => {
    return (
        <div>
            {console.log("JoinUs is executed.")}
            JoinUs now!
        </div>
    )
}



export class About extends React.Component {

    jumpTo= ()=>{
        console.log(props.history);
        props.history.push('/about/join')
    }
    render(){

    }
    
}
