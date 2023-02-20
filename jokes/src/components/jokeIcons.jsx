import like from '../assets/like2.png'
import laugh from '../assets/laugh.jpeg'
import comment from '../assets/comment.png'
import '../styles/jokeicon.css'
import { useState } from 'react'

export default function JokeIcon(props){ 
    const[likes, setlikes] = useState(0)
    const[laughs, setLaughs] = useState(0)
    const[edit, setEdit] = useState('')

     function handleLikeClick(e){
        setlikes(likes + 1)
        // alert(laughs)
     }
     function handleLaughsClick(){
        setLaughs(laughs + 1)
     }

    return (

        <div className='joke-container'>
            <div className='joke-element'>{props.joke}hello this is my world i dont care in case you didnt know i am trying to break you for sure</div>
         <div className='joke-icons'>
            <div className='like-container'>
            <img
           src={like}
           alt=""
           className="like-image"
           onClick={handleLikeClick}
            />
            <span>{likes}</span>
            </div>
            
            <div className='laugh-container'>
            <img
           src={laugh}
           alt=""
           className="laugh-image"
           onClick={handleLaughsClick}
            />
             <span>{laughs}</span>
            </div>
            
           <img
           src={comment}
           alt=""
           className="comment-image"
            />   
         </div>
           
          </div>
        
    )
}