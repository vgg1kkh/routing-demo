import React from 'react'
import { NavLink,BrowserRouter,Route } from 'react-router-dom'
import { MyMusic } from './MyMusic'

export const About = () => {
    return (
        <div>
            <BrowserRouter>
            <NavLink to="">企业历史</NavLink>
            <NavLink to="/about/hot">企业文化</NavLink>
            <NavLink to="/about/detail">联系我们</NavLink>
            <Route path="about/my" component={MyMusic} />
            </BrowserRouter>
          
            <h3>About</h3> 
        </div>
    )
}
