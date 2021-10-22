import React from 'react'
import { NavLink,BrowserRouter,R } from 'react-router-dom'
import { MyMusic } from './MyMusic'

export const About = () => {
    return (
        <div>
            <BrowserRouter>
            <NavLink to="/about/my">MY MUSIC</NavLink>
            <NavLink to="/about/hot">HOT PICK</NavLink>
            <NavLink to="/about/detail">MY Detail</NavLink>
            <Route path="about/my" component={MyMusic} />
            </BrowserRouter>
          
            About
        </div>
    )
}
