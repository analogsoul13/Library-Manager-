import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            {/* Navbar */}
            <div className="navbar p-2">
                <div className="flex">
                    <Link to={'/'}><button className="btn btn-ghost text-gray-900 text-2xl">Redux CRUD Library</button></Link>               
                </div>
            </div>
        </>
    )
}

export default Header