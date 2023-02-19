// import JokeCategory from './components/Joke_category';
// import { JokesItems } from './components/Jokes';
import Navbar from './NavBar_component/NavBar';
// import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Categorys from './components/JokeCategory';
import Search from './components/searchbar';
import Joke from './components/JokeItem';
import SeeMore from './components/seeMore';
import Footer from './components/Footer';
import { SingleJoke } from './components/JokeItem';
function App() {  

  return (
    
    <div>
      <Navbar />
        <Search/>
         <Categorys />
         <Joke/>
      <SeeMore/>
      <Footer/> 
    </div>
    
  );
}


export default App;
