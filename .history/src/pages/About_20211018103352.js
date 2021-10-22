import React from 'react'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div>
            <Link to="/about/my">MY MUSIC</Link>
            <Link to="/about/hot">HOT PICK</Link>
            About
        </div>
    )
}
