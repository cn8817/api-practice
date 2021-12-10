import React, {useEffect, useState} from 'react'
import axios from 'axios'
 
export default function MovieList() {
    const [movie, setMovie] = useState([])
 
    const fetchMovies = () => {
        axios.get('https://ghibliapi.herokuapp.com/films')
            .then(res => {
                // return res
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
        <div className='movie-list-container'>
            {movie.map(movie => (
                <div className='movie-list-card'>
                    <div className='movie-list-img'>
                        <img src= {movie.image}/>
                    </div>
                    <div className='movie-list-title'>
                        <p>{movie.title}</p>
                    </div>
                    {/* <div className='movie-info'>
                        <p>Title: {movie.title}</p>
                        <p>Japanese Title: {movie.original_title} ({movie.original_title_romanised})</p>
                        <p>Release Date: {movie.release_date}</p>
                    <div className='movie-description'>
                        <p>Description: {movie.description}</p>
                    </div>
                    </div> */}
                </div>
            ))}
        </div>
    )
}
 
