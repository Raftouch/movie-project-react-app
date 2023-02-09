import React, { useState } from "react";
import { IMovie } from "../models";
import "./MovieBox.css";

interface MovieProps {
    movie: IMovie
}

const getPosterURL = (posterpath : any) =>{
    return `https://image.tmdb.org/t/p/w220_and_h330_face${posterpath}`
}

export function MovieBox({movie}: MovieProps) {
    const img = getPosterURL(movie.poster_path)

    return (
        <div className="movie-box">
            <img src={img} className="movie-img" alt={movie.original_title}/>
            <p className="movie-name">{movie.original_title}</p>
            <p>{movie.overview}</p>
            
        </div>
    )
}





 {/* <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.origin_country}</p> */}
            {/* <p>{movie.poster_path}</p> */}

            {/* <button className="buttonHome">Home</button> */}


// const [rating, setRating] = useState(false)
{/* <button className={btnClasses.join('')} onClick={() => setRating(prev => !prev)}>
                {rating ? 'Hide Rating' : 'Show Rating'}
            </button> */}
{/* <button onClick={() => setRating(prev => !prev)}>
                {rating ? 'Hide Rating' : 'Show Rating'}
</button> */}

// {rating && <div>
//     <p>Rate: <span style={{fontWeight: 'bold'}} >{movie.rating.rate}</span></p>
//     <p>Count: <span style={{fontWeight: 'bold'}}>{movie.rating.count}</span></p>
// </div>}