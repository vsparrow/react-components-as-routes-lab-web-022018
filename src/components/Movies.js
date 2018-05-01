import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  // movieInfo=()=>{
  //   // return this.props.
  // }
  return (
    <div>
    <h1>Movies Page</h1>
    {  movies.map((movie,index) =>
        <div key={index}>
          <h1>{movie.title}</h1>
          <h2>{movie.time}</h2>
          <ul>
          {movie.genres.map((genre,index)=><li key={index}>{genre}</li>)}
          </ul>
        </div>
    )}
    </div>
  );
};

export default Movies;
// make a new <div> for each movie. The <div> should contain the movie's title, time and an <ul> for each genre.
