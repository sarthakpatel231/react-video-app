  //import { /Button, ButtonGroup } from '@chakra-ui/react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
 import Header from './components/Header';
  import Footer from './components/Footer ';
  import Home from './components/Home';
  import Videos from './components/Videos'
  import Upload from './components/Upload'
function App() {
  return (
     
     <Router>

       <Header />
       
      <Routes>
         
        <Route path="/"element={<Home/>} />
        <Route path="/videos"element={<Videos/>} />  
        <Route path="/upload"element={<Upload/>}/>
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
