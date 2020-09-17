import React from 'react';
import {
	Text,
	SafeAreaView,
	View,
	StyleSheet,
	FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from '../components/MealItem';

const Favourites = () => {
	const faves = useSelector(state => state.faves);

	const renderMealItem = ({ item }) => {
		return (<MealItem id={item.id} title={item.title} image={item.image} description={item.description} calories={item.calories} />);
	}

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.screenTitle}>Favourites</Text>
				{
					faves.length > 0
						? <FlatList
							data={faves}
							renderItem={renderMealItem}
							keyExtractor={item => item.id}
							showsVerticalScrollIndicator={false}
						/>
						: <Text style={styles.emptyText}>You have no favourites yet!</Text>
				}
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
	emptyText: {
		marginTop: 16,
		marginHorizontal: 24,
	}
});

export default Favourites;