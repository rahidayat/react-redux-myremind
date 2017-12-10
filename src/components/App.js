import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions'
import moment from 'moment'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  postReminder() {
    console.log('add in app',this.state);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  removeReminder(id) {
    console.log('deleting in application', id);
    this.props.deleteReminder(id)
  }

  removeAllReminders() {
    this.props.clearReminders()
  }

  renderReminders() {
    const { reminders } = this.props
    // console.log('reminders', reminders);
    return(
      <ul className="list-group col-sm-4">
        {reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              </div>
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
             <input
               className="form-control"
               type="datetime-local"
               onChange={event => this.setState({dueDate: event.target.value})}
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
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => this.removeAllReminders()}
          >
          Clear All
        </button>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
