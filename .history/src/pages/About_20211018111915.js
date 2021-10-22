import React from 'react'
import { NavLink,BrowserRouter,Route } from 'react-router-dom'
import { MyMusic } from './MyMusic'

export const About = () => {
    return (
        <div>
            <BrowserRouter>
            <NavLink exact to="about/history">企业历史</NavLink>
            <NavLink to="/about/culture">企业文化</NavLink>
            <NavLink to="/about/contact">联系我们</NavLink>
            <Route path="" component={MyMusic} />
            </BrowserRouter>
          
            <h3>About</h3> 
        </div>
    )
}
