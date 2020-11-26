import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { selectTask } from './Task';

class Controls extends Component {
  constructor() {
    super();
    this.state = {task: '', stageId: ''}
    selectTask.subscribe((resp) => {
      this.setState({task: resp.task, stageId: resp.stage});
    });
  }
  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value={this.state.task}
          />
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-back-btn"
            disabled={this.state.stageId === 0 || !this.state.task }
            onClick={() => changeStage.next({task: this.state.task, stage: this.state.stageId -1 })}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-forward-btn"
            disabled={this.state.stageId === 3 || !this.state.task}
            onClick={() => changeStage.next({task: this.state.task, stage: this.state.stageId + 1 })}
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}
// Object interface to be passed in on stage change - {task: string; stage: string}
export const changeStage = new Subject({task: '', stage: ''});
export default Controls;
