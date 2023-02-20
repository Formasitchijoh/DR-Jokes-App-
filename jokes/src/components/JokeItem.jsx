import { JokesItems } from "./Jokes"
import JokeIcon from "./jokeIcons"
import '../styles/jokeitem.css'
import Search from "./searchbar";
import { useState } from "react";

export default function Joke(props){ 
    const[categoryIndexHold, setcategoryHold] = useState(props.CategoryIndex)
    const {Category, Jokes}= JokesItems[categoryIndexHold];
    
const NewJoke = Jokes.map((Joke) => (
    <li>
        <JokeIcon 
        joke={Joke.joke}/>
    </li>
 ) )
 
    return ( 

            <div>
                <SingleJoke />
            <div className="container">
                {NewJoke}
            </div>
            </div>
        
            
            
     
    )
}

const newJoke = JokesItems.map((JokesItem, index) => (
            <div >
                <img
                src={JokesItem.Category.imageUrl}
                alt='' />
                <p>{JokesItem.Category.name}</p>
            </div>
))


export function SingleJoke(){
    return (
        <div className="single-cat">
            {newJoke[0]}
        </div>
    )
}

