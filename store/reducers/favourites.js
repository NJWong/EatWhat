import { ADD_FAVE, REMOVE_FAVE } from '../actions/favourites';

const favesReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_FAVE:
			return [...state, action.meal];
		case REMOVE_FAVE:
			return state.filter(meal => meal.id !== action.mealId);
		default:
			return state;
	}
};

export default favesReducer