// import JokeCategory from './components/Joke_category';
// import { JokesItems } from './components/Jokes';
import Navbar from './NavBar_component/NavBar';
// import { BrowserRouter } from 'react-router-dom';
import './index.css'
import SeeMore from './components/seeMore';
import Footer from './components/Footer';
import Main from './components/Main';
import Apps from './components/Modal/App';

function App() {  

  return (
    
    <div>
      
      <Main/> 
      <Apps/>
      <Footer/> 
    </div>
    
  );
}


export default App;
