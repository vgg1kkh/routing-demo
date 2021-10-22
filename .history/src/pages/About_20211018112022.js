import React from 'react'
import { NavLink,BrowserRouter,Route } from 'react-router-dom'
import { MyMusic } from './MyMusic'

export const About = () => {
    return (
        <div>
            <BrowserRouter>
            <NavLink exact to="/about">企业历史</NavLink>
            <NavLink to="/about/culture">企业文化</NavLink>
            <NavLink to="/about/contact">联系我们</NavLink>
            <Route path="/about" component={MyMusic} />
            </BrowserRouter>
          
            
        </div>
    )
}
