import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  getTopDoctorHomeService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import { toast } from "react-toastify";
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
        toast.success("create a new user succes");
        dispatch(saveUserSuccess());
      } else {
        toast.error("Create failed new  user error!");
        dispatch(saveUserFailed());
      }
    } catch (e) {
      toast.error("Create failed new  user error!");
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

export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.errcode === 0) {
        dispatch(fetchAllUsersSucsses(res.users.reverse()));
      } else {
        toast.error("Fetch all  user error!");
        dispatch(fetchAllUsersFailed());
      }
    } catch (e) {
      toast.error("Fetch all  user error!");
      dispatch(fetchAllUsersFailed());
      console.log("fetchAllUsersFailed error", e);
    }
  };
};

export const fetchAllUsersSucsses = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCSSES,
  users: data,
});
export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILDED,
});

export const fectchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService(3);
      if (res && !res.errCode) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCSSES,
          dataDoctors: res.data,
        });
      } else
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
        });
    } catch (e) {
      console.log("FETCH_TOP_DOCTORS_SUCSSES", e);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAILDED,
      });
    }
  };
};

export const deleteNewUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      console.log(res, "checkres");
      if (res && res.errCode === 0) {
        toast.success("Delete the user succes");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("Delete the user error!");
        dispatch(deleteUserFailed());
      }
    } catch (e) {
      toast.error("Delete the user error!");
      dispatch(deleteUserFailed());
      console.log("fetchGender error", e);
    }
  };
};

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCSSES,
});
export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILDED,
});

export const EditAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      console.log(res, "checkres");
      if (res && res.errCode === 0) {
        toast.success("update a new user succes");
        dispatch(editUserSuccsess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("Update failed new  user error!");
        dispatch(editUserFailed());
      }
    } catch (e) {
      toast.error("Update failed new  user error!");
      dispatch(editUserFailed());
      console.log("fetchGender error", e);
    }
  };
};
export const editUserSuccsess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});
export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILDED,
});
