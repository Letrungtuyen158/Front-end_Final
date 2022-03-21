import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("start", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCSSES:
      let coppyState = { ...state };
      coppyState.genders = action.data;
      console.log("sucses", action);
      return {
        ...coppyState,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      console.log("faild,", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
