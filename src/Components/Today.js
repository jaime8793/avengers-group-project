import React from "react";
import {useEffect, useState} from 'react';
import AddTaskForm from './AddTaskForm';
import UpdateForm from './UpdateForm';
import ToDo from './ToDo';

function Today() {
    const [toDo, setToDo] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    useEffect(() => {
        // Get Tasks from database
        fetch('https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks')
        .then(res => res.json())
        .then(data => {
          setToDo(data);
        })
      }, []);
    
    
      const addTask = () => {
        if(newTask) {
          let num = toDo.length + 1; 
          let newEntry = { id: num, title: newTask, status: false }
          // Add to database
          fetch('https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
          })
          .then(res => res.json())
          .then(data => {
            setToDo([...toDo, data]);
            setNewTask('');
          })
    
          /*setToDo([...toDo, newEntry])
          setNewTask('');*/
        }
      }

      const deleteTask = (id) => {
        let newTasks = toDo.filter( task => task.id !== id)
        // Delete from database
        fetch(`https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
        setToDo(newTasks);
      }
      )
      }
    
      const markDone = (id) => {
        let newTask = toDo.map( task => {
          if( task.id === id ) {
            return ({ ...task, status: !task.status })
          }
          return task;
        })
        setToDo(newTask);
      }

      const cancelUpdate = () => {
        setUpdateData('');
      }

      const changeTask = (e) => {
        let newEntry = {
          id: updateData.id,
          title: e.target.value,
          status: updateData.status ? true : false
        }

        fetch(`https://my-json-server.typicode.com/jaime8793/To-DO-LIST-PROJECT-PHASE-2/tasks${updateData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEntry)
    })
    .then(res => res.json())
    .then(data => {
      setUpdateData(data);
    })
    /*setUpdateData(newEntry);*/
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }
  
  return (
    <div>
   <br /><br />
    <h2>Avengers' To Do List App</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />  
 
  );
    </div>
  );
}


export default Today;