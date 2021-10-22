import React from 'react'
import { NavLink,BrowserRouter,Route } from 'react-router-dom'
import { MyMusic } from './MyMusic'

import React from 'react'

export const History = () => {
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
            <Route path="/about" component={MyMusic} />
            </BrowserRouter>
            <h3>About</h3>
          
            
        </div>
    )
}
