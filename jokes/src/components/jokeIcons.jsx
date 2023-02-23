import like from '../assets/like2.png'
import laugh from '../assets/laugh.jpeg'
import comment from '../assets/comment.png'
import '../styles/jokeicon.css'
import { useState } from 'react'
import Comment from './CommentForm'

export default function JokeIcon(props){ 
    const[likes, setlikes] = useState(0)
    const[laughs, setLaughs] = useState(0)
    const[isComment, setIsComment] = useState(false);
  
     function handleLikeClick(e){
        setlikes(likes + 1)
     }
     function handleLaughsClick(){
        setLaughs(laughs + 1)
     }

     function handleComment(){
           setIsComment((prev) => !prev);

           if(isComment){
            return(
               <Comment/>
            )
           }
           
     }

     const CommentFunction = ()=> {
      <Comment/>
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
           onClick={handleComment}
            />   
         </div>
           
          </div>
        
    )
}