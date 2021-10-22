import React from 'react'
import { NavLink,BrowserRouter,Route,Switch } from 'react-router-dom'
import { MyMusic } from './MyMusic'



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

import React from 'react'

export const JoinUs = () => {
    return (
        <div>
            
        </div>
    )
}


export const About = () => {
    return (
        <div>
            <BrowserRouter>
            <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
            <NavLink to="/about/culture" activeClassName="about-active">企业文化</NavLink>
            <NavLink to="/about/contact" activeClassName="about-active">联系我们</NavLink>
            <Switch>
            <Route path="/about/contact" component={Contact} />
            <Route path="/about/culture" component={Culture} />
            <Route path="/about" component={History} />
            </Switch>
            <button onClick={()=>{history}}>Join us</button>
            </BrowserRouter>
            <h3>About</h3>
          
            
        </div>
    )
}
