
//import ClassEg from './Components/ClassComponents/ClassEg';
import Home from './Components/FunctionComponents/Home';
import Gallery from './Components/FunctionComponents/Gallery';
import About from './Components/FunctionComponents/About';
import Contact from './Components/FunctionComponents/Contact';
import Navbar from './Components/FunctionComponents/Navbar';
import Footer from './Components/FunctionComponents/Footer';
import UseEffect from './Components/FunctionComponents/UseEffect';
import UseRef from './Components/FunctionComponents/UseRef';
import UseContext from './Components/FunctionComponents/UseContext';
import UseMemo from './Components/FunctionComponents/UseMemo';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
 
function App() {
  
  return (
   <div>

    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about"element={<About college="KEC" clg1="kongu Arts" clg2="Kongu"/>}/>
            <Route path="/Gallery"element={<Gallery/>}/>
            <Route path="/UseEffect"element={<UseEffect/>}/>
            <Route path="/UseRef"element={<UseRef/>}/>
            <Route path="/UseContext"element={<UseContext/>}/>
            <Route path="/UseMemo"element={<UseMemo/>}/>
            <Route path="/contact"element={<Contact/>}/>
          </Routes>
    </BrowserRouter>
    <div>
    <footer>
      <Footer/>
    </footer>
    </div>
   {/* without Routing, all the components are in the same home page 
    <Home/>
    <About college="KEC" clg1="kongu Arts" clg2="Kongu"/>
    <Gallery/>
    <Contact/>
    <ClassEg/>
    */}

   </div>
  )
}

export default App;

 