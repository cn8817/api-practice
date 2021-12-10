import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return(
        <nav>
            <div>
                <h1>Studio Ghibli Movies</h1>
            </div>
            <div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link className='link' to='/'>Films</Link></li>
                <li><Link className='link' to='/'>Characters</Link></li>
                <li><Link className='link' to='/'>Locations</Link></li>
                <li><Link className='link' to='/'>Species</Link></li>
                <li><Link className='link' to='/'>Vehicles</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            </div>
        </nav>
    )
}