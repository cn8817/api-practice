import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Movie(props){
    const [film, setFilm] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios
            .get(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => {
                setFilm(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return(
        <div>
            <img src={film.image}/>
            <div className='movie-info'>
                <p>Title: {film.title}</p>
                <p>Japanese Title: {film.original_title} ({film.original_title_romanised})</p>
                <p>Release Date: {film.release_date}</p>
                <div className='movie-description'>
                    <p>Description: {film.description}</p>
                </div>
            </div>
        </div>
    )
}