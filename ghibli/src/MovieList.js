import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
 
export default function MovieList() {
    const [movie, setMovie] = useState([])
    const {push} = useHistory()
 
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

    // const onClick = () => {
    //     push(`/${movie.id}`)
    // }
 
    useEffect(() => {
        fetchMovies()
    },[])
 
    return(
        <div className='movie-list-container'>
            {movie.map(movie => (
                <Link to={`/${movie.id}`}>
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
    )
}
 
