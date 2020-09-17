import React, { useState } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	StyleSheet,
} from 'react-native';

import EatWhatButton from '../components/EatWhatButton';
import EatWhatTextField from '../components/EatWhatTextField';

const RegisterScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const handleEmailChange = value => {
		setEmail(value);
	}

	const handlePasswordChange = value => {
		setPassword(value);
	}

	const handlePasswordConfirmChange = value => {
		setPasswordConfirm(value);
	}

	const register = () => {
		// navigation.navigate()
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
						placeholder: "Enter a password",
						secureTextEntry: true
					}}
				/>

				<EatWhatTextField
					label="Confirmation"
					value={password}
					onChange={handlePasswordConfirmChange}
					textInputProps={{
						autoCapitalize: "none",
						placeholder: "Confirm your password",
						secureTextEntry: true
					}}
				/>

				<EatWhatButton
					title="Register"
					onPress={register}
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

export default RegisterScreen;