import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	Text,
	SafeAreaView,
	View,
	StyleSheet,
	Button,
} from 'react-native';

import { setUserEmail } from '../store/actions/user';

const Hooks = () => {
	const [counter, setCounter] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('Mounted');

		return () => {
			console.log('Cleanup');
		}
	}, []);

	useEffect(() => {
		console.log('Counter update:', counter);
	}, [counter]);

	const logOut = () => {
		dispatch(setUserEmail(null));
	}

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.screenTitle}>Hooks</Text>
				<View style={styles.content}>
					<Text style={{ marginBottom: 12 }}>Counter test with `useState()`.</Text>
					<Button
						title="Increment"
						onPress={() => { setCounter(counter + 1) }}
						color="#5CAE8B"
					/>
					<Button
						title="Decrement"
						onPress={() => { setCounter(counter - 1) }}
						color="#5CAE8B"
					/>
					<Text style={{ marginTop: 12, fontSize: 20 }}>Counter: {counter}</Text>
				</View>

				<Button
					title="Log out"
					onPress={logOut}
					color="#5CAE8B"
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
	container: {
		flex: 1,
		paddingTop: 36,
	},
	screenTitle: {
		fontSize: 26,
		marginBottom: 12,
		marginHorizontal: 24,
	},
	content: {
		marginHorizontal: 24,
		alignItems: 'flex-start',
	}
});

export default Hooks;