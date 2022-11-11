import React from 'react';
import { useState } from 'react';
import Today from './Today';


function Important() {
  const [toDo, setToDo] = useState([]);

  const newTask = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo([{newTask}]);
  }
  return (
    <div>
      <Today />
    </div>
  );
}
export default Important;