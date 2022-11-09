import { Route, Routes } from 'react-router-dom';
import Today from './Components/Today';
import Navbar from './Components/Navbar';
import Important from './Components/Important';
import CompletedTask from './Components/CompletedTask';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {

  return (
    <div className="container App">
       <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/today" element={<Today />}/>
          <Route path="/important" element={<Important />}/>
          <Route path="/completedTask" element={<CompletedTask />}/>
        </Routes>
      </div>
    </>

    </div>
  );
}
    
export default App;