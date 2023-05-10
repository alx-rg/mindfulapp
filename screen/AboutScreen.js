import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';

function TimerModal({ visible, onClose }) {
  const [remainingSeconds, setRemainingSeconds] = useState(61);

  const tick = () => {
    setRemainingSeconds(prevSeconds => {
      if (prevSeconds === 1) {
        onClose();
        return 0;
      }
      return prevSeconds - 1;
    });
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  }, []);

  React.useEffect(() => {
    if (!visible) {
      setRemainingSeconds(61);
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{remainingSeconds}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

function AboutScreen() {
  const [isTimerVisible, setIsTimerVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        onPress={() => setIsTimerVisible(true)}
      >
        1 minute Mindfulness ⏱️
      </Text>

      <TimerModal
        visible={isTimerVisible}
        onClose={() => setIsTimerVisible(false)}
      />

      <Text style={styles.subtitle}>
         Mindfulness can help you reduce stress, improve your mood, and enhance your well-being. You can practice mindfulness anytime and anywhere, even for just a minute.
      </Text>
      <View style={styles.stepsContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.stepNumber, {backgroundColor: '#CCD5AE', width: 45}]}>1.</Text>
          <Text style={[styles.stepText, {color: '#031D44'}]}>Find a comfortable position and close your eyes or lower your gaze.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.stepNumber, {backgroundColor: '#E9EDC9', width: 45}]}>2.</Text>
          <Text style={[styles.stepText, {color: '#031D44'}]}>Take a few deep breaths and notice how your body feels.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.stepNumber, {backgroundColor: '#FEFAE0', width: 45}]}>3.</Text>
          <Text style={[styles.stepText, {color: '#031D44'}]}>Bring your attention to one thing, such as your breath, a sound, or a sensation.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.stepNumber, {backgroundColor: '#FAEDCD', width: 45}]}>4.</Text>
          <Text style={[styles.stepText, {color: '#031D44'}]}>If your mind wanders, gently bring it back to your focus without judging yourself.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.stepNumber, {backgroundColor: '#D4A373', width: 45}]}>5.</Text>
          <Text style={[styles.stepText, {color: '#031D44'}]}>When the minute is up, open your eyes and notice how you feel.</Text>
        </View>
      </View>
      <Text style={[styles.subtitle, {marginTop: 10, color: '#031D44'}]}>You can repeat this exercise as often as you like throughout the day.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFAE0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 30
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#031D44',
    marginBottom: 10,
    textDecorationLine: 'underline'
  },
  subtitle: {
    fontSize: 16,
    color: '#031D44',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepsContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  step: {
    fontSize: 16,
    color: '#031D44',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  stepText: {
    fontSize: 18,
    lineHeight: 30,
    flex: 1,
  },
  timerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default AboutScreen;
