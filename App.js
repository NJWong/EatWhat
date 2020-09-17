/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LandingScreen from './screens/LandingScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import Meals from './screens/Meals';
import Favourites from './screens/Favourites';
import Hooks from './screens/Hooks';

import userReducer from './store/reducers/user';
import faveReducer from './store/reducers/favourites';

const rootReducer = combineReducers({
  user: userReducer,
  faves: faveReducer,
});

const store = createStore(rootReducer);

const Stack = createStackNavigator();

const landingScreenOptions = {
  headerShown: false
};

const logInScreenOptions = {
  title: 'Log in'
}

const Unauthenticated = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={ LandingScreen } options={ landingScreenOptions } />
        <Stack.Screen name="LogIn" component={ LogInScreen } options={ logInScreenOptions } />
        <Stack.Screen name="Register" component={ RegisterScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const Authenticated = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Meals"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Meals') {
              iconName = 'ios-restaurant';
            } else if (route.name === 'Favourites') {
              iconName = 'ios-star';
            } else if (route.name === 'Hooks') {
              iconName = 'ios-home';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5CAE8B',
        }}
      >
        <Tab.Screen name="Meals" component={Meals} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Hooks" component={Hooks} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const EatWhat = () => {
  // Using email as the authentication check
  const userEmail = useSelector(state => state.user.email);

  // Show authenticated or unauthenticated state
  return userEmail ? <Authenticated /> : <Unauthenticated/>;
}

const App = () => {
  return (
    <Provider store={store}>
      <EatWhat />
    </Provider>
  );
};

export default App;
