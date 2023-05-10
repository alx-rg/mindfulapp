import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
            tabBarActiveTintColor: '#fff', // Active/focussed color
            tabBarInactiveTintColor: '#04395e', // Inactive color
            tabBarStyle: { backgroundColor: 'black' },
            tabBarInactiveBackgroundColor: '#dab785',
            tabBarActiveBackgroundColor: '#70a288',
            headerStyle: {
              backgroundColor: 'black',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
              }
            })
          }
        >
          <Tab.Screen name="Home"
            component={HomeScreen}
            options={{
              title: "Log It",
              headerStyle: {
              backgroundColor: '#70a288'
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
              backgroundColor: '#70a288'
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
              title: "How To Be",
              headerStyle: {
              backgroundColor: '#70a288'
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
