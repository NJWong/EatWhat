export const ADD_FAVE = 'ADD_FAVE';
export const REMOVE_FAVE = 'REMOVE_FAVE';

export const addFave = meal => {
	return {
		type: ADD_FAVE,
		meal,
	};
};

export const removeFave = id => {
	return {
		type: REMOVE_FAVE,
		mealId: id,
	}
};