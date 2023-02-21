import { JokesItems } from "./Jokes"
import JokeIcon from "./jokeIcons"
import '../styles/jokeitem.css'
import Search from "./searchbar";
import { useState } from "react";
import '../styles/seeMore.css'

export default function Joke(props){
    
   let index = props.CategoryIndex
    const {Category, Jokes}= JokesItems[index];
const NewJoke = Jokes.map((Joke) => (
    <li>
        <JokeIcon 
        joke={Joke.joke}/>
    </li>
 ) )
 
    return ( 
        <>
        <div style={{display:!props.showMore ? "block" :"none"}} className="container">{NewJoke.slice(0,3)}</div>
         <div style={{display:props.showMore ?"block":"none"}} className="container">{NewJoke}</div>
        </>
            
    )
}

export function SingleJoke({JokesItems,CategoryIndex}){
    const newJoke = JokesItems.map((JokesItem) => (
        <div >
            <img
            src={JokesItem.Category.imageUrl}
            alt='' />
            <p>{JokesItem.Category.name}</p>
        </div>
))

    return (
        <div className="single-cat">
            {newJoke[CategoryIndex]}
        </div>
    )
}


