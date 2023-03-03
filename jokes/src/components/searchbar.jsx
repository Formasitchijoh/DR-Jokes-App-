import "../styles/search.css"
import search from '../assets/search.jpg'

export default function Search(props){ 
    // let values = JSON.stringify({id:list.id})
    function handleCategorySelected(e){
        props.setCategoryItem(e.target.value)
    }
    return(
        <div className="search-container" >
           
             <select
             className="select-box"
             value={props.categoryItem}
             onChange={handleCategorySelected}
             >
                 <option value={1}>Family</option>
                <option value={2}>Political</option>
                <option value={3}>Religion</option>
                <option value={4}>Education</option>
                <option value={5}>Emotional</option>
               
             </select>

            <button 
            onClick={()=> alert(props.categoryIndex)}
            className="search-button"
             >
            <img 
            src={search}
            alt=''
           className="search-icon"
            />
            </button>
        </div>
    )
}


// import "../styles/search.css"
// import search from '../assets/search.jpg'

// export default function Search(props){ 
//     return(
//         <div className="search-container" >
           
//              <select
//              className="select-box"
//              value={props.CategoryIndex}
//              onChange={props.handleCategoryIndex}
//              >
               
//              </select>

//             <button 
//             onClick={()=> alert(props.CategoryIndex)}
//             className="search-button"
//              >
//             <img 
//             src={search}
//             alt=''
//            className="search-icon"
//             />
//             </button>
//         </div>
//     )
// }



// {props.categoryList.map((list) =>(
//     <option value={list.id}>{list.name}</option>
// ))}