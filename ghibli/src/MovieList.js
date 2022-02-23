import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getFilms } from './actions'

//add a favorite or watched button that adds movies to a new list that users can view 
 
function MovieList(props) {
    const { films } = props
    const [search, setSearch] = useState('')
 
    useEffect(() => {
        props.getFilms()
    },[])
 
    return(
    <div>
        <input className='search' placeholder='Search for a film' onChange={event => setSearch(event.target.value)}/>
        <div className='movie-list-container'>
            {films.filter(films => {
                if(search === ''){
                    return films
                } else if(films.title.toLowerCase().includes(search.toLowerCase())){
                    return films
                }
            }).map(film => (
                <Link className='link' to={`/${film.id}`}>
                    <div className='movie-list-card' >
                        <div className='movie-list-img'>
                            <img src= {film.image}/>
                        </div>
                        <div className='movie-list-title'>
                            <p>{film.title}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </div>
    )
}
 
const mapStateToProps = state => {
    return{
        films: state.getFilmsReducer.films,
    }
}
export default connect(mapStateToProps, {getFilms})(MovieList)