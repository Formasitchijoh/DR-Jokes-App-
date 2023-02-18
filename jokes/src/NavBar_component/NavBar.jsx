
import { useState } from 'react';
import '../styles/navbar.css'
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
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
            <li>
              <a href="/home">Add Joke</a>
            </li>
          </ul>
        </div>
      </nav>
    );
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
