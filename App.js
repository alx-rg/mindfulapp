import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import HomeScreen from './screen/HomeScreen';
import ListScreen from './screen/ListScreen';
import AboutScreen from './screen/AboutScreen';
import { Ionicons } from 'react-native-vector-icons'

import { store } from './app/store';

const Tab = createBottomTabNavigator();


function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'heart-circle' : 'heart-circle-outline';
      } else if (route.name === 'List') {
        iconName = focused ? 'bar-chart' : 'bar-chart-outline';
      } else if (route.name === 'About') {
        iconName = focused ? 'leaf' : 'leaf-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#031D44', // Active/focused color
    tabBarInactiveTintColor: '#6b705c', // Inactive color
    tabBarStyle: { backgroundColor: '#FEFAE0' },
    tabBarInactiveBackgroundColor: '#FAEDCD',
    tabBarActiveBackgroundColor: '#FEFAE0',
    headerStyle: {
      backgroundColor: '#FEFAE0',
    },
    headerTintColor: '#031D44',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
  })}
>

          <Tab.Screen name="Home"
            component={HomeScreen}
            options={{
              title: "Mindful Me",
              headerStyle: {
              backgroundColor: '#CCD5AE'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24
              }
              }}
            />
          <Tab.Screen name="List"
            component={ListScreen}
            options={{
              title: "Mindful Streak",
              headerStyle: {
              backgroundColor: '#CCD5AE'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24
              }
              }}
          />
          <Tab.Screen name="About"
            component={AboutScreen}
            options={{
              title: "Mindful How To",
              headerStyle: {
              backgroundColor: '#CCD5AE'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24
              }
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
