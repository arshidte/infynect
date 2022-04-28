import {
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_CREATE_REQUEST,
  STUDENT_CREATE_SUCCESS,
  STUDENT_CREATE_FAIL
} from "../Constants/studentConstants";
import axios from 'axios';

export const listStudents =  () => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_LIST_REQUEST });

    const { data } = await axios.get(`/api/students`);

    dispatch({
      type: STUDENT_LIST_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: STUDENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createStudent = (name, dept, email, mobile, address) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_CREATE_REQUEST });

    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    }

    const { data } = await axios.post(`/api/students`, {name, dept, email, mobile, address}, config);

    dispatch({
      type: STUDENT_CREATE_SUCCESS,
      payload: data,
    });

  } catch (error) {

    dispatch({
      type: STUDENT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

  }
};
