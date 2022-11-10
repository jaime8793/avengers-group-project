import { Route, Routes } from 'react-router-dom';
import Today from './Components/Today';
import Navbar from './Components/Navbar';
import Important from './Components/Important';
import CompletedTask from './Components/CompletedTask';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [toDoList, setToDoList] = useState([]);
//ADD EMPTY ARRAY TO USEEFFECT TO STOP INFINITE LOOP
  useEffect(() => {
    fetch("http://localhost:9292/usernames")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);


  return (
    <div className="container App">
      <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/today" element={<Today />} />
            <Route path="/important" element={<Important />} />
            <Route path="/completedTask" element={<CompletedTask />} />
          </Routes>
        </div>
      </>

    </div>
  );
}

export default App;