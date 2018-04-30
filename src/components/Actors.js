import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map((actor,index) =>
      <div key={index}>
      <h1>{actor.name}</h1>


        <ul>
          {actor.movies.map((movie,index) =>
            (<li key={index}>{movie}</li>)
          )}
        </ul>
      </div>
    )}
    </div>
  );
};

export default Actors;

// This component should render the text Actors Page, and
//  make a new <div> for each actor.
//  The <div> should contain the actor's name and an <ul> for each of their movies.
