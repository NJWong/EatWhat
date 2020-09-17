import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
} from 'react-native';

const EatWhatTextField = props => {
	const handleChange = (event) => {
		props.onChange(event.nativeEvent.text);
	}

	return (
		<View style={styles.textFieldGroup}>
			<Text style={styles.textLabel}>{props.label}</Text>
			<TextInput
				style={styles.textInput}
				value={props.value}
				onChange={handleChange}
				{...props.textInputProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textFieldGroup: {
		marginVertical: 12,
	},
	textLabel: {
		fontSize: 18,
	},
	textInput: {
		height: 50,
		fontSize: 18,
		borderColor: '#979797',
		borderWidth: 1,
		borderRadius: 5,
		marginTop: 6,
		paddingVertical: 12,
		paddingHorizontal: 16,
	}
})

export default EatWhatTextField;