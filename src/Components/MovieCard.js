import React from 'react';
import { Rating } from 'react-simple-star-rating';
import './MovieCard.css'

const MovieCard = (props) => { 
    return (
    
        <div className="card-container">
            <div className="card-hero">
                <div className="poster-container">
                    <img src={props.movie.posterURL} className="poster" alt='Poster'/>
                </div>
                <div className="card-body">
                    <div className="card-content">
                        <h4 className="movie-title">{props.movie.title}</h4>
                        <p className="movie-desc">
                            {props.movie.description}
                        </p>
                        <p className="movie-rating" > <Rating readonly={true} ratingValue={props.movie.rating} /> </p>
                        <button  className="del-btn" onClick={()=>props.handleDelete(props.movie.title)} > Delete </button>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
