import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='relative'>
                <footer className="footer footer-center inset-x-0 bottom-0 bg-base-200 text-base-content rounded p-10">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About us</a>
                        <Link to={'/'} className="link link-hover">Home</Link>
                        <Link to={'/collections'} className="link link-hover">Library</Link>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a><i className="fa-brands fa-2xl fa-square-x-twitter" /></a>
                            <a><i className="fa-brands fa-2xl fa-square-github" /></a>
                            <a><i className="fa-solid fa-2xl fa-envelope" /></a>
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Analogsoul</p>
                    </aside>
                </footer>
            </div>

        </>
    )
}

export default Footer