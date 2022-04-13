
import Home from './Home.js';
import Table1 from './Table1.js';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


  function App() {
 
  return (
   
 
      
      <div className="app-content">
      <Routes>
     
      <Route path="/" element={ <Home/> } />
        <Route path="/table1" element={ <Table1/> } />
        
      </Routes>
      </div>
    
    




     
);
}

export default App;
