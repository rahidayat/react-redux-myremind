import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          My Reminder
        </div>
        <div className="form-inline">
          <div clasName="form-group">
            <input
              className="form-control"
              placeholder="I have to.."
             />
          </div>
          <button
            type="button"
            className="btn btn-success"
            >
            Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

export default App;
