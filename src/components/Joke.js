import react from 'react'
import Data from './database';
export default function Joke (props){
    return (
        <>
          <div>
             <h3 style={{display:props.setup?"block":"none"}}>Setup:{props.setup}</h3> 
              {/* {props.setup && <h3>Setup : {props.setup}</h3>} */}
              <p>Punchline : {props.punchline}</p>
              <b>Upvotes: {props.vote}</b>
          </div>
          <hr/>
        </>
    );
}

/* Conditional Rendering ->
   we make the jsx into javascript using curly brackets
   or
   we can use ternary operator 
   Eg :-
    1. {props.setup && <h3>Setup : {props.setup}</h3>} 
       if the props.setup is a truthy value then only the next will be excuted.
    2. <h3 style={{display:props.setup?"block":"none"}}>Setup:{props.setup}</h3>
*/