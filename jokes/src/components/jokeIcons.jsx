import like from '../assets/like2.png'
import laugh from '../assets/laugh.jpeg'
import comment from '../assets/comment.png'
import '../styles/jokeicon.css'

export default function JokeIcon(props){ 
    return (

        <div className='joke-container'>
            <div className='joke-element'>{props.joke}hello this is my world i dont care in case you didnt know i am trying to break you for sure</div>
         <div className='joke-icons'>
            
            <img
           src={like}
           alt=""
           className="like-image"
            />
            <img
           src={laugh}
           alt=""
           className="laugh-image"
            />
           <img
           src={comment}
           alt=""
           className="comment-image"
            />   
         </div>
           
          </div>
        
    )
}