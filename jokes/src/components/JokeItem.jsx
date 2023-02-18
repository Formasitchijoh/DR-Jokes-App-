import { JokesItems } from "./Jokes"
import JokeIcon from "./jokeIcons"
import '../styles/jokeitem.css'
export default function Joke(){
const NewJoke = JokesItems.map((JokeItem, index) => (
    <li>
        <JokeIcon
        joke={JokeItem.Jokes[index].joke}/>
    </li>
 ) )
 const newOneJoke = JokesItems.filter((JokeItem) => {
    JokeItem.Category.name = 'Family Joke'
    return (
      <li>
        <img
        src={JokeItem.Category.imageUrl}
        alt=''>
        </img>
        <p>{JokeItem.Jokes.joke}</p>
      </li>
    )
   
    
    
})

    return ( 
            <> 
            
            <ul className="container">
                {NewJoke}
            </ul>
            {/* <div>
                {newOneJoke[0]}
            </div> */}
            </>
            
            
     
    )
}
