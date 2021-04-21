import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddEvents from '../screens/AddEvents';
import EventsListings from '../screens/EventsListings';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddEvents">
        <Stack.Screen name="AddEvents" component={AddEvents} />
        <Stack.Screen name="EventsListings" component={EventsListings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
