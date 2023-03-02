import Categorys from "./JokeCategory";
import Search from "./searchbar";
import Joke from "./JokeItem";
import { JokesItems } from "./Jokes";
 import { useEffect, useState } from "react";
 import '../styles/jokeitem.css'
 import { SingleJoke } from "./JokeItem";
import SeeMore from "./seeMore";
import Navbar from "../NavBar_component/NavBar";
import Apps from "./Modal/App";
import Footer from "./Footer";

function Main() {  

const[CategoryIndex, setCategoryIndex] = useState(1);
const[showMore, setShowMore] = useState(false)
const[CategoryJson, setCategoryJson] = useState([]) //used to get the category replaces CategoryList

//this section deals with getting the category from the api
let categoryUrl = "https://api.jokes.digitalrenter.com/api/categories"
let   displayCategory;

 async function PullCategory(){
  const response = await fetch(categoryUrl)
  const responseData = await response.json()
  console.log(response);
  displayCategory = responseData.map((category) => {
    return(
      { categoryId:category.id,categoryName:category.name}
    )
  })
  console.log(displayCategory)
  setCategoryJson(displayCategory)

}
useEffect(() =>{
  PullCategory()
},[])


//End of getting Category 
 
//Contains all the handle methods
function handleCategoryIndex(e){
  setCategoryIndex(e.target.value)
  // alert('Hello')
  alert(e.target.value);
}

// const cateIndex = () => {
  
//   if(CategoryIndex )
// }

function handleShowMore(){ 
    setShowMore((prev)=>!prev)
}



    return (
      
      <div>  
        <div>
        <Navbar 
        index={CategoryIndex}/>
          <Search
           handleCategoryId={handleCategoryIndex}
           CategoryIndex={CategoryIndex}
            />
           <Categorys />
           <div>
            <SingleJoke 
              JokesItems={JokesItems}
              CategoryIndex={CategoryIndex}
            />
            <Joke
          category_id={CategoryIndex}
           showMore={showMore}
           />
           </div>
           <div style={{display:'flex', justifyContent:'center'}}>
           <SeeMore
           handleShowMore={handleShowMore} />
           <Apps/>
           </div>
         

        </div>
       
           <div>
            {/* <Navbar 
        index={CategoryIndex}/> */}
        <Footer/>
           </div>
              

      </div>
      
    );
    }
  export default Main
