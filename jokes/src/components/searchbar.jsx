import "../styles/search.css"
import search from '../assets/search.jpg'

export default function Search(props){ 


    return(
        <form className="search-container" >
            <input
             type="search" 
             className="search-box"
             value={props.selectedCategory}
             onChange={props.handleSelectedCategory}
             >
             </input>

            <button 
            type="button"
            className="search-button"
            onClick={props.handleCategoryIndex}
                    >
            <img 
            src={search}
            alt=''
           className="search-icon"
            />
            </button>
            
           
        </form>
    )
}

