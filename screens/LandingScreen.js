import React from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';

import EatWhatButton from '../components/EatWhatButton';

const LandingScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.screenInner}>
				<View style={styles.logo}>
					<Image source={require('./images/eatwhatlogo.png')} />
				</View>
				<Text style={styles.brandName}>
					<Text style={styles.brandNamePrimary}>EAT</Text>
					<Text style={styles.brandNameSecondary}>WHAT</Text>
				</Text>
				<View>
					<EatWhatButton
						title="Register"
						onPress={() => navigation.navigate('Register')}
					/>
					<EatWhatButton
						title="Log in"
						onPress={() => navigation.navigate('LogIn')}
						isSecondary={true}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: 'white',
	},
	screenInner: {
		flex: 1,
		paddingHorizontal: 32,
		paddingBottom: 32,
		paddingTop: 48,
		justifyContent: 'space-between',
	},
	logo: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 48,
	},
	brandName: {
		textAlign: 'center',
		marginTop: 24,
		marginBottom: 24,
		fontSize: 32,
		fontWeight: 'bold',
	},
	brandNamePrimary: {
		color: '#5CAE8B'
	},
	brandNameSecondary: {
		color: '#333333'
	},
	primaryCta: {
		backgroundColor: '#5CAE8B',
		color: 'white',
	},
	spacer: {
		marginBottom: 'auto'
	}
});

export default LandingScreen;