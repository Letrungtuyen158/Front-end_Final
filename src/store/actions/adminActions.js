import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
} from "../../services/userService";

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSucsses(res.data));
      } else {
        dispatch(fetchGenderFailed());
      }
    } catch (e) {
      dispatch(fetchGenderFailed());
      console.log("fetchGender error", e);
    }
  };
};
export const fetchGenderSucsses = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCSSES,
  data: genderData,
});
export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILDED,
});
export const fetchPositionSucsses = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCSSES,
  data: positionData,
});
export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILDED,
});
export const fetchRoleSucsses = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCSSES,
  data: roleData,
});
export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILDED,
});
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSucsses(res.data));
      } else {
        dispatch(fetchPositionFailed());
      }
    } catch (e) {
      dispatch(fetchPositionFailed());
      console.log("fetchGender error", e);
    }
  };
};
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      console.log(res, "resrole ");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSucsses(res.data));
      } else {
        dispatch(fetchRoleFailed());
      }
    } catch (e) {
      dispatch(fetchRoleFailed());
      console.log("fetchGender error", e);
    }
  };
};

export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log(res, "checkres");
      if (res && res.errCode === 0) {
        dispatch(saveUserSuccess());
      } else {
        dispatch(saveUserFailed());
      }
    } catch (e) {
      dispatch(saveUserFailed());
      console.log("fetchGender error", e);
    }
  };
};
export const saveUserFailed = () => ({
  type: "CREATE_USER_Failed",
});
export const saveUserSuccess = () => ({
  type: "CREATE_USER_SUCCESS",
});
