
import { useEffect, useState } from "react"
export default function Home(){  
const[showPunchline, setShowPunchline] = useState('')

let apiUrl = 'https://api.jokes.digitalrenter.com/api/jokes'
let displayData;
   async function PullJson(){ 
   const response = await fetch(apiUrl)
   const responseData = await response.json()
   console.log(responseData)

   displayData = responseData.map((joke) => {

    return (
        <p key={joke.id}>{joke.punchline}</p>
    )
   })
   console.log(responseData)
   setShowPunchline(displayData)

   }

    useEffect(() => {
        PullJson()

    })
    return (
        <div>
            <p>Hello this is the page where i will lay my Json</p>
            <div>
                {showPunchline}
            </div>
        </div>
    )
}

// option 1

// const[showPunchline, setShowPunchline] = useState('')

// let apiUrl = 'https://api.jokes.digitalrenter.com/api/jokes'
// let displayData;
//     function PullJson(){
//         fetch(apiUrl)
//         .then(response => response.json())
//         .then(responseData => {
//             displayData = responseData.map(function(joke) {
//                 return(
//                     <p>{joke.punchline}</p>
//                 )
//             })
//             console.log(responseData);
//             setShowPunchline(displayData)
//         })
//         //This data is not renderes unles with a state because it is using a promise that receives the data only when the data is available it 
      
//     }


//     useEffect(() => {
//         PullJson()

//     })