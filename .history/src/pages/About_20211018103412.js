import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <NavLink to="/about/my">MY MUSIC</Link>
            <Link to="/about/hot">HOT PICK</Link>
            <Link to="/about/detail">MY Detail</Link>
            About
        </div>
    )
}
