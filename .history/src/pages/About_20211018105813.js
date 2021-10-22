import React from 'react'
import { NavLink,BrowserRouter,Route } from 'react-router-dom'
import { MyMusic } from './MyMusic'

export const About = () => {
    return (
        <div>
            <BrowserRouter>
            <NavLink to="/about/my">企业</NavLink>
            <NavLink to="/about/hot">HOT PICK</NavLink>
            <NavLink to="/about/detail">MY Detail</NavLink>
            <Route path="about/my" component={MyMusic} />
            </BrowserRouter>
          
            <h3>About</h3> 
        </div>
    )
}
