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
        </div>
    )
}