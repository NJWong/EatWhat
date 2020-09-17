import React from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text
} from 'react-native';

const EatWhatButton = props => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
			<View style={props.isSecondary ? styles.buttonSecondary : styles.button}>
				<Text style={props.isSecondary ? styles.buttonSecondaryTitle : styles.buttonTitle}>{props.title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		height: 60,
		width: '100%',
		marginVertical: 8,
		elevation: 5,
		shadowColor: '#333333',
		shadowOffset: { height: 2, width: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#5CAE8B',
		borderRadius: 48,
	},
	buttonTitle: {
		textAlign: 'center',
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
	},
	buttonSecondary: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
		borderColor: '#5CAE8B',
		borderWidth: 1,
		borderRadius: 48,
	},
	buttonSecondaryTitle: {
		textAlign: 'center',
		color: '#5CAE8B',
		fontSize: 22,
		fontWeight: 'bold',
	}
});

export default EatWhatButton;