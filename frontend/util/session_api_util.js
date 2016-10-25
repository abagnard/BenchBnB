// import {  } from '../actions/';

export const signup = (user, success, error) => {
  $.ajax({
    url: `/api/user`,
    method: `POST`,
    data: user,
    success,
    error,
  });
};

export const login = (user, success, error) => {
  $.ajax({
    url: `/api/session`,
    method: `POST`,
    data: user,
    success,
    error,
  });
};

export const logout = (user, success, error) => {
  $.ajax({
    url: `/api/session`,
    method: `DELETE`,
    success,
    error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
  });
};
