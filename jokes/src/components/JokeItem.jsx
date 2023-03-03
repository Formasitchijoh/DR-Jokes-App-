import JokeIcon from "./jokeIcons"
import '../index.css'
import { useEffect, useState } from "react";

export default function Joke(props){
    const[showAllJoke, setAllJoke] = useState([])
    const[reShowAllJoke, setReShowAllJoke] = useState(false)
    const[reRender, setRerender] = useState(false)


let jokeUrl = "https://api.jokes.digitalrenter.com/api/jokes"
let displayjoke;

alert(props.category_id)

function pullJokes(){
    // alert(props.category_id)
    fetch(jokeUrl)
    .then(response => response.json())
     .then(responseData  => {
      displayjoke = responseData.filter((response) => (
    
           (response.category_id !== props.category_id) && response 
      ))
      
      console.log(displayjoke)
      setAllJoke(displayjoke) // gets all the jokes which i will uses 
     })
  }

useEffect(() =>{
  pullJokes()
},[])


     const onNewCommentReceived = (newComment)=>{
      console.log(`Data sent is  ${newComment}`)
    
      const updatedJokes = showAllJoke.map(joke => {
           
        if(joke.id === newComment.data.joke_id){
          joke.comments = [newComment.data, ...joke.comments];
         
        }
        return joke
      });
      setAllJoke(updatedJokes)
    //   console.log(newComment)
      console.log(showAllJoke)
   
     }

     function pullingAfterCommenting(){ 
      if(reShowAllJoke){
        fetch(jokeUrl)
    .then(response => response.json())
     .then(responseData  => {
      displayjoke = responseData.filter((response) => (
    
            response.category_id === props.category_id
      ))
      
      console.log(displayjoke)
      setAllJoke(displayjoke) // gets all the jokes which i will uses 
     })
        
      }
         
     }
    
const NewJoke = showAllJoke.map((Joke) => (
    <li>
        <JokeIcon 
        {...Joke}
        pullingAfterCommenting={pullingAfterCommenting}
        onNewComment={(comment) => onNewCommentReceived(comment)}
         />
    </li>
 ) )
 
    return ( 
        <>
        
        <div style={{display:!props.showMore ? "grid" :"none"}} className="jokes-grid">{NewJoke.slice(0,6)}</div>
         <div style={{display:props.showMore ?"grid":"none"}} className="jokes-grid">{NewJoke.slice(6,12)}</div>
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




// import JokeIcon from "./jokeIcons"
// import '../index.css'
// import { useEffect, useState } from "react";

// export default function Joke(props){
//     const[showAllJoke, setAllJoke] = useState([])


// let jokeUrl = "https://api.jokes.digitalrenter.com/api/jokes"
// let displayjoke;

// function pullCategory(){
//     alert(props.category_id)
//     fetch(jokeUrl)
//     .then(response => response.json())
//      .then(responseData  => {
//       displayjoke = responseData.filter((response) => (
    
//             response.category_id == props.category_id
//       ))
      
//       console.log(displayjoke)
//       setAllJoke(displayjoke) // gets all the jokes which i will uses 
//      })
//   }
// useEffect(() =>{
//   pullCategory()
// },[])


//      const onNewCommentReceived = (newComment)=>{
//       console.log(`Data sent is  ${newComment}`)
    
//       const updatedJokes = showAllJoke.map(joke => {
           
//         if(joke.id === newComment.joke_id){
//           joke.comments = [newComment, ...joke.comments];
//         }
//         return joke
//       });
//       setAllJoke(updatedJokes)
//       console.log(showAllJoke)
   
//      }
// const NewJoke = showAllJoke.map((Joke) => (
//     <li>
//         <JokeIcon 
//         {...Joke}
//         onNewComment={(comment) => onNewCommentReceived(comment)}
//          />
//     </li>
//  ) )
 
//     return ( 
//         <>
//         <div style={{display:!props.showMore ? "grid" :"none"}} className="jokes-grid">{NewJoke.slice(0,6)}</div>
//          <div style={{display:props.showMore ?"grid":"none"}} className="jokes-grid">{NewJoke.slice(6,12)}</div>
//         </>
            
//     )
// }

// export function SingleJoke({JokesItems,CategoryIndex}){
//     const newJoke = JokesItems.map((JokesItem) => (
//         <div >
//             <img
//             src={JokesItem.Category.imageUrl}
//             alt='' />
//             <p>{JokesItem.Category.name}</p>
//         </div>
// ))

//     return (
//         <div className="single-cat">
//             {newJoke[CategoryIndex]}
//         </div>
//     )
// }

