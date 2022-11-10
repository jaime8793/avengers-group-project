import React from 'react';
import ToDo from './ToDo';


function Important() {
  return (
    <div>
      <ToDo 
        title="Important"
        status="important"
        important={true}
              />
    </div>
  );
}
export default Important;