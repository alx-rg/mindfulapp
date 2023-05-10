import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {

  const { itemId, otherParam } = route.params;

  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Text>itemId: {JSON.stringify(itemId)}</Text>
    <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    <Button
      title="Go to Details... again"
      onPress={() =>
        navigation.push('Details', {
        itemId: Math.floor(Math.random() * 100),
        otherParam: Math.random().toString(36).substring(7)
      })
        }
    />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go to List"
      onPress={() => navigation.navigate('List')}
    />
  </View>
 );
}

export default DetailsScreen;
