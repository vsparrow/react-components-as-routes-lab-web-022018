import React from 'react';
import { directors } from '../data';

// const Directors = () => {
//   return ();
// }

const Directors = ()=>{
  return(
    <div>

      <h1>Directors Page</h1>
      {directors.map((director,index)=>
        <div key={index}>
        <h1 >{director.name}</h1>
            <ul>
            {director.movies.map((movie,index)=>
              <li key={index}>{movie}</li>
            )}
            </ul>
        </div>
      )}
    </div>
  )
}

export default Directors
// This component should render the text Directors Page,
//  and make a new <div> for each director.
//   The <div> should contain the director's name and an <ul> for each of their movies.
// <div>
// <h1>Directors Page</h1>
// {directors.map((director,index)=>
//   <div key={index}>
//   <h1>{director.name}</h1>
//     <ul>
//       {director.movies.map((movie,index)) => (
//         <li key={index}>{movie}</li>
//       ) }
//     </ul>
//
//   </div>
// )}
// </div>
