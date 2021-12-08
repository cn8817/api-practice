import React, {useEffect, useState} from 'react'
import axios from 'axios'
 
export default function Movie() {
    const [movie, setMovie] = useState([])
 
    const fetchMovie = () => {
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
        fetchMovie()
    },[])
 
    return(
        <div>
            {movie.map(movie => (
                <div className='container'>
                <div className='movie-card'>
                    <div className='movie-img'>
                        <img src= {movie.image}/>
                    </div>
                    <div className='movie-info'>
                        <p>Title: {movie.title}</p>
                        <p>Japanese Title: {movie.original_title} ({movie.original_title_romanised})</p>
                        <p>Release Date: {movie.release_date}</p>
                    <div className='movie-description'>
                        <p>Description: {movie.description}</p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}
 
