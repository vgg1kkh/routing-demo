import React from 'react'
import { NavLink } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <Router>
            <NavLink to="/about/my">MY MUSIC</NavLink>
            <NavLink to="/about/hot">HOT PICK</NavLink>
            <NavLink to="/about/detail">MY Detail</NavLink>
            <Route path="about/my"  />
            </Router>
          
            About
        </div>
    )
}
