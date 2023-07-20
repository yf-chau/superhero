import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    const styles = ({isActive}) => ({
        textDecoration: isActive ? "underline" : "none",
        marginRight: '10px'
    })
    return (
        <main>
            <header>
                <nav>
                    <NavLink to="/" style={styles}>Home</NavLink>
                    <NavLink to="/heroes" style={styles}>Heroes</NavLink>
                    <NavLink to="/search" style={styles}>Search Heroes</NavLink>
                </nav>
            </header>
            <Outlet/>
        </main>
    )
}