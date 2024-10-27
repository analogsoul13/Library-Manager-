import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Add from './Add'

function Header() {

    const {books} = useSelector((state)=> state.books)
    return (
        <>
            {/* Navbar */}
            <div className="navbar p-2">
                <div className="flex-1">
                    <Link to={'/'}><button className="btn btn-ghost text-gray-900 text-2xl">Redux CRUD Library</button></Link>
                </div>
                <div className="p-2">
                    Books
                    <div className="badge ml-2 badge-neutral">{books.length}+</div>
                </div>
                <div className='flex-none sm:hidden'>
                    <Add />
                </div>
            </div>
        </>
    )
}

export default Header