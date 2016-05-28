import * as types from '../constants/ActionTypes'
import keys from '../keys.json'

import {
  keyToUriId
} from '@philholden/redux-swarmlog'

const reduxSwarmLogId = keyToUriId(keys.public)

export function addTodo(text) {
  return { type: types.ADD_TODO, text, reduxSwarmLogId }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id, reduxSwarmLogId }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text, reduxSwarmLogId }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id, reduxSwarmLogId }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL, reduxSwarmLogId }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED, reduxSwarmLogId }
}
