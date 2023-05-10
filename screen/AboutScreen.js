import * as React from 'react';
import { View, Text, Button } from 'react-native';

function AboutScreen( {navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Mindfulness</Text>

      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

export default AboutScreen;
