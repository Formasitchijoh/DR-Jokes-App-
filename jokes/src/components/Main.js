import Categorys from "./JokeCategory";
import Search from "./searchbar";
import Joke from "./JokeItem";
import { JokesItems } from "./Jokes";
 import { useState } from "react";
 import JokeIcon from "./jokeIcons";
 import '../styles/jokeitem.css'
 import SeeMore from "./seeMore";

function Main() {  
  
const[selectedCategory, setSelectedCategory] = useState('')
const[CategoryIndex, setCategoryIndex] = useState(0);
const {Category, Jokes}= JokesItems[CategoryIndex];
const[NewJoke, setNewJoke] = useState(Jokes.map((Joke) => (
  <li>
      <JokeIcon 
      joke={Joke.joke}/>
  </li>
) ))
const[showMore, setShowMore] = useState(false)
const[showLess, setShowLess] = useState(true)

//This is an array of all the categories
const CategoryArray = JokesItems.map((JokeItem) => JokeItem.Category)

function handleSelectedCategory(e){
  setSelectedCategory(e.target.value)
}

function CheckCategory(){ 
  for(let i = 0 ; i < CategoryArray.length; i++){ 
    if(CategoryArray[i].name === selectedCategory){ 
      alert(`Gotcha + ${CategoryArray[i].name} at ${i}`)
      setCategoryIndex(5)
      break;
    }
  }
}

function handleClick(){
  setCategoryIndex(CategoryIndex + 1)
}
function handleNewJokeChange(){
const newJoke1 = Jokes.map((Joke) => (
  <li>
      <JokeIcon 
      joke={Joke.joke}/>
  </li>
) )

  setNewJoke(newJoke1)
}

// const newSlice = NewJoke.slice(0,3);
function handleShowMore(){
  setShowMore(true)
  
}
function handleShowLess(){
  setShowLess(true)
}
    return (
      
      <div>
          <Search
           selectedCategory={selectedCategory}
           handleSelectedCategory={handleSelectedCategory}
           CheckCategory={CheckCategory}
           handleClick={handleClick}
          />
           <Categorys />
           <div>
            <SingleJoke
            imageUrl={Category.imageUrl}
            name={Category.name}
            />
            {showMore ? (<div className="container">
              {NewJoke.slice(0,3)}</div>) 
              : (<div className="container">{NewJoke}</div>)}
            
           </div>
           <SeeMore
           handleShowMore={handleShowMore}
           />

      </div>
      
    );
  }
  

export function SingleJoke(props){
return (
<div className="single-cat">
<img
      src={props.imageUrl}
      alt='' />
      <p>{props.name}</p>
</div>
)
}


  
  export default Main;
  