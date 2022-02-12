import React,{useState} from 'react';
import './App.css';
import Filter from './Components/Filter';
import Add from './Components/Add';
import MovieList from './Components/MovieList';

function App() {

  const [rate, setRate] = useState(0);
  const handleRating=(rate)=>{setRate(rate)} 
  const [search, setSearch] = useState("");
  const handleFilter=(searchValue)=> {setSearch(searchValue);}
  const [addMovie, setAddMovie] = useState("");
  const handleAdd=(movie) => {setAddMovie(movie)}
  
  return (

    <div className="App">   
    
      <Add handleAdd={handleAdd}/> 
      <Filter handleRating={handleRating} handleFilter={handleFilter}/>
      <MovieList rate={rate}  addMovie={addMovie} search={search}/>
      
    </div>
  );  

}

export default App;