import "../styles/search.css"
import search from '../assets/search.jpg'

export default function Search(){

    return(
        <form className="search-container" >
            <input type="search" className="search-box"></input>
            <img 
            src={search}
            alt=''
           className="search-icon"
            />
           
        </form>
    )
}