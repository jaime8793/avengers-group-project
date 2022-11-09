import React from 'react';

function Important() {
  return (
    <div>
      <nav>
        <h2>Important</h2>
        <h6>Try starring some task to see them here</h6>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Add a task"
        />
        <button className='addTaskButton'>Add</button>
      </div>
    </div>
  );
}

export default Important;