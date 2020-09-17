export const SET_EMAIL = 'SET_EMAIL';

export const setUserEmail = email => {
	return {
		type: SET_EMAIL,
		email,
	};
};