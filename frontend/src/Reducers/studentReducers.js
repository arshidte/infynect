import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_CREATE_REQUEST,
  STUDENT_CREATE_SUCCESS,
  STUDENT_CREATE_FAIL,
  STUDENT_CREATE_RESET,
} from "../Constants/studentConstants";

export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true, students: [] };
    case STUDENT_LIST_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STUDENT_CREATE_REQUEST:
      return { loading: true };
    case STUDENT_CREATE_SUCCESS:
      return { loading: false, success: true, student: action.payload };
    case STUDENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case STUDENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};