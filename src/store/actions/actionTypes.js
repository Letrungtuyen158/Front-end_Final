const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",

  //admin
  FETCH_GENDER_START: "FETCH_GENDER_START",
  FETCH_GENDER_SUCSSES: "FETCH_GENDER_SUCSSES",
  FETCH_GENDER_FAILDED: "FETCH_GENDER_FAILDED",

  FETCH_POSITION_SUCSSES: "FETCH_POSITION_SUCSSES",
  FETCH_POSITION_FAILDED: "FETCH_POSITION_FAILDED",

  DELETE_USER_SUCSSES: "DELETE_USER_SUCSSES",
  DELETE_USER_FAILDED: "DELETE_USER_FAILDED",

  FETCH_ROLE_SUCSSES: "FETCH_ROLE_SUCSSES",
  FETCH_ROLE_FAILDED: "FETCH_ROLE_FAILDED",

  SAVE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  SAVE_USER_FAILDED: "CREATE_USER_FAILDED",

  EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
  EDIT_USER_FAILDED: "EDIT_USER_FAILDED",

  FETCH_ALL_USERS_SUCSSES: "FETCH_ALL_USERS_SUCSSES",
  FETCH_ALL_USERS_FAILDED: " FETCH_ALL_USERS_FAILDED",

  FETCH_TOP_DOCTORS_SUCSSES: "FETCH_TOP_DOCTORS_SUCSSES",
  FETCH_TOP_DOCTORS_FAILDED: " FETCH_TOP_DOCTORS_FAILDED",

  FETCH_ALL_DOCTORS_SUCSSES: "FETCH_ALL_DOCTORS_SUCSSES",
  FETCH_ALL_DOCTORS_FAILDED: " FETCH_ALL_DOCTORS_FAILDED",

  SAVE_DETAIL_DOCTORS_SUCSSES: "SAVE_DETAIL_DOCTORS_SUCSSES",
  SAVE_DETAIL_DOCTORS_FAILDED: "SAVE_DETAIL_DOCTORS_FAILDED",
});

export default actionTypes;
