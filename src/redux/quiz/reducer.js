import * as types from './actionTypes';

const initialState = {
  isQuizLoading: false,
  questions: [],
  answers: []
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.QUIZ_GET_REQUEST:
      return {
        ...state,
        questions: action.payload,
        answers: [],
        isQuizLoading: false,
      };
    case types.SET_QUIZ_LOADING:
      return {
        ...state,
        isQuizLoading: action.payload,
      };
    case types.SET_QUIZ_ANSWERS:
      return {
        ...state,
        answers: action.payload
      };
    case types.RESET_QUIZ_DATA:
      console.log("types.RESET_QUIZ_DATA");
      return {
        ...state,
        questions: [],
        answers: [],
        isQuizLoading: false,
      };
    default:
      return state;
  }
};

export default auth;
