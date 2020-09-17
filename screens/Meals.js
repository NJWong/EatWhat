import React from 'react';
import {
	Text,
	SafeAreaView,
	View,
	StyleSheet,
	FlatList,
} from 'react-native';

import MealItem from '../components/MealItem';

const DATA = [
	{
		id: '0',
		title: 'Turkey sandwich',
		image: 'https://www.edamam.com/web-img/b45/b45df79fec526b17fa7e156858e12497.jpg',
		description: 'Tasty turkey sandwich with mustard slaw. High in protein.',
		calories: '150'
	},
	{
		id: '1',
		title: 'Chicken & avocado salad',
		image: 'https://www.edamam.com/web-img/ff6/ff669fe4f5dd48036d8c87444dd2d03e.jpg',
		description: 'Lean chicken breast with health fats from an avocado. Perfect for a snack.',
		calories: '248'
	},
	{
		id: '3',
		title: 'Beef bulgogi',
		image: 'https://www.edamam.com/web-img/1c5/1c581e20c92766e4b7cb22675574f33d.jpg',
		description: 'Beef bulgogi with mixed vegetables.',
		calories: '320'
	},
	{
		id: '4',
		title: 'Lorem ipsum dolor',
		image: 'https://via.placeholder.com/100',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
		calories: '100'
	},
	{
		id: '5',
		title: 'Lorem ipsum dolor',
		image: 'https://via.placeholder.com/100',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
		calories: '100'
	},
	{
		id: '6',
		title: 'Lorem ipsum dolor',
		image: 'https://via.placeholder.com/100',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
		calories: '100'
	},
	{
		id: '7',
		title: 'Lorem ipsum dolor',
		image: 'https://via.placeholder.com/100',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
		calories: '100'
	},
];

const Meals = () => {
	const renderMealItem = ({ item }) => {
		return (<MealItem id={item.id} title={item.title} image={item.image} description={item.description} calories={item.calories} />);
	}

	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.container}>
				<Text style={styles.screenTitle}>Meals</Text>
				<FlatList
					data={DATA}
					renderItem={renderMealItem}
					keyExtractor={item => item.id}
					showsVerticalScrollIndicator={false}
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
	}
});

export default Meals;