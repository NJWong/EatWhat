import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { addFave, removeFave } from '../store/actions/favourites';

const MealItem = props => {
	const isFavourite = useSelector(state => state.faves.some(fave => fave.id === props.id));
	const dispatch = useDispatch();

	const toggleIsFavourite = () => {
		isFavourite ? dispatch(removeFave(props.id)) : dispatch(addFave(props));
	}

	return (
		<View style={styles.container}>
			<Image source={{ uri: props.image }} style={styles.image} />
			<View style={styles.content}>
				<View style={styles.contentHeader}>
					<Text style={styles.title}>{props.title}</Text>
					<TouchableOpacity onPress={toggleIsFavourite} activeOpacity={0.5}>
						<Ionicons name={ isFavourite ? 'ios-star' : 'ios-star-outline' } size={22} color="#5CAE8B" />
					</TouchableOpacity>
				</View>
				<Text style={styles.description}>{props.description}</Text>
				<Text style={styles.calories}>{props.calories} cal</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginVertical: 12,
		marginHorizontal: 24,
		elevation: 5,
		shadowColor: '#333333',
		shadowOffset: { height: 1, width: -1 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		backgroundColor: 'white',
		padding: 12,
		borderRadius: 4,
	},
	content: {
		flex: 1,
		backgroundColor: 'white',
		paddingLeft: 12,
	},
	contentHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 8,
	},
	image: {
		width: 80,
		height: '100%',
		borderRadius: 4,
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#333333',
	},
	description: {
		color: '#666666',
	},
	calories: {
		fontSize: 12,
		marginTop: 8,
		color: '#5CAE8B',
		fontWeight: 'bold',
	},
});

export default MealItem;