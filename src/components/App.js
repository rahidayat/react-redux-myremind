import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder } from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  postReminder() {
    console.log(this.state);
    this.props.addReminder(this.state.text);
  }

  removeReminder(id) {
    console.log('deleting in application', id);
    this.props.deleteReminder(id)
  }

  renderReminders() {
    const { reminders } = this.props
    // console.log('reminders', reminders);
    return(
      <ul className="list-group col-sm-4">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">{reminder.text}</div>
              <div
                className="list-item delete-btn"
                onClick={() => this.removeReminder(reminder.id)}
                >
                &#x2715;
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Don't Forget to...
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="what are you thinking?"
              onChange={event => this.setState({text: event.target.value})}
             />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.postReminder()}
            >
            Add Task
          </button>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
