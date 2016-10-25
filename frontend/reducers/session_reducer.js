// The SessionReducer should listen for 3 action types and respond to each like so:
//
// RECEIVE_CURRENT_USER - sets currentUser to the action's user and clears errors
// RECEIVE_ERRORS - sets errors to the action's errors and clears the currentUser
// LOGOUT - clears both errors and currentUser
// Your SessionReducer should maintain its own default state. To do that pass in an object as a default argument to SessionReducer with currentUser set to null and errors set to an empty array.
//
// Remember to use both Object.freeze() and merge from the lodash library to prevent the state from being accidentally mutated.

import {SessionConstants} from '../actions/session_actions.js';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

export const SessionReducer = function(state = _nullUser, action){
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    case SessionConstants.LOGOUT:
      return merge({}, _nullUser);
    default:
      return state;
  }
};
