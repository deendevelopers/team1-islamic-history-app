import * as types from './actionTypes';
import userService from '../../services/UserService';

export const fetchUser = (username) => {
  return async (dispatch) => {
    console.log("fetchUser username", username);
    userService.getUserByName(username)
        .then(data => {
          console.log("fetchUser", data);
          if (data == null || data.length < 1) {
            console.log("fetchUser", "failure");
            dispatch(fetchUserFailure())
          } else {
            console.log("fetchUser", "success", data);
            dispatch(fetchUserSuccess(data[0]))
          }
        });
  }
};

export const updateUser = (username) => {
  return async (dispatch) => {
    userService.getUserByName(username)
        .then(data => {
          if (data == null || data.length < 1) {
            userService.postUser(username)
                .then(data => {
                  dispatch(fetchUser(username));
                });
          } else {
            dispatch(fetchUser(username));
          }
        });
  }
};

export const updateCurrentUsername = (username) => ({
  type: types.UPDATE_CURRENT_USERNAME,
  payload: username,
});

const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST,
  payload: null,
});

const fetchUserFailure = () => ({
  type: types.FETCH_USER_FAILURE,
  payload: null,
});

const fetchUserSuccess = (user) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: user,
});