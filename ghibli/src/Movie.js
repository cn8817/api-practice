import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import { getFilmsId } from './actions'

function Movie(props){
    const {push} = useHistory()
    const {id} = useParams()
    const {film} = props

    useEffect(() => {
        props.getFilmsId(id)
    }, [id])

    const onClick = () => {
        push('/')
    }

    return(
        <div className='movie-container'>
            <button onClick={onClick}>Back</button>
            <div className='movie-card'>
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
        </div>
    )
}

const mapStateToProps = state => {
    return {
        film: state.getFilmByIdReducer.film
    }
}

export default connect(mapStateToProps, {getFilmsId})(Movie)