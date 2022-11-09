import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <nav className="navbar">
            <ul className ="navlist">
                <li className='today'><CustomLink to='/today'>Today</CustomLink></li>
                <li className='important'><CustomLink to='/important'>Important</CustomLink></li>
                <li className='completed'><CustomLink to='/completed'>Completed</CustomLink></li>

            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
export default Nav;