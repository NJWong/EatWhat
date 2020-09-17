import { SET_EMAIL } from '../actions/user';

const initialState = {
	email: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EMAIL:
			return {
				email: action.email
			};
		default:
			return state;
	}
};

export default userReducer