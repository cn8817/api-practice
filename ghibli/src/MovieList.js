import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
export default function MovieList() {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState('')
 
    const fetchMovies = () => {
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
 
    useEffect(() => {
        fetchMovies()
    },[])
 
    return(
    <div>
        <input className='search' placeholder='Search for a film' onChange={event => setSearch(event.target.value)}/>
        <div className='movie-list-container'>
            {movie.filter(movie => {
                if(search === ''){
                    return movie
                } else if(movie.title.toLowerCase().includes(search.toLowerCase())){
                    return movie
                }
            }).map(movie => (
                <Link className='link' to={`/${movie.id}`}>
                    <div className='movie-list-card' >
                        <div className='movie-list-img'>
                            <img src= {movie.image}/>
                        </div>
                        <div className='movie-list-title'>
                            <p>{movie.title}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </div>
    )
}
 
