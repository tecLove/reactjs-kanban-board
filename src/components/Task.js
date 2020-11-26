import React from 'react';
import { Subject } from 'rxjs';

const taskNameToId = name => {
  return `task-${name}`;
}

const Task = ({ name, stageId }) => {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        margin: '1rem 1rem 0 1rem'
      }}
      data-testid={taskNameToId(name)}
      onClick={() => selectTask.next({ task: name, stage: stageId })}>
      {name}
    </div>
  );
}
// // Object interface to be passed in on a task click - {task: string; stage: string}
export const selectTask = new Subject({task: '', stage: ''});
export default Task;
