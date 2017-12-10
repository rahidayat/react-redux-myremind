import { ADD_REMINDER } from '../constants';
import uuid from 'uuid'

const reminder = (action) => {
  return {
    text: action.text,
    id: uuid()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders
