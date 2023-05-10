import * as React from 'react';
import { View, Text, Button } from 'react-native';

function AboutScreen( {navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mindfulness</Text>
      <Text>Being mindful means paying attention to the present moment with curiosity and openness. It can help you reduce stress, improve your mood, and enhance your well-being. You can practice mindfulness anytime and anywhere, even for just a minute.</Text>
      <Text>To do a quick 1 minute mindfulness meditation, follow these steps:</Text>
      <Text>Find a comfortable position and close your eyes or lower your gaze.</Text>
      <Text>Take a few deep breaths and notice how your body feels.</Text>
      <Text>Bring your attention to one thing, such as your breath, a sound, or a sensation.</Text>
      <Text>If your mind wanders, gently bring it back to your focus without judging yourself.</Text>
      <Text>When the minute is up, open your eyes and notice how you feel.</Text>
      <Text>You can repeat this exercise as often as you like throughout the day.</Text>

      {/* <Button
        title="Go to List"
        onPress={() => navigation.navigate('List')}
      /> */}
    </View>
  );
}

export default AboutScreen;
