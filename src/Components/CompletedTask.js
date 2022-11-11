import React from 'react';
import Today from './Today';
import { useState } from 'react';


function Completed() {
  const [toDo, setToDo] = useState([]);

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }
  return (
    <div >
      <Today />
    </div>
  );
}
export default Completed;