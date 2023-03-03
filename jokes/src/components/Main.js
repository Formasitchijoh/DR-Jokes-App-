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

const[categoryIndex, setCategoryIndex] = useState(1);
const[showMore, setShowMore] = useState(false)
const[categoryJson, setCategoryJson] = useState([]) //used to get the category replaces CategoryList
const[categoryItem, setCategoryItem] = useState(0)

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
  setCategoryJson(responseData)
  console.log("tHIS IS THE List")
  console.log(categoryJson)

}
useEffect(() =>{
  PullCategory()
},[])

console.log("Hello i am indite the ctagegoryitem and i want")
console.log(categoryItem)

function handleShowMore(){ 
    setShowMore((prev)=>!prev)
}
    return (
      
      <div>  
        <div>

        <Navbar 
        index={categoryIndex}
        />
          <Search
          setCategoryItem={setCategoryItem}
           categoryItem={categoryItem}
           categoryList={categoryJson}
            />
           <Categorys />
           <div>
            <SingleJoke 
              JokesItems={JokesItems}
              CategoryIndex={categoryIndex}
            />
            <Joke
          category_id={categoryItem}
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
