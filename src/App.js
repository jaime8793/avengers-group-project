import { Route, Routes } from 'react-router-dom';
import Today from './Components/Today';
import Navbar from './Components/Navbar';
import Important from './Components/Important';
import CompletedTask from './Components/CompletedTask';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);



  useEffect(() => {
    fetch("http://localhost:9292/usernames")
    fetch("http://localhost:9292/todo_lists")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);
  console.log(data)

  return (
    <div className="container App">
      {/* <img src={require('./Components/Photos/').default} height={200} width={200}></img> */}
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