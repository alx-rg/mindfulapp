import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Modal, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux'
import { addTodo } from '../Todos'
import { useState } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default function AddTodo() {
  const [name, setName] = useState("Hello")
  const [body, setBody] = useState(null)
  const [mind, setMind] = useState(null)
  const [focus, setFocus] = useState(null)
  const [breath, setBreath] = useState(null)
  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleAddTodo = () => {
  //   dispatch(addTodo({ name, body, mind, breath, focus }))

  const handleAddTodo = () => {
    dispatch(addTodo({ name, body, mind, breath, focus }));
    setName('');
    setBody(null);
    setMind(null);
    setBreath(null);
    setFocus(null);
    setIsModalVisible(true);
  };

  const commonTabStyle = {
    backgroundColor: '#D4A373',
    width: '80%',
    tabStyle: {
      backgroundColor: '#FEFAE0',
      width: 50,
    },
    activeTabStyle: {
      backgroundColor: '#D4A373',
      width: 50,
    },
    tabTextStyle: {
      color: '#031D44',
    },
    activeTabTextStyle: {
      color: 'white',
    },
  };

  return (
		<View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.heading}>What is your state of mind right now?</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Words describing your mental state atm...'
          placeholderTextColor='#9E9E9E'
        />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.heading}>Awareness</Text>
        <Text style={styles.subheading}>How aware are you of your thoughts and feelings?</Text>
        <Text style={styles.subheading}>Scale of 1 (not at all) to 5 (very aware)</Text>
        <SegmentedControlTab
          values={['1', '2', '3', '4', '5']}
          selectedIndex={body}
          onTabPress={setBody}
          tabsContainerStyle={commonTabStyle}
        />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.heading}>Clarity</Text>
        <Text style={styles.subheading}>How clear is your mind?</Text>
        <Text style={styles.subheading}>Scale of 1 (very foggy) to 5 (very clear)</Text>
        <SegmentedControlTab
          values={['1', '2', '3', '4', '5']}
          selectedIndex={mind}
          onTabPress={setMind}
          tabsContainerStyle={commonTabStyle}
        />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.heading}>Focus</Text>
        <Text style={styles.subheading}>How focused are you on the present moment?</Text>
        <Text style={styles.subheading}>Scale of 1 (very distracted) to 5 (very focused)</Text>
        <SegmentedControlTab
          values={['1', '2', '3', '4', '5']}
          selectedIndex={focus}
          onTabPress={setFocus}
          tabsContainerStyle={commonTabStyle}
        />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.heading}>Calmness</Text>
        <Text style={styles.subheading}>How calm are you feeling?</Text>
        <Text style={styles.subheading}>Scale of 1 (very anxious) to 5 (very calm)</Text>
        <SegmentedControlTab
          values={['1', '2', '3', '4', '5']}
          selectedIndex={breath}
          onTabPress={setBreath}
          tabsContainerStyle={commonTabStyle}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.addButtonText}>Save</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Item saved successfully!</Text>
            <Button
              title="OK"
              onPress={() => setIsModalVisible(false)}
              color="#031D44"
              style={styles.okButton}
            />
          </View>
        </View>
      </Modal>

			<StatusBar style="auto" />
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
		width: '100%',
		height: 30
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#0375FF',
    backgroundColor: '#fff',
    width: 320,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#CCD5AE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  addButtonText: {
    color: '#031D44',
    fontWeight: 'bold',
    fontSize: 16
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    backgroundColor: '#CCD5AE',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    color: '#031D44',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
  okButton: {
    backgroundColor: '#CCD5AE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  questionContainer: {
    marginBottom: 20,
  },
  heading: {
    color: '#031D44',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subheading: {
    color: '#031D44',
    fontSize: 14,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: '#D4A373',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    color: '#031D44',
  },
  commonTabStyle: {
    backgroundColor: '#E9EDC9',
    borderColor: '#D4A373',
  },
});
