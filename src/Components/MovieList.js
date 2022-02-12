import React ,{useEffect, useState} from 'react';
import MovieCard from './MovieCard';

const MovieList = ({search,rate,addMovie}) => {
    const [movies,setMovies] = useState([
        { 
            title:'How to Train Your Dragon',
            description:"A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
            posterURL:'https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UY209_CR0,0,140,209_AL_.jpg',
            rating:75
        } ,
        {
            title:'The Princess and the Frog',
            description:'A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.',
            posterURL:'https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_UX140_CR0,0,140,209_AL_.jpg',
            rating:73
        } ,
        {
            title:' Hotel Transylvania 3: Summer Vacation',
            description:'Count Dracula and company participate in a cruise for sea-loving monsters, unaware that their boat is being commandeered by the monster-hating Van Helsing family.',
            posterURL:'https://m.media-amazon.com/images/M/MV5BNjA1MzU5MTY3OF5BMl5BanBnXkFtZTgwNTU5MDA3NTM@._V1_UY209_CR0,0,140,209_AL_.jpg',
            rating:54   
        },
        {
            title:' Extremely Loud & Incredibly Close',
            description:'A nine-year-old amateur inventor, Francophile, and pacifist searches New York City for the lock that matches a mysterious key left behind by his father.',
            posterURL:'https://m.media-amazon.com/images/M/MV5BMTUxNzYwMTE3NV5BMl5BanBnXkFtZTcwMDY2NzU4Ng@@._V1_UY209_CR0,0,140,209_AL_.jpg',
            rating:46   
        },
        {
            title:'The Amazing Spider-Man 2',
            description:'When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.',
            posterURL:'https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_UY209_CR0,0,140,209_AL_.jpg',
            rating:53
        },
        {
            title:'All Dogs Go to Heaven',
            description:'Lolita is a Franco-American film directed by Adrian Lyne,released in 1997.',
            posterURL:'https://m.media-amazon.com/images/M/MV5BMTI4ZWRmNTAtOWIyZC00Njk0LWIzZGItYjE0NDVlM2Q4ZWJjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UX140_CR0,0,140,209_AL_.jpg',
            rating:50
        }
])

const handleDelete=(titleDelete)=>{
    setMovies(movies.filter( el => el.title !== titleDelete))
}

useEffect(() => {
    if(addMovie){
        setMovies([...movies,addMovie])}
}, [addMovie]);

    return(
        <div style={{margin:'30px'}}>
            {movies.filter(movie => movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && movie.rating >= rate)
                    .map((el,i)=> <MovieCard handleDelete={handleDelete} key={i} movie={el}/> )}        
        </div>
    ) ;

};
export default MovieList;
