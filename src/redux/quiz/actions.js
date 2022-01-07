import axios from 'axios';

import * as types from './actionTypes';

const API_URL = process.env.REACT_APP_API_URL;

export const getQuestions = () => {
	return async dispatch => {
		dispatch(setQuizIsLoading(true));
		return axios.post(`${API_URL}?amount=10&difficulty=hard&type=boolean`)
			.then(res => {
				dispatch({
					type: types.QUIZ_GET_REQUEST,
					payload: res.data.results
				})
				return res.data;
			}).catch(error => {
				dispatch({
					type: types.QUIZ_GET_REQUEST,
					payload: []
				})
				return error;
			})
	};
};


export const setQuizIsLoading = (payload = false) => ({
	type: types.SET_QUIZ_LOADING,
	payload: payload,
});

export const setQuizAnswers = (payload = []) => ({
	type: types.SET_QUIZ_ANSWERS,
	payload: payload,
});

export const restQuizData = () => ({
	type: types.RESET_QUIZ_DATA
});
