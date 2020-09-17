import React, { useState } from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';

import EatWhatButton from '../components/EatWhatButton';
import EatWhatTextField from '../components/EatWhatTextField';
import { setUserEmail } from '../store/actions/user';

const LogInScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const dispatch = useDispatch();

	const handleEmailChange = value => {
		setEmail(value);
	}

	const handlePasswordChange = value => {
		setPassword(value);
	}

	const logIn = () => {
		dispatch(setUserEmail(email));
	}

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.formContainer}>
				<EatWhatTextField
					label="Email"
					value={email}
					onChange={handleEmailChange}
					textInputProps={{
						autoCapitalize: "none",
						placeholder: "Enter your email"
					}}
				/>

				<EatWhatTextField
					label="Password"
					value={password}
					onChange={handlePasswordChange}
					textInputProps={{
						autoCapitalize: "none",
						placeholder: "Enter your password",
						secureTextEntry: true
					}}
				/>

				<EatWhatButton
					title="Log in"
					onPress={logIn}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: 'white',
	},
	formContainer: {
		paddingHorizontal: 48,
		paddingVertical: 36,
		flex: 1,
	},
})

export default LogInScreen;