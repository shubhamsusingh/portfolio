import React from 'react'

import '../index.css'
const Header = () => {
    return (
        <>
            <header className="header">
                <a href="#" className="logo" style={{ height: '3.5rem' }}>Portfolio</a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skill">Skill</a>
                    {/* <a href="#">Portfolio</a> */}
                    <a href="#contact">Contact</a>

                </nav>
                <div className="hamburger" >

                    <ul>




                        <li> <img src="ham.png" alt="" width="23" />
                            <ul className="ull">
                                <li> <a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skill">Skills</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </li>
                    </ul>


                </div>
            </header>
        </>
    )
}

export default Header
