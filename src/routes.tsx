import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cult from './pages/Cult';
import Live from './pages/Live';
import SelectContent from './pages/SelectContent';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#1C1A22',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cult" component={Cult} />
        <Stack.Screen name="Live" component={Live} />
        <Stack.Screen name="SelectContent" component={SelectContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
