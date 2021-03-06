import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _initialState = {
  currentUser: null,
  errors: {}
};

export default (oldState = _initialState, action) => {
  Object.freeze(oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user, errors: {}};

    case RECEIVE_ERRORS:

      return {
        currentUser: oldState.currentUser,
        errors: action.errors
      };

    case CLEAR_ERRORS:

      return {
        currentUser: oldState.currentUser,
        errors: {},
      };

    default:
      return oldState;
  }
};
