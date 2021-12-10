import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            <div>
                <h1>Studio Ghibli Movies</h1>
            </div>
            <ul>
                <li><Link className='link' to='/'>Films</Link></li>
                <li><Link className='link' to='/'>Characters</Link></li>
                <li><Link className='link' to='/'>Locations</Link></li>
                <li><Link className='link' to='/'>Species</Link></li>
                <li><Link className='link' to='/'>Vehicles</Link></li>
            </ul>
        </nav>
    )
}