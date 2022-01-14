import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import { getFilmsId } from './actions'

function Movie(props){
    const {push} = useHistory()
    const {id} = useParams()
    const { film, isFetching } = props

    useEffect(() => {
        setTimeout(()=>{
            props.getFilmsId(id)
        }, 3000)
    }, [id])

    const onClick = () => {
        push('/')
    }

    if(isFetching === true){
        return(
            <div className='loading'>
                <img src='https://i.pinimg.com/originals/be/33/5f/be335fd0dc86f5fda4c98e057a5e322f.gif' alt='loading...' className='loading-img'/>
                <h2>Loading Film...</h2>
            </div>
        )
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
        film: state.getFilmByIdReducer.film,
        isFetching: state.getFilmByIdReducer.isFetching
    }
}

export default connect(mapStateToProps, {getFilmsId})(Movie)