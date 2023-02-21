
import { useState } from 'react';
import '../styles/navbar.css'
import AddJoke from '../components/AddJokeForm';
export default function Navbar() { 

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const[isAdd, setIsAdd] = useState(false) 
    const[authorName, setAuthorName] = useState('')
    const[newJoke, setNewJoke] = useState('')
           
    function handleAuthorName(e){
        setAuthorName(e.target.value)
    }
    function handleNewJokeChange(e){
        setNewJoke(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        setAuthorName('');
        setNewJoke('');
    }
  function handleSetAdd(){
setIsAdd((prev) => !prev)
}

    const RenderNewJoke =(
      <AddJoke
        handleAuthorName={handleAuthorName}
        handleSubmit={handleSubmit}
        handleNewJokeChange={handleNewJokeChange}
      />
    );

    const NavBar = (
      <nav className="navigation">
      <a href="/" className="brand-name">
        Djoker
      </a>
      <button
       className="hamburger"
      onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">Joke</a>
          </li>
          <li>
            <a href="/contact">Videos</a>
          </li>
          <li>
            <a href="/home">Comedians</a>
          </li>
            <button onClick={handleSetAdd}>Add Joke</button>
        </ul>
      </div>
    </nav>
    );

    return (
      <div> 
      {/* <div style={{display:isAdd === true?"block":"none"}}>{RenderNewJoke}</div>
      <div style={{display:isAdd === true?"none":"block"}}>{NavBar}</div> */}
      {isAdd?RenderNewJoke:NavBar}
      </div>
    )
  }
  












// import Brand from './logo';
// import { Hamburger} from './logo';
// import { NavLink } from 'react-router-dom'
// import './NavBar.css'
// import { useState } from 'react';

// //Remember we uses states for anything that will change states in the process of rendering the DOM

// const Navbar = () => {
//     const [showNav, setShowNav] = useState(false)
//     const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

// const toggleNavItems = () => {
//   setShowNav(!showNav)
// }
//     return(
//         <nav className='navbar'>
//             <div className='container'>
//             <div className='logo'>
//                 <Brand/>
//             </div>

//             <div className='menu-icon' onClick={handleShowNavbar}>
//                 <Hamburger/>
//             </div>

//             <div className={`nav-elements ${showNav && 'active'}`}>
//                 <ul>
//                     <li>
//                         <NavLink to="/">Home</NavLink>
//                         </li>
//                     <li>
//                         <NavLink to="/blog">Blog</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/Projects">Projects</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about">About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact">Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             </div>
//         </nav>
//     )
// }
// export default Navbar
