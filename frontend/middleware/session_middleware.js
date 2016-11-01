import SessionConstants from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(SessionConstants.RECEIVE_CURRENT_USER(user));
  const errorCallback = xhr => dispatch(SessionConstants.RECEIVE_ERRORS(xhr.responseJSON));

  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
