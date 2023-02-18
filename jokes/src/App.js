// import JokeCategory from './components/Joke_category';
// import { JokesItems } from './components/Jokes';
import Navbar from './NavBar_component/NavBar';
// import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Category from './components/JokeCategory';
import Search from './components/searchbar';
import Joke from './components/JokeItem';
import SeeMore from './components/seeMore';
import Footer from './components/Footer';
function App() {  
  return (
    
    <div>
      <Navbar />
        <Search/>
         <Category />
         <Joke/>
      <SeeMore/>
      <Footer/> 
    </div>
    
  );
}

export default App;
