
//import ClassEg from './Components/ClassComponents/ClassEg';
import Home from './Components/FunctionComponents/Home';
import Gallery from './Components/FunctionComponents/Gallery';
import About from './Components/FunctionComponents/About';
import Contact from './Components/FunctionComponents/Contact';
import Navbar from './Components/FunctionComponents/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 
function App() {
  
  return (
   <div>

<BrowserRouter>
<Navbar>
<Routes>
  <Route path="/" element={<Home/>}/>                   
  <Route path="/about" element={<About/>}/> 
  <Route path="/gallery" element={<Gallery/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</Navbar>
</BrowserRouter>

    <Home/>
    <About college="KEC" clg1="kongu Arts" clg2="Kongu"/>
    <Gallery/>
    <Contact/>
    <ClassEg/>
   </div>
  )
}

export default App;

 