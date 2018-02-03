import { INCREMENT_COUNTER } from '../constants/actionTypes';

const incrementCounter = () => ({ type: INCREMENT_COUNTER });

export const increment = () => dispatch => {
  dispatch(incrementCounter());
};
