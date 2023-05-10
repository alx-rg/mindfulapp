import * as React from 'react';
import AddTodo from '../app/components/AddText';
import { View } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AddTodo />
    </View>
  );
}

export default HomeScreen;
