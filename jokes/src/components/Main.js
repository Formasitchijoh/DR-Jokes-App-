import Categorys from "./JokeCategory";
import Search from "./searchbar";
import Joke from "./JokeItem";
import { JokesItems } from "./Jokes";
 import { useState } from "react";
 import JokeIcon from "./jokeIcons";
 import '../styles/jokeitem.css'
 import { SingleJoke } from "./JokeItem";
import SeeMore from "./seeMore";
import Navbar from "../NavBar_component/NavBar";
import Comment from "./CommentForm";
function Main() {  

const[selectedCategory, setSelectedCategory] = useState('')
const[CategoryIndex, setCategoryIndex] = useState(0);
const CategoryList = JokesItems.map(JokeItem => JokeItem.Category.name) //Return the name of all the Category from which to select from 
const[showMore, setShowMore] = useState(false)

 
function handleSelectedCategory(e){
  setSelectedCategory(e.target.value)
}
function handleCategoryIndex(){ 

  for(let index = 0;index < CategoryList.length;index++){
    if(CategoryList[index] === selectedCategory){
      setCategoryIndex(index);
      break;
    }}
  }
function handleShowMore(){ 
    setShowMore((prev)=>!prev)
}


    return (
      
      <div>
        <Navbar 
        index={CategoryIndex}/>
          <Search
           selectedCategory={selectedCategory}
           handleSelectedCategory={handleSelectedCategory}
           handleCategoryIndex={handleCategoryIndex} />
           <Categorys />
           <div>
            <SingleJoke 
              JokesItems={JokesItems}
              CategoryIndex={CategoryIndex}
            />
            <Joke
           CategoryIndex={CategoryIndex}
           showMore={showMore}
           />
           </div>
           <SeeMore
           handleShowMore={handleShowMore} />
           <Comment/>
           
           
          

      </div>
      
    );
    }
  export default Main;
  